import StarfieldBackground from "../components/StarfieldBackground";
import { BOT_LINK, WALL_COPY } from "../data/content";
import { trackEvent } from "../utils/analytics";
import "./TelegramWallScene.css";

export default function TelegramWallScene() {
  return (
    <div className="wall-scene">
      <StarfieldBackground />

      <div className="wall-content">
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
          {WALL_COPY.cta}
        </a>

        <p className="wall-legal">{WALL_COPY.legal}</p>
      </div>
    </div>
  );
}
