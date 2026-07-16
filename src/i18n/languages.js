// Add a new locale by: creating src/i18n/locales/<code>.js (copy en.js as the
// template), registering it in LanguageContext.jsx's LOCALES map, and adding
// its code + label here.
export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

export const LANGUAGE_CODES = SUPPORTED_LANGUAGES.map((l) => l.code);

export const DEFAULT_LANGUAGE = "en";
