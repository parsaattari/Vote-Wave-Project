import React from 'react';
import { DemographicData, Language } from '../../types';
import { useChartCalculations } from './hooks/useChartCalculations';
import SankeyNode from './SankeyNode';
import SankeyFlow from './SankeyFlow';
import ChartHeader from './components/ChartHeader';
import ChartSummary from './components/ChartSummary';
import { CHART_DIMENSIONS } from './constants';
import { getColor } from './colors';
import { useTranslation } from '../../translations';

interface Props {
  data: DemographicData[];
  language: Language;
}

export default function DemographicChart({ data, language }: Props) {
  const t = useTranslation(language);
  const {
    totalPopulation,
    totalVoters,
    populationNodes,
    voterNodes,
    maxValue
  } = useChartCalculations(data);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2 text-center text-gray-800">
        {t('chart.title')}
      </h2>
      <p className="text-sm text-gray-600 text-center mb-6">
        {t('chart.subtitle')}
      </p>
      
      <div className="relative flex justify-center">
        <svg 
          viewBox={`0 0 ${CHART_DIMENSIONS.width} ${CHART_DIMENSIONS.height}`} 
          className="w-full max-w-2xl"
          style={{ maxHeight: '320px' }}
        >
          <ChartHeader language={language} />

          {/* Flows */}
          <g transform={`translate(${CHART_DIMENSIONS.padding}, 0)`}>
            {data.map((item, index) => (
              <SankeyFlow
                key={`flow-${item.ageGroup}`}
                sourceY={populationNodes[index].y}
                sourceHeight={populationNodes[index].height}
                targetY={voterNodes[index].y}
                targetHeight={voterNodes[index].height}
                color={getColor(index)}
                sourceValue={item.populationPercentage}
                targetValue={item.voterTurnoutPercentage}
                maxValue={maxValue}
              />
            ))}
          </g>

          {/* Nodes */}
          <g transform={`translate(${CHART_DIMENSIONS.padding}, 0)`}>
            {data.map((item, index) => (
              <React.Fragment key={`nodes-${item.ageGroup}`}>
                <SankeyNode
                  label={item.ageGroup}
                  value={item.populationPercentage}
                  y={populationNodes[index].y}
                  height={populationNodes[index].height}
                  color={getColor(index)}
                  align="left"
                  total={totalPopulation}
                  language={language}
                />
                <SankeyNode
                  label={item.ageGroup}
                  value={item.voterTurnoutPercentage}
                  y={voterNodes[index].y}
                  height={voterNodes[index].height}
                  color={getColor(index)}
                  align="right"
                  total={totalVoters}
                  language={language}
                />
              </React.Fragment>
            ))}
          </g>
        </svg>
      </div>

      <ChartSummary data={data} language={language} />
    </div>
  );
}