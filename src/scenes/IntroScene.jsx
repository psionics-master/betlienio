import { useEffect, useState } from "react";
import bgImage from "../assets/desert-night-stars.webp";
import SceneLogo from "../components/SceneLogo";
import { INTRO_BEATS } from "../data/content";
import { playSfx, stopSfx } from "../utils/sfx";
import "./IntroScene.css";

export default function IntroScene({ onDone }) {
  const [beatIdx, setBeatIdx] = useState(0);
  const beat = INTRO_BEATS[beatIdx];

  useEffect(() => {
    playSfx("desertNight", { volume: 0.35 });
    return () => {
      stopSfx("desertNight");
      stopSfx("campfireHum");
    };
  }, []);

  const next = () => {
    if (beatIdx === 0) {
      // "Chillin' like a villain" — campfire hum kicks in
      playSfx("campfireHum", { volume: 0.3 });
    } else {
      // "Look up in the sky" — hum cuts out, thunder crashes
      stopSfx("campfireHum");
      playSfx("thunder", { volume: 0.5 });
    }
    if (beatIdx < INTRO_BEATS.length - 1) {
      setBeatIdx((i) => i + 1);
    } else {
      onDone?.();
    }
  };

  return (
    <div className="intro-scene">
      <img src={bgImage} alt="" className="intro-bg" draggable={false} />
      <div className="intro-bg-fade" />
      <SceneLogo />
      <div className="intro-text-box">
        <p key={beatIdx} className="intro-text">
          {beat.text}
        </p>
        <button className="intro-continue-btn" onClick={next} type="button">
          {beat.button}
        </button>
      </div>
    </div>
  );
}
