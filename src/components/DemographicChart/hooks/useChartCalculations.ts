import { useMemo } from 'react';
import { DemographicData } from '../../../types';
import { calculateNodePositions } from '../utils';
import { CHART_DIMENSIONS } from '../constants';

export function useChartCalculations(data: DemographicData[]) {
  return useMemo(() => {
    const totalPopulation = data.reduce((sum, d) => sum + d.populationPercentage, 0);
    const totalVoters = data.reduce((sum, d) => sum + d.voterTurnoutPercentage, 0);
    
    const populationNodes = calculateNodePositions(
      data.map(d => ({ value: d.populationPercentage })),
      CHART_DIMENSIONS.height,
      CHART_DIMENSIONS.padding
    );
    
    const voterNodes = calculateNodePositions(
      data.map(d => ({ value: d.voterTurnoutPercentage })),
      CHART_DIMENSIONS.height,
      CHART_DIMENSIONS.padding
    );

    const maxValue = Math.max(
      ...data.map(d => Math.max(d.populationPercentage, d.voterTurnoutPercentage))
    );

    return {
      totalPopulation,
      totalVoters,
      populationNodes,
      voterNodes,
      maxValue
    };
  }, [data]);
}