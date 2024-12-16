import React from 'react';
import { DemographicData, Language } from '../../../types';
import { useTranslation } from '../../../translations';

interface ChartSummaryProps {
  data: DemographicData[];
  language: Language;
}

export default function ChartSummary({ data, language }: ChartSummaryProps) {
  const t = useTranslation(language);
  const youthData = data[0];
  
  return (
    <div className="mt-6 text-center bg-indigo-50 p-4 rounded-lg">
      <p className="text-sm font-medium text-gray-700">
        {t('chart.youthGap')}{' '}
        <span className="text-indigo-600 font-bold">{youthData.populationPercentage}%</span>{' '}
        {t('chart.population').toLowerCase()}{' '}
        {t('chart.but')}{' '}
        <span className="text-indigo-600 font-bold">{youthData.voterTurnoutPercentage}%</span>{' '}
        {t('chart.voterTurnout').toLowerCase()}
      </p>
      <p className="mt-2 text-base font-bold text-indigo-600">
        {t('chart.callToAction')}
      </p>
    </div>
  );
}