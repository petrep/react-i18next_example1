import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './translations/en.json';
import huTranslation from './translations/hu.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: enTranslation },
      hu: { translation: huTranslation }
    },
    fallbackLng: 'en',
    detection: {
      order: ['navigator', 'localStorage', 'cookie', 'htmlTag']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
