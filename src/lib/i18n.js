import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ar from '@/locales/translations.json'

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    // English keys ARE the English text — no separate en resource needed.
    // i18next returns the key as-is when no translation is found (which is
    // correct for English).
    resources: {
      ar: { translation: ar },
    },
    keySeparator: false,   // keys like "About Us" must not be split on dots
    nsSeparator: false,    // keys with colons must not be split
    interpolation: {
      escapeValue: false,  // React already escapes output
    },
  })

export default i18n
