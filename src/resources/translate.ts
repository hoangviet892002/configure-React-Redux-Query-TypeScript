// src/translate.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import viTranslation from "./vi.json";
import { store } from "../redux/store";
const resources = {
  en: {
    translation: enTranslation,
  },
  vi: {
    translation: viTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: store.getState().language.selectedLanguage, // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already safes from xss
  },
});
store.subscribe(() => {
  const currentLanguage = store.getState().language.selectedLanguage;
  if (i18n.language !== currentLanguage) {
    i18n.changeLanguage(currentLanguage);
  }
});

export default i18n;
