import { useEffect, useState } from "react";
import bgImage from "../assets/desert-night-stars.webp";
import { INTRO_BEATS } from "../data/content";
import "./IntroScene.css";

const BEAT_DURATION = 2800;

export default function IntroScene({ onDone }) {
  const [beatIdx, setBeatIdx] = useState(0);

  const next = () => {
    if (beatIdx < INTRO_BEATS.length - 1) {
      setBeatIdx((i) => i + 1);
    } else {
      onDone?.();
    }
  };

  useEffect(() => {
    const t = setTimeout(next, BEAT_DURATION);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beatIdx]);

  return (
    <div className="intro-scene" onClick={next}>
      <img src={bgImage} alt="" className="intro-bg" draggable={false} />
      <div className="intro-bg-fade" />
      <div className="intro-text-box">
        <p key={beatIdx} className="intro-text">
          {INTRO_BEATS[beatIdx]}
        </p>
        <div className="intro-tap-hint">tap to continue</div>
      </div>
    </div>
  );
}
