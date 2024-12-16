import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import { demographicData } from './data/mockData/demographicData';
import { stateData } from './data/mockData/stateData';
import { Language, StateData } from './types';
import { useTranslation } from './translations';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedState, setSelectedState] = useState<StateData>(stateData[0]);
  const t = useTranslation(language);
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar 
          language={language} 
          onLanguageChange={setLanguage}
          states={stateData}
          selectedState={selectedState}
          onStateChange={setSelectedState}
        />
        <Routes>
          <Route path="/" element={<HomePage {...{ language, selectedState }} />} />
          <Route path="/register" element={<RegisterPage {...{ language, selectedState }} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}