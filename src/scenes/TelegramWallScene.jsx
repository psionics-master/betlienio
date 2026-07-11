import miningBgImg from "../assets/mining_bg.webp";
import miningRigImg from "../assets/MiningRig.webp";
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
import MoonEye from "../components/MoonEye";
import FloatField from "../components/FloatField";
import SpinningCoin from "../components/SpinningCoin";
import TelegramIcon from "../components/TelegramIcon";
import { BOT_LINK, WALL_COPY } from "../data/content";
import { trackEvent } from "../utils/analytics";
import "./TelegramWallScene.css";

const NHI_FIELD = [
  { src: nhiZoryn, size: "42px", top: "16%", left: "10%", duration: 12, delay: 0, round: true, driftX: 14, driftY: 10 },
  { src: nhiAltrus, size: "38px", top: "30%", left: "78%", duration: 15, delay: 1.2, round: true, driftX: -16, driftY: 12 },
  { src: nhiAurell, size: "40px", top: "52%", left: "6%", duration: 13, delay: 2, round: true, driftX: 12, driftY: -14 },
  { src: nhiKrynt, size: "36px", top: "62%", left: "84%", duration: 16, delay: 0.6, round: true, driftX: -14, driftY: 10 },
  { src: nhiLunari, size: "40px", top: "40%", left: "88%", duration: 14, delay: 2.4, round: true, driftX: -10, driftY: -12 },
];

const UFO_FIELD = [
  { src: ufo1, size: "56px", top: "10%", left: "72%", duration: 18, delay: 0, opacity: 0.9, driftX: -22, driftY: 16 },
  { src: ufo2, size: "44px", top: "46%", left: "16%", duration: 21, delay: 3, opacity: 0.85, driftX: 20, driftY: -12 },
  { src: ufo3, size: "50px", top: "70%", left: "70%", duration: 19, delay: 1.5, opacity: 0.8, driftX: -18, driftY: -16 },
];

const ASTEROID_FIELD = [
  { src: asteroid1, size: "60px", top: "22%", left: "82%", duration: 24, delay: 0, opacity: 0.7, driftX: -12, driftY: 18 },
  { src: asteroid2, size: "44px", top: "58%", left: "8%", duration: 20, delay: 4, opacity: 0.65, driftX: 14, driftY: -10 },
];

export default function TelegramWallScene() {
  return (
    <div className="wall-scene">
      <img src={miningBgImg} alt="" className="wall-bg" draggable={false} />
      <div className="wall-bg-scrim" />

      <FloatField items={ASTEROID_FIELD} />
      <FloatField items={UFO_FIELD} />
      <FloatField items={NHI_FIELD} />

      <div className="wall-moon-slot">
        <MoonEye />
      </div>

      <img src={miningRigImg} alt="" className="wall-rig" draggable={false} />

      <div className="wall-content">
        <SpinningCoin />

        <div className="wall-spheres">
          <span className="wall-sphere wall-sphere--1" />
          <span className="wall-sphere wall-sphere--2" />
          <span className="wall-sphere wall-sphere--3" />
        </div>

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
