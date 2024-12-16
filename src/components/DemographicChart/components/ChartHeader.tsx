import React from 'react';
import { CHART_DIMENSIONS, CHART_STYLES } from '../constants';
import { Language } from '../../../types';
import { useTranslation } from '../../../translations';

interface Props {
  language: Language;
}

export default function ChartHeader({ language }: Props) {
  const t = useTranslation(language);
  
  return (
    <>
      <text 
        x={CHART_DIMENSIONS.padding} 
        y={CHART_DIMENSIONS.padding / 2} 
        className="fill-gray-600"
        style={{ fontSize: CHART_STYLES.fontSize.header }}
      >
        {t('chart.population')}
      </text>
      <text 
        x={CHART_DIMENSIONS.width - CHART_DIMENSIONS.padding} 
        y={CHART_DIMENSIONS.padding / 2} 
        textAnchor="end" 
        className="fill-gray-600"
        style={{ fontSize: CHART_STYLES.fontSize.header }}
      >
        {t('chart.voterTurnout')}
      </text>
    </>
  );
}