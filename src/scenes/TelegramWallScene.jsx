import { useEffect, useState } from "react";
import miningBgImg from "../assets/mining_bg.webp";
import miningRigImg from "../assets/MiningRig.webp";
import startMineImg from "../assets/StartMine.webp";
import coinImg from "../assets/BetlienGCoin.webp";
import moonImg from "../assets/Moon.png";
import earthImg from "../assets/Earth.webp";
import asteroid1 from "../assets/asteroid1.png";
import asteroid2 from "../assets/asteroid2.png";
import FloatField from "../components/FloatField";
import BetUfoFlight from "../components/BetUfoFlight";
import SpinningCoin from "../components/SpinningCoin";
import SceneLogo from "../components/SceneLogo";
import TelegramIcon from "../components/TelegramIcon";
import { BOT_LINK, WALL_COPY } from "../data/content";
import { trackEvent } from "../utils/analytics";
import { playSfx } from "../utils/sfx";
import "./TelegramWallScene.css";

const ASTEROID_FIELD = [
  { src: asteroid1, size: "50px", top: "10%", left: "10%", duration: 20, delay: 0, opacity: 0.55, driftX: -10, driftY: 14 },
  { src: asteroid2, size: "36px", top: "70%", left: "88%", duration: 17, delay: 3, opacity: 0.5, driftX: 10, driftY: -10 },
];

export default function TelegramWallScene() {
  const [minePressed, setMinePressed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      playSfx("coinPop", { volume: 0.22 });
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const pressDecorativeMine = () => {
    setMinePressed(true);
    playSfx("miningStart", { volume: 0.5 });
    setTimeout(() => setMinePressed(false), 160);
  };

  return (
    <div className="wall-scene">
      <img src={miningBgImg} alt="" className="wall-bg" draggable={false} />
      <div className="wall-bg-scrim" />

      <FloatField items={ASTEROID_FIELD} />

      <img src={earthImg} alt="" className="wall-earth" draggable={false} />
      <img src={moonImg} alt="" className="wall-moon" draggable={false} />

      <div className="wall-ufo-layer">
        <BetUfoFlight />
      </div>

      <SceneLogo />

      <div className="wall-rig-wrap">
        <div className="wall-side-coin">
          <img src={coinImg} alt="" className="wall-side-coin-img" draggable={false} />
        </div>

        <div className="wall-rig-frame">
          <img src={miningRigImg} alt="" className="wall-rig" draggable={false} />

          <div className="wall-rig-coin-slot">
            <SpinningCoin fast />
          </div>

          <button
            className={`wall-mine-btn${minePressed ? " wall-mine-btn--pressed" : ""}`}
            onClick={pressDecorativeMine}
            type="button"
            aria-label="Start Mining preview"
          >
            <img src={startMineImg} alt="Start Mining" className="wall-mine-btn__img" draggable={false} />
            <span className="wall-mine-btn__shimmer" />
          </button>
        </div>
      </div>

      <div className="wall-content">
        <div className="wall-eyebrow">{WALL_COPY.eyebrow}</div>
        <h1 className="wall-heading">
          {WALL_COPY.heading.split("\n").map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="wall-body">{WALL_COPY.body}</p>

        <a
          className="wall-cta"
          href={BOT_LINK}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent("telegram_cta_clicked")}
        >
          <TelegramIcon size={22} />
          <span>{WALL_COPY.cta}</span>
        </a>

        <p className="wall-legal">{WALL_COPY.legal}</p>
      </div>
    </div>
  );
}
