import { useEffect, useState } from "react";
import miningBgImg from "../assets/mining_bg.webp";
import miningRigImg from "../assets/MiningRig.webp";
import startMineImg from "../assets/StartMine.webp";
import coinImg from "../assets/BetlienGCoin.webp";
import ufo1 from "../assets/ufo1.webp";
import ufo2 from "../assets/ufo2.webp";
import ufo3 from "../assets/ufo3.webp";
import asteroid1 from "../assets/asteroid1.png";
import asteroid2 from "../assets/asteroid2.png";
import nhiZoryn from "../assets/nhi/zoryn.webp";
import nhiAltrus from "../assets/nhi/altrus.webp";
import nhiAurell from "../assets/nhi/aurell.webp";
import nhiKrynt from "../assets/nhi/krynt.webp";
import nhiLunari from "../assets/nhi/lunari.webp";
import FloatField from "../components/FloatField";
import SpinningCoin from "../components/SpinningCoin";
import TelegramIcon from "../components/TelegramIcon";
import { BOT_LINK, WALL_COPY } from "../data/content";
import { trackEvent } from "../utils/analytics";
import { playSfx } from "../utils/sfx";
import "./TelegramWallScene.css";

// "Highest activity" pass — more UFOs, more asteroids, busier than the
// normal in-game mining screen, per the max-mining-speed brief.
const UFO_FIELD = [
  { src: ufo1, size: "48px", top: "8%", left: "70%", duration: 9, delay: 0, opacity: 0.9, driftX: -26, driftY: 14 },
  { src: ufo2, size: "40px", top: "18%", left: "18%", duration: 11, delay: 1.4, opacity: 0.85, driftX: 22, driftY: -10 },
  { src: ufo3, size: "46px", top: "60%", left: "76%", duration: 10, delay: 0.6, opacity: 0.85, driftX: -20, driftY: -16 },
  { src: ufo1, size: "34px", top: "50%", left: "10%", duration: 12, delay: 2.6, opacity: 0.75, driftX: 18, driftY: 12 },
  { src: ufo2, size: "38px", top: "30%", left: "48%", duration: 9.5, delay: 1.9, opacity: 0.8, driftX: -16, driftY: 18 },
  { src: ufo3, size: "30px", top: "72%", left: "26%", duration: 13, delay: 0.3, opacity: 0.7, driftX: 14, driftY: -14 },
];

const ASTEROID_FIELD = [
  { src: asteroid1, size: "56px", top: "14%", left: "88%", duration: 20, delay: 0, opacity: 0.65, driftX: -12, driftY: 16 },
  { src: asteroid2, size: "40px", top: "64%", left: "4%", duration: 17, delay: 3, opacity: 0.6, driftX: 12, driftY: -10 },
];

const NHI_FIELD = [
  { src: nhiZoryn, size: "38px", top: "10%", left: "8%", duration: 12, delay: 0, round: true, driftX: 12, driftY: 10 },
  { src: nhiAltrus, size: "34px", top: "22%", left: "84%", duration: 14, delay: 1.2, round: true, driftX: -14, driftY: 10 },
  { src: nhiAurell, size: "36px", top: "62%", left: "88%", duration: 13, delay: 2, round: true, driftX: -10, driftY: -12 },
  { src: nhiKrynt, size: "32px", top: "70%", left: "6%", duration: 15, delay: 0.6, round: true, driftX: 12, driftY: -10 },
  { src: nhiLunari, size: "34px", top: "40%", left: "92%", duration: 13.5, delay: 2.4, round: true, driftX: -10, driftY: -10 },
];

const COIN_BURST = [
  { left: "30%", delay: 0 },
  { left: "45%", delay: 0.4 },
  { left: "58%", delay: 0.8 },
  { left: "38%", delay: 1.3 },
  { left: "66%", delay: 0.2 },
  { left: "50%", delay: 1.7 },
];

export default function TelegramWallScene() {
  const [minePressed, setMinePressed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      playSfx("coinPop", { volume: 0.22 });
    }, 1500);
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
      <FloatField items={NHI_FIELD} />
      <FloatField items={UFO_FIELD} />

      <div className="wall-coin-burst" aria-hidden="true">
        {COIN_BURST.map((c, i) => (
          <img
            key={i}
            src={coinImg}
            alt=""
            className="wall-coin-particle"
            style={{ left: c.left, animationDelay: `${c.delay}s` }}
            draggable={false}
          />
        ))}
      </div>

      <div className="wall-rig-wrap">
        <SpinningCoin fast />
        <img src={miningRigImg} alt="" className="wall-rig" draggable={false} />
      </div>

      <div className="wall-content">
        <div className="wall-eyebrow">{WALL_COPY.eyebrow}</div>
        <h1 className="wall-heading">
          {WALL_COPY.heading.split("\n").map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="wall-body">{WALL_COPY.body}</p>

        <button
          className={`wall-mine-btn${minePressed ? " wall-mine-btn--pressed" : ""}`}
          onClick={pressDecorativeMine}
          type="button"
          aria-label="Start Mining preview"
        >
          <img src={startMineImg} alt="Start Mining" className="wall-mine-btn__img" draggable={false} />
          <span className="wall-mine-btn__shimmer" />
        </button>

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
