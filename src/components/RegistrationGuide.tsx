import React, { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp, PartyPopper } from 'lucide-react';
import { StateData, Language } from '../types';
import confetti from 'canvas-confetti';
import { useTranslation } from '../translations';
import { useNavigate } from 'react-router-dom';

interface Props {
  selectedState: StateData;
  language: Language;
}

export default function RegistrationGuide({ selectedState, language }: Props) {
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  const t = useTranslation(language);
  const navigate = useNavigate();
  const [showCelebration, setShowCelebration] = useState(false);

  const handleCompletion = () => {
    setShowCelebration(true);
    
    // Trigger confetti
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.3 },
      colors: ['#4F46E5', '#818CF8', '#60A5FA']
    });

    // Wait 2 seconds then redirect
    setTimeout(() => {
      setShowCelebration(false);
      navigate('/register');
    }, 2000);
  };

  React.useEffect(() => {
    if (completedSteps.length === selectedState.requirements.length) {
      handleCompletion();
    }
  }, [completedSteps, selectedState.requirements.length]);

  const handleStepComplete = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const progress = Math.round((completedSteps.length / selectedState.requirements.length) * 100);

  return (
    <div id="registration-guide" className="bg-white p-6 rounded-lg shadow-lg scroll-mt-24">
      {/* Celebration Modal */}
      {showCelebration && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative bg-white rounded-xl p-8 text-center max-w-md mx-4 transform animate-bounce-gentle">
            <PartyPopper className="w-16 h-16 mx-auto mb-4 text-indigo-600" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t('registration.eligible')}
            </h3>
            <p className="text-gray-600">
              {t('registration.redirecting')}
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('registration.title')}</h2>
      
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center mt-2 text-gray-600">
          {t('registration.progress', { progress })}
        </p>
      </div>

      {/* Requirements List */}
      <div className="space-y-4">
        {selectedState.requirements.map((req) => (
          <div
            key={req.id}
            className="border rounded-lg p-4 transition-all duration-300"
            style={{
              borderColor: completedSteps.includes(req.id) ? '#10B981' : '#E5E7EB'
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleStepComplete(req.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    completedSteps.includes(req.id)
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-300'
                  }`}
                >
                  {completedSteps.includes(req.id) && (
                    <CheckCircle className="w-4 h-4 text-white" />
                  )}
                </button>
                <span className="font-medium text-gray-800">
                  {t(`registration.requirements.${req.id}.title`)}
                </span>
              </div>
              <button
                onClick={() => setExpandedStep(expandedStep === req.id ? null : req.id)}
                className="text-gray-500 hover:text-gray-700"
              >
                {expandedStep === req.id ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
            </div>

            {expandedStep === req.id && (
              <div className="mt-4 pl-9">
                <p className="text-gray-600 mb-2">
                  {t(`registration.requirements.${req.id}.description`)}
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  {req.details.map((detail, index) => (
                    <li key={index}>
                      {t(`registration.requirements.${req.id}.details.${index}`)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}