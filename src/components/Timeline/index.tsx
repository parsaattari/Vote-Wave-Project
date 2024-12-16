import React from 'react';
import { StateData, Language } from '../../types';
import TimelineHeader from './TimelineHeader';
import TimelineContent from './TimelineContent';

interface Props {
  selectedState: StateData;
  language: Language;
}

export default function Timeline({ selectedState, language }: Props) {
  if (!selectedState) {
    console.warn("Timeline: selectedState is undefined");
    return null;
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full">
      <TimelineHeader stateName={selectedState.name} language={language} />
      <div className="mt-16">
        <TimelineContent selectedState={selectedState} language={language} />
      </div>
    </div>
  );
}