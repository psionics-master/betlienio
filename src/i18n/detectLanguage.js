import { DEFAULT_LANGUAGE, LANGUAGE_CODES } from "./languages";

// Browsers report the OS/user-preferred language via navigator.language(s) —
// on Windows and macOS this already tracks the system language setting, so
// there's no need to sniff the UA string separately.
export function detectLanguage() {
  if (typeof navigator === "undefined") return DEFAULT_LANGUAGE;

  const candidates =
    navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language].filter(Boolean);

  for (const tag of candidates) {
    const base = tag.split("-")[0].toLowerCase();
    if (LANGUAGE_CODES.includes(base)) return base;
  }

  return DEFAULT_LANGUAGE;
}
