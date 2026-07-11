import { BOT_LINK } from "../data/content";
import coinImg from "../assets/BetlienGCoin.webp";
import "./TopBar.css";

export default function TopBar({ onSkip, showSkip }) {
  return (
    <div className="topbar">
      <div className="topbar-brand">
        <img src={coinImg} alt="" className="topbar-coin" />
        <span>BETLIEN</span>
      </div>
      <div className="topbar-actions">
        {showSkip && (
          <button className="topbar-skip" onClick={onSkip} type="button">
            Skip →
          </button>
        )}
        <a className="topbar-bot" href={BOT_LINK} target="_blank" rel="noreferrer">
          Open Bot
        </a>
      </div>
    </div>
  );
}
