import React from 'react';

interface SankeyPathProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  width: number;
  color: string;
  opacity: number;
}

export default function SankeyPath({
  startX,
  startY,
  endX,
  endY,
  width,
  color,
  opacity
}: SankeyPathProps) {
  const curveX = (endX - startX) * 0.5;
  
  const path = `
    M ${startX} ${startY}
    C ${startX + curveX} ${startY},
      ${endX - curveX} ${endY},
      ${endX} ${endY}
  `;

  return (
    <path
      d={path}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeOpacity={opacity}
      className="transition-all duration-500"
    />
  );
}