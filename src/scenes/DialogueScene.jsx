import { useEffect, useRef, useState } from "react";
import bgImage from "../assets/desert-night-stars_up.webp";
import blurppzDefault from "../assets/Blurppz.webp";
import blurppzThink from "../assets/BlurppzThink.webp";
import blurppzCoin from "../assets/BlurppzCoin.webp";
import { DIALOGUE_SCENES, TAP_TO_CONTINUE_LABEL } from "../data/content";
import { playSfx, stopSfx } from "../utils/sfx";
import "./DialogueScene.css";

const PORTRAITS = {
  default: blurppzDefault,
  think: blurppzThink,
  coin: blurppzCoin,
};

const TYPE_MS = 18;

export default function DialogueScene({ onDone, onSceneIdxChange }) {
  const [sceneIdx, setSceneIdx] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [alienVisible, setAlienVisible] = useState(false);
  const typeTimer = useRef(null);

  const scene = DIALOGUE_SCENES[sceneIdx];
  const fullLine = scene.text[lineIdx];
  const isTyping = typed.length < fullLine.length;
  const isLastLine = lineIdx >= scene.text.length - 1;

  // Report the current scene index up to App so the persistent UFO/fog
  // layers (mounted outside this component) can stage themselves correctly.
  useEffect(() => {
    onSceneIdxChange?.(sceneIdx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sceneIdx]);

  // Blurppz descends the first time he's needed (meetAlien -> alienFirstSpeech).
  // He then stays mounted for every later scene — only the portrait `src`
  // swaps, so the one-shot descend animation never replays.
  useEffect(() => {
    if (scene.portrait && !alienVisible) {
      playSfx("teleport", { volume: 0.4 });
      setAlienVisible(true);
    }
  }, [scene.portrait, alienVisible]);

  useEffect(() => {
    if (scene.type === "hybridScan") playSfx("teleport", { volume: 0.35 });
    if (scene.type === "mapReveal") playSfx("ticTak", { volume: 0.4 });
  }, [scene.type]);

  // Typewriter reveal + alien "talking" ambient loop
  useEffect(() => {
    setTyped("");
    clearTimeout(typeTimer.current);
    let i = 0;
    if (scene.portrait) playSfx("etTalk", { volume: 0.18 });
    const tick = () => {
      i++;
      setTyped(fullLine.slice(0, i));
      if (i < fullLine.length) {
        typeTimer.current = setTimeout(tick, TYPE_MS);
      } else {
        stopSfx("etTalk");
      }
    };
    typeTimer.current = setTimeout(tick, TYPE_MS);
    return () => {
      clearTimeout(typeTimer.current);
      stopSfx("etTalk");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sceneIdx, lineIdx]);

  const advanceScene = () => {
    if (sceneIdx < DIALOGUE_SCENES.length - 1) {
      setSceneIdx((i) => i + 1);
      setLineIdx(0);
    } else {
      onDone?.();
    }
  };

  const handleTap = () => {
    if (isTyping) {
      // tap to skip the typewriter and reveal the full line
      clearTimeout(typeTimer.current);
      setTyped(fullLine);
      stopSfx("etTalk");
      return;
    }
    if (!isLastLine) {
      setLineIdx((i) => i + 1);
    } else {
      advanceScene();
    }
  };

  const handleChoice = () => {
    if (isTyping) return;
    advanceScene();
  };

  return (
    <div className="dialogue-scene">
      <img src={bgImage} alt="" className="dialogue-bg" draggable={false} />
      <div className="dialogue-bg-fade" />

      {scene.portrait && (
        <img
          src={PORTRAITS[scene.portrait]}
          alt="₿lurppz"
          className={`dialogue-portrait${alienVisible ? " dialogue-portrait--visible" : ""}`}
          draggable={false}
        />
      )}

      <div className="dialogue-box">
        <div className="dialogue-speaker">₿LURPPZ</div>
        <p className="dialogue-text">{typed}</p>
      </div>

      <div className="dialogue-footer">
        {!isTyping && isLastLine && scene.choices.length > 0 ? (
          <div className="dialogue-choices">
            {scene.choices.map((choice) => (
              <button key={choice} className="dialogue-choice-btn" onClick={handleChoice} type="button">
                {choice}
              </button>
            ))}
          </div>
        ) : (
          <button className="dialogue-tap-hint" onClick={handleTap} type="button">
            {TAP_TO_CONTINUE_LABEL}
          </button>
        )}
      </div>
    </div>
  );
}
