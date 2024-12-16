import React from 'react';
import { generateFlowPath } from './utils';
import { CHART_DIMENSIONS, CHART_STYLES } from './constants';

interface SankeyFlowProps {
  sourceY: number;
  sourceHeight: number;
  targetY: number;
  targetHeight: number;
  color: string;
  sourceValue: number;
  targetValue: number;
  maxValue: number;
}

export default function SankeyFlow({
  sourceY,
  sourceHeight,
  targetY,
  targetHeight,
  color,
  sourceValue,
  targetValue,
  maxValue
}: SankeyFlowProps) {
  const path = generateFlowPath(
    sourceY,
    sourceHeight,
    targetY,
    targetHeight,
    CHART_DIMENSIONS.flowWidth,
    sourceValue,
    targetValue
  );
  
  const opacity = Math.min(sourceValue, targetValue) / maxValue;
  
  return (
    <path
      d={path}
      fill={color}
      opacity={CHART_STYLES.baseOpacity + opacity * CHART_STYLES.maxOpacityBoost}
      className="transition-all duration-500 hover:opacity-80"
    />
  );
}