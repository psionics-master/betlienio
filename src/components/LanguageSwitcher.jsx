import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { language, setLanguage, languages } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const current = languages.find((lang) => lang.code === language) ?? languages[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div className="lang-switcher" ref={rootRef}>
      <button
        className="lang-switcher-btn"
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        <span aria-hidden="true">{current.flag}</span>
        <span>{current.code.toUpperCase()}</span>
      </button>

      {open && (
        <ul className="lang-switcher-menu" role="listbox">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className={`lang-switcher-option${lang.code === language ? " lang-switcher-option--active" : ""}`}
                type="button"
                role="option"
                aria-selected={lang.code === language}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
              >
                <span aria-hidden="true">{lang.flag}</span>
                <span>{lang.code.toUpperCase()}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
