import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import transEn from './locales/en/translation.json';
import transBg from './locales/bg/translation.json';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: "bg",
    resources: {
      en: {
        translations: transEn
      },
      bg: {
        translations: transBg
      }
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations"
  });


export default i18n;