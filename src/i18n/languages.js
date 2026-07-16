// Add a new locale by: creating src/i18n/locales/<code>.js (copy en.js as the
// template), registering it in LanguageContext.jsx's LOCALES map, and adding
// its code + label here.
export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "ja", label: "日本語" },
  { code: "uk", label: "Українська" },
];

export const LANGUAGE_CODES = SUPPORTED_LANGUAGES.map((l) => l.code);

export const DEFAULT_LANGUAGE = "en";
