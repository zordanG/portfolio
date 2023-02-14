import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import translations from './index.js';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: false,
        fallbackLng: 'en-us',
        resources: translations,
    })