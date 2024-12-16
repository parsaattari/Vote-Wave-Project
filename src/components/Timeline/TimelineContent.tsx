import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { StateData, Language } from '../../types';
import { TimelineMilestone } from '../../types/timeline';
import { generateTimelineMilestones } from '../../data/timelineData';
import TimelineMilestoneComponent from './TimelineMilestone';
import TimelineProgress from './TimelineProgress';
import { useTimelineCalculations } from './hooks/useTimelineCalculations';
import { useTranslation } from '../../translations';

interface Props {
  selectedState: StateData;
  language: Language;
  onRegisterClick?: () => void;
}

export default function TimelineContent({ selectedState, language, onRegisterClick }: Props) {
  const t = useTranslation(language);
  const [milestones, setMilestones] = useState<TimelineMilestone[]>([]);
  const { progress, currentMilestone } = useTimelineCalculations(milestones);

  useEffect(() => {
    const newMilestones = generateTimelineMilestones(selectedState.id);
    setMilestones(newMilestones);
  }, [selectedState]);

  const scrollToRegistration = () => {
    const element = document.getElementById('registration-guide');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative md:pt-20 md:pb-16 md:px-12 pt-4 pb-4">
        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <TimelineProgress progress={progress} />
          <div className="absolute top-8 left-12 right-12">
            {milestones.map((milestone, index) => (
              <TimelineMilestoneComponent
                key={milestone.id}
                milestone={milestone}
                position={(index / (milestones.length - 1)) * 100}
                isActive={new Date(milestone.date) <= new Date()}
                language={language}
              />
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.id}
              className={`
                relative pl-8 border-l-2 
                ${index === milestones.length - 1 ? '' : 'pb-8'}
                ${new Date(milestone.date) <= new Date() ? 'border-indigo-600' : 'border-gray-300'}
              `}
            >
              <div className="absolute left-[-9px] top-0">
                <div 
                  className={`
                    w-4 h-4 rounded-full border-2 border-white shadow-md
                    ${new Date(milestone.date) <= new Date() ? 'bg-indigo-600' : 'bg-gray-400'}
                  `}
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900">{milestone.title}</h3>
                <p className="text-sm text-gray-500">
                  {milestone.type === 'today' 
                    ? new Date().toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')
                    : new Date(milestone.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}
                </p>
                <p className="text-sm text-gray-600">
                  {milestone.type === 'today' ? t('timeline.today') :
                   milestone.type === 'mail-registration' ? t('timeline.mailRegistration') :
                   milestone.type === 'in-person-registration' ? t('timeline.sameDay') :
                   t('timeline.electionDay')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-16 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 mb-6">
            {currentMilestone && t(currentMilestone.type === 'today' ? 'timeline.today' :
              currentMilestone.type === 'mail-registration' ? 'timeline.mailRegistration' :
              currentMilestone.type === 'in-person-registration' ? 'timeline.sameDay' :
              'timeline.electionDay')}
          </p>
          <button 
            onClick={onRegisterClick || scrollToRegistration}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 
                     transition-colors flex items-center justify-center space-x-2 mx-auto"
          >
            <CheckCircle className="w-5 h-5" />
            <span>{t('timeline.registerButton')}</span>
          </button>
        </div>
      </div>
    </>
  );
}