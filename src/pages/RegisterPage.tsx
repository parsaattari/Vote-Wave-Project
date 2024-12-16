import React, { useState } from 'react';
import { Language, StateData } from '../types';
import { useTranslation } from '../translations';
import { Vote, CheckCircle2, FileCheck, HelpCircle, AlertCircle, Globe, Mail, UserSquare2 } from 'lucide-react';
import GuidedRegistrationModal from '../components/GuidedRegistrationModal';

interface Props {
  language: Language;
  selectedState: StateData;
}

export default function RegisterPage({ language, selectedState }: Props) {
  const t = useTranslation(language);
  const [showGuidedModal, setShowGuidedModal] = useState(false);

  return (
    <main className="max-w-4xl mx-auto px-4 pt-24 pb-12">
      <GuidedRegistrationModal
        isOpen={showGuidedModal}
        onClose={() => setShowGuidedModal(false)}
        selectedState={selectedState}
        language={language}
      />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-indigo-600 px-6 py-8 text-white text-center">
          <Vote className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">{t('nav.registerTab')}</h1>
          <p className="text-indigo-100">{t('register.subtitle')}</p>
        </div>

        {/* Registration Method Notice */}
        <div className={`mx-6 -mt-4 p-4 rounded-lg border-2 ${
          selectedState.registrationMethod === 'full-digital' 
            ? 'bg-green-50 border-green-200 text-green-700'
            : selectedState.registrationMethod === 'print-mail'
            ? 'bg-yellow-50 border-yellow-200 text-yellow-700'
            : 'bg-orange-50 border-orange-200 text-orange-700'
        }`}>
          <div className="flex items-center space-x-2">
            <div className="flex-shrink-0">
              {selectedState.registrationMethod === 'full-digital' ? (
                <Globe className="w-5 h-5" />
              ) : selectedState.registrationMethod === 'print-mail' ? (
                <Mail className="w-5 h-5" />
              ) : (
                <UserSquare2 className="w-5 h-5" />
              )}
            </div>
            <div>
              <h3 className="font-medium">{t('register.method.title')}</h3>
              <p className="text-sm">
                {t(`register.method.${selectedState.registrationMethod}`)}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Registration Steps */}
          <div className="space-y-6">
            {selectedState.requirements.map((req, index) => (
              <div key={req.id} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-gray-900 mb-1">{t(`registration.requirements.${req.id}.title`)}</h3>
                  <p className="text-gray-600 text-sm">{t(`registration.requirements.${req.id}.description`)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="border-t pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t('register.benefits.title')}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {['voice', 'community', 'future', 'rights'].map((benefit) => (
                <div key={benefit} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">{t(`register.benefits.${benefit}`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a
              href={selectedState.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors"
            >
              <FileCheck className="w-5 h-5" />
              <span>{t('register.startButton')}</span>
            </a>
            <button
              onClick={() => setShowGuidedModal(true)}
              className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-8 py-3 rounded-full 
                       border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              <HelpCircle className="w-5 h-5" />
              <span>{t('register.helpButton')}</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}