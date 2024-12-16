export interface NodePosition {
  y: number;
  height: number;
  value: number;
}

export interface SankeyNodeProps {
  label: string;
  value: number;
  y: number;
  height: number;
  color: string;
  align: 'left' | 'right';
  total: number;
}

export interface SankeyFlowProps {
  sourceY: number;
  sourceHeight: number;
  targetY: number;
  targetHeight: number;
  color: string;
  sourceValue: number;
  targetValue: number;
  maxValue: number;
}

export interface ChartProps {
  data: {
    ageGroup: string;
    populationPercentage: number;
    voterTurnoutPercentage: number;
  }[];
}