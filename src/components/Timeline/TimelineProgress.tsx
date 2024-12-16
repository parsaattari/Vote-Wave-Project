import React from 'react';

interface Props {
  progress: number;
}

export default function TimelineProgress({ progress }: Props) {
  return (
    <div className="h-3 bg-gray-200 rounded-full">
      <div
        className="h-full bg-indigo-600 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}