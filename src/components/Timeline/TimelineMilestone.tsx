import React, { useState } from 'react';
import { TimelineMilestone as MilestoneType } from '../../types/timeline';
import TimelineTooltip from './TimelineTooltip';
import { Language } from '../../types';
import { useTranslation } from '../../translations';

interface Props {
  milestone: MilestoneType;
  position: number;
  isActive: boolean;
  language: Language;
}

export default function TimelineMilestone({ milestone, position, isActive, language }: Props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const t = useTranslation(language);

  const getTooltipContent = () => {
    switch (milestone.type) {
      case 'today':
        return t('timeline.today');
      case 'mail-registration':
        return t('timeline.mailRegistration');
      case 'in-person-registration':
        return t('timeline.sameDay');
      case 'election':
        return t('timeline.electionDay');
      default:
        return milestone.description;
    }
  };

  return (
    <div 
      className="absolute transform -translate-x-1/2"
      style={{ left: `${position}%` }}
    >
      <div className="relative">
        <div className="absolute -top-14 text-center w-40 -translate-x-1/2 left-1/2">
          <span className="block text-sm font-medium text-gray-600 whitespace-nowrap">
            {milestone.title}
          </span>
          <span className="text-xs text-gray-500 mt-1">
            {milestone.type === 'today' 
              ? new Date().toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')
              : new Date(milestone.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}
          </span>
        </div>
        <button
          onClick={() => setShowTooltip(!showTooltip)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={`
            w-5 h-5 rounded-full border-4 border-white shadow-md transition-all
            ${isActive ? 'bg-indigo-600' : 'bg-gray-400'}
            hover:ring-4 hover:ring-indigo-100 focus:outline-none focus:ring-4 focus:ring-indigo-200
          `}
          aria-label={milestone.title}
        />
        <TimelineTooltip
          isVisible={showTooltip}
          content={getTooltipContent()}
          position={position > 50 ? 'top' : 'bottom'}
        />
      </div>
    </div>
  );
}