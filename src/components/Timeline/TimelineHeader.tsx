import React from 'react';
import { Calendar } from 'lucide-react';
import { useTranslation } from '../../translations';
import { Language } from '../../types';

interface Props {
  stateName: string;
  language: Language;
}

export default function TimelineHeader({ stateName, language }: Props) {
  const t = useTranslation(language);
  
  return (
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold text-gray-800">{t('timeline.title')}</h2>
      <div className="flex items-center space-x-2">
        <Calendar className="w-5 h-5 text-indigo-600" />
        <span className="text-gray-600">{stateName}</span>
      </div>
    </div>
  );
}