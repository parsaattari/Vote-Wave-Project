import React from 'react';
import { useNavigate } from 'react-router-dom';
import DemographicChart from '../components/DemographicChart';
import Timeline from '../components/Timeline';
import RegistrationGuide from '../components/RegistrationGuide';
import SuccessStories from '../components/SuccessStories';
import { demographicData } from '../data/mockData/demographicData';
import { Language, StateData } from '../types';
import { useTranslation } from '../translations';

interface Props {
  language: Language;
  selectedState: StateData;
}

export default function HomePage({ language, selectedState }: Props) {
  const t = useTranslation(language);
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };
  
  return (
    <main className="max-w-7xl mx-auto px-4 pt-20 pb-12 space-y-12">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('header.title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {t('header.subtitle')}
        </p>
      </div>

      <DemographicChart data={demographicData} language={language} />
      
      <Timeline 
        selectedState={selectedState} 
        language={language}
        onRegisterClick={handleRegisterClick}
      />
      
      <RegistrationGuide selectedState={selectedState} language={language} />

      <SuccessStories language={language} />
    </main>
  );
}