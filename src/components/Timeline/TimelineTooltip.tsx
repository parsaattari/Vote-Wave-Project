import React from 'react';

interface TimelineTooltipProps {
  isVisible: boolean;
  content: string;
  position: 'top' | 'bottom';
}

export default function TimelineTooltip({ isVisible, content, position }: TimelineTooltipProps) {
  if (!isVisible) return null;

  return (
    <div
      className={`
        absolute left-1/2 -translate-x-1/2 z-10 w-64
        ${position === 'top' ? 'bottom-full mb-3' : 'top-full mt-3'}
      `}
    >
      <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg text-sm">
        {content}
        <div
          className={`
            absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-800 transform rotate-45
            ${position === 'top' ? 'bottom-[-6px]' : 'top-[-6px]'}
          `}
        />
      </div>
    </div>
  );
}