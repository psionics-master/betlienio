import { BOT_LINK } from "../data/content";
import coinImg from "../assets/BetlienGCoin.webp";
import TelegramIcon from "./TelegramIcon";
import "./TopBar.css";

export default function TopBar({ onSkip, onHome, showSkip }) {
  return (
    <div className="topbar">
      <button className="topbar-brand" onClick={onHome} type="button" aria-label="Betlien home">
        <img src={coinImg} alt="" className="topbar-coin" />
        <span>BETLIEN</span>
      </button>
      <div className="topbar-actions">
        {showSkip && (
          <button className="topbar-skip" onClick={onSkip} type="button">
            Skip →
          </button>
        )}
        <a className="topbar-bot" href={BOT_LINK} target="_blank" rel="noreferrer">
          <TelegramIcon size={22} />
          <span>Open Bot</span>
        </a>
      </div>
    </div>
  );
}
