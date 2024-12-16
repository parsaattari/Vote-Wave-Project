import React from 'react';

interface BarProps {
  label: string;
  value: number;
  maxValue: number;
  color: string;
  side: 'left' | 'right';
}

export default function Bar({ label, value, maxValue, color, side }: BarProps) {
  const width = `${(value / maxValue) * 100}%`;
  const alignment = side === 'left' ? 'text-right pr-4' : 'text-left pl-4';

  return (
    <div className="flex items-center h-16 relative">
      <div className={`w-24 ${side === 'left' ? 'text-right pr-2' : 'text-left pl-2'} text-sm text-gray-600`}>
        {label}
      </div>
      <div className="flex-1">
        <div className="h-12 bg-gray-100 rounded-lg overflow-hidden">
          <div
            className={`h-full rounded-lg transition-all duration-500 ${
              side === 'left' ? 'float-right' : 'float-left'
            }`}
            style={{ width, backgroundColor: color }}
          />
        </div>
      </div>
      <div className={`w-16 ${alignment} text-sm text-gray-600`}>
        {value.toFixed(1)}%
      </div>
    </div>
  );
}