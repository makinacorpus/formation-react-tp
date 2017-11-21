import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

const lngDetector = new LanguageDetector(null, {
  order: ['querystring', 'cookie', 'navigator', 'htmlTag'],
  lookupQuerystring: 'lang',
  lookupCookie: 'lang',
  caches: ['cookie']
});

i18n
  .use(lngDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          "home": "Home",
          "search address": "Search an address"
        }
      },
      fr: {
        translation: {
          "home": "Accueil",
          "search address": "Rechercher une adresse"
        }
      }
    }
  });


export default i18n;
