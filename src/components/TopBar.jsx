import { BOT_LINK } from "../data/constants";
import { useContent } from "../i18n/LanguageContext";
import coinImg from "../assets/BetlienGCoin.webp";
import LanguageSwitcher from "./LanguageSwitcher";
import TelegramIcon from "./TelegramIcon";
import "./TopBar.css";

export default function TopBar({ onSkip, onHome, showSkip }) {
  const { TOPBAR } = useContent();
  return (
    <div className="topbar">
      <button className="topbar-brand" onClick={onHome} type="button" aria-label={TOPBAR.brandAria}>
        <img src={coinImg} alt="" className="topbar-coin" />
        <span>{TOPBAR.brand}</span>
      </button>
      <div className="topbar-actions">
        <LanguageSwitcher />
        {showSkip && (
          <button className="topbar-skip" onClick={onSkip} type="button">
            {TOPBAR.skip}
          </button>
        )}
        <a className="topbar-bot" href={BOT_LINK} target="_blank" rel="noreferrer">
          <TelegramIcon size={22} />
          <span>{TOPBAR.openBot}</span>
        </a>
      </div>
    </div>
  );
}
