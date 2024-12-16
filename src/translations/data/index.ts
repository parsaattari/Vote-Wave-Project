import { en } from './en';
import { es } from './es';
import { fil } from './fil';
import { zh } from './zh';
import { ar } from './ar';
import { fa } from './fa';
import { Language } from '../../types';

export const translations: Record<Language, Record<string, string>> = {
  en,
  es,
  fil,
  zh,
  ar,
  fa
};