import { Language } from '../../types';
import { translations } from '../data';

interface TranslationOptions {
  fallback?: string;
  [key: string]: any;
}

export function useTranslation(language: Language) {
  return function t(key: string, options: TranslationOptions = {}) {
    let translation = translations[language]?.[key];
    
    if (!translation) {
      if (options.fallback) {
        return options.fallback;
      }
      console.warn(`Missing translation for key: ${key} in language: ${language}`);
      return key;
    }

    // Handle interpolation
    Object.keys(options).forEach(key => {
      if (key !== 'fallback') {
        translation = translation.replace(`{${key}}`, String(options[key]));
      }
    });

    return translation;
  };
}