import React, { useState } from 'react';
import { Globe2, Waves, Menu, X, Vote } from 'lucide-react';
import { Language, StateData } from '../types';
import { useTranslation } from '../translations';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  states: StateData[];
  selectedState: StateData;
  onStateChange: (state: StateData) => void;
}

export default function Navbar({ 
  language, 
  onLanguageChange,
  states,
  selectedState,
  onStateChange
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslation(language);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-indigo-600 text-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <Waves className="w-8 h-8" />
              <span className="text-2xl font-bold">VoteWave</span>
            </Link>
            <Link 
              to="/register"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors
                hidden md:flex
                ${isActive('/register') 
                  ? 'bg-white text-indigo-600' 
                  : 'hover:bg-indigo-500'}`}
            >
              <Vote className="w-4 h-4" />
              <span>{t('nav.registerTab')}</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <select
              value={selectedState.id}
              onChange={(e) => {
                const state = states.find(s => s.id === e.target.value);
                if (state) onStateChange(state);
              }}
              className="bg-indigo-700 text-white px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {states.map(state => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>

            <div className="flex items-center space-x-2">
              <Globe2 className="w-5 h-5" />
              <select
                value={language}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="bg-indigo-700 text-white px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fil">Filipino</option>
                <option value="zh">中文</option>
                <option value="ar">العربية</option>
                <option value="fa">فارسی</option>
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            ${isMenuOpen ? 'block border-t border-indigo-500' : 'hidden'}
          `}
        >
          <div className="px-2 pt-2 pb-3 space-y-3">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">Select State</label>
              <select
                value={selectedState.id}
                onChange={e => {
                  const state = states.find(s => s.id === e.target.value);
                  if (state) {
                    onStateChange(state);
                    setIsMenuOpen(false);
                  }
                }}
                className="bg-indigo-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
              >
                {states.map(state => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <Globe2 className="w-4 h-4" />
                  <span>Language</span>
                </div>
              </label>
              <select
                value={language}
                onChange={(e) => {
                  onLanguageChange(e.target.value as Language);
                  setIsMenuOpen(false);
                }}
                className="bg-indigo-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fil">Filipino</option>
                <option value="zh">中文</option>
                <option value="ar">العربية</option>
                <option value="fa">فارسی</option>
              </select>
            </div>
            <Link
              to="/register"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium w-full
                ${isActive('/register') ? 'bg-white text-indigo-600' : 'bg-indigo-700 text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Vote className="w-4 h-4" />
              <span>{t('nav.registerTab')}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}