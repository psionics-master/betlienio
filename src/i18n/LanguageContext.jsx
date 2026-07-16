import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LANGUAGE, LANGUAGE_CODES, SUPPORTED_LANGUAGES } from "./languages";
import { detectLanguage } from "./detectLanguage";
import * as en from "./locales/en";
import * as ru from "./locales/ru";
import * as es from "./locales/es";
import * as fr from "./locales/fr";
import * as ja from "./locales/ja";

const LOCALES = { en, ru, es, fr, ja };
const STORAGE_KEY = "betlien_lang";

const LanguageContext = createContext(null);

function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored && LANGUAGE_CODES.includes(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => readStoredLanguage() || detectLanguage());

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // localStorage unavailable (private mode, etc.) — language just won't persist
    }
  }, [language]);

  const setLanguage = (code) => {
    if (LANGUAGE_CODES.includes(code)) setLanguageState(code);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      languages: SUPPORTED_LANGUAGES,
      content: LOCALES[language] || LOCALES[DEFAULT_LANGUAGE],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

// Convenience hook for components that only need the current locale's copy.
export function useContent() {
  return useLanguage().content;
}
