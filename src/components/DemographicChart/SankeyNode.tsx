import React from 'react';
import { CHART_DIMENSIONS, CHART_STYLES } from './constants';

interface SankeyNodeProps {
  label: string;
  value: number;
  y: number;
  height: number;
  color: string;
  align: 'left' | 'right';
  total: number;
}

export default function SankeyNode({
  label,
  value,
  y,
  height,
  color,
  align,
  total
}: SankeyNodeProps) {
  // const percentage = ((value / total) * 100).toFixed(1);
  const x = align === 'left' ? 0 : CHART_DIMENSIONS.flowWidth;  // Changed to use flowWidth
  
  const formattedLabel = `Age Group ${label}`;
  
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={CHART_DIMENSIONS.nodeWidth}
        height={height}
        fill={color}
        rx={CHART_STYLES.cornerRadius}
        className="filter drop-shadow-sm"
      />
      <text
        x={align === 'left' ? x - CHART_STYLES.labelPadding : x + CHART_DIMENSIONS.nodeWidth + CHART_STYLES.labelPadding}
        y={y + height / 2}
        dominantBaseline="middle"
        textAnchor={align === 'left' ? 'end' : 'start'}
        className="fill-gray-700"
        style={{ fontSize: CHART_STYLES.fontSize.label }}
      >
        {formattedLabel}
      </text>
      <text
        x={align === 'left' ? x - CHART_STYLES.labelPadding : x + CHART_DIMENSIONS.nodeWidth + CHART_STYLES.labelPadding}
        y={y + height / 2 + 16}
        dominantBaseline="middle"
        textAnchor={align === 'left' ? 'end' : 'start'}
        className="fill-gray-500"
        style={{ fontSize: CHART_STYLES.fontSize.value }}
      >
        {value}%
      </text>
    </g>
  );
}