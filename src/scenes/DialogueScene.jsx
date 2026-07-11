import { useState } from "react";
import bgImage from "../assets/desert-night-stars_up.webp";
import blurppzDefault from "../assets/Blurppz.webp";
import blurppzThink from "../assets/BlurppzThink.webp";
import { DIALOGUE_LINES } from "../data/content";
import "./DialogueScene.css";

const PORTRAITS = {
  default: blurppzDefault,
  think: blurppzThink,
};

export default function DialogueScene({ onDone }) {
  const [idx, setIdx] = useState(0);
  const line = DIALOGUE_LINES[idx];

  const next = () => {
    if (idx < DIALOGUE_LINES.length - 1) {
      setIdx((i) => i + 1);
    } else {
      onDone?.();
    }
  };

  return (
    <div className="dialogue-scene" onClick={next}>
      <img src={bgImage} alt="" className="dialogue-bg" draggable={false} />
      <div className="dialogue-bg-fade" />

      {line.speaker && (
        <img
          key={line.portrait}
          src={PORTRAITS[line.portrait]}
          alt="₿lurppz"
          className="dialogue-portrait"
          draggable={false}
        />
      )}

      <div className="dialogue-box">
        {line.speaker && <div className="dialogue-speaker">{line.speaker}</div>}
        <p key={idx} className="dialogue-text">
          {line.text}
        </p>
        <div className="dialogue-tap-hint">tap to communicate telepathically</div>
      </div>
    </div>
  );
}
