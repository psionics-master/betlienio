import { useEffect, useState } from "react";
import bgImage from "../assets/desert-night-stars.webp";
import SceneLogo from "../components/SceneLogo";
import { useContent } from "../i18n/LanguageContext";
import { playSfx, stopSfx } from "../utils/sfx";
import "./TicTacScene.css";

// Timings echo the source game's intro sequence (tictacAppear 800ms,
// tictacFlight 12000ms, tictacCrash 1400ms, tictacPause 900ms). The UFO
// itself and the fog it kicks up are rendered by a persistent layer mounted
// at the App level (PersistentUfo/PersistentFog) so they survive the
// transition into DialogueScene instead of unmounting with this component —
// this scene just owns the background, timing, and one-off impact FX.
export default function TicTacScene({ onDone, onPhaseChange }) {
  const { TICTAC } = useContent();
  const [phase, setPhase] = useState("appear"); // appear -> flight -> crash -> pause

  useEffect(() => {
    onPhaseChange?.("appear");

    const t0 = setTimeout(() => {
      setPhase("flight");
      onPhaseChange?.("flight");
      playSfx("ufoHum", { volume: 0.4 });
    }, 800);

    const t1 = setTimeout(() => {
      stopSfx("ufoHum");
      setPhase("crash");
      onPhaseChange?.("crash");
      playSfx("ufoCrash", { volume: 0.7 });
    }, 800 + 12000);

    const t2 = setTimeout(() => {
      setPhase("pause");
      onPhaseChange?.("pause");
      playSfx("smokeHiss", { volume: 0.3 });
    }, 800 + 12000 + 1400);

    const t3 = setTimeout(() => onDone?.(), 800 + 12000 + 1400 + 900);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      stopSfx("ufoHum");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skip = () => {
    stopSfx("ufoHum");
    onDone?.();
  };

  return (
    <div className={`tictac-scene tictac-scene--${phase}`} onClick={skip}>
      <img src={bgImage} alt="" className="tictac-bg" draggable={false} />
      <SceneLogo />

      {phase === "crash" && (
        <>
          <div className="tictac-flash" />
          <div className="tictac-boom" />
          <div className="tictac-dust" />
        </>
      )}

      <div className="tictac-skip-hint">{TICTAC.tapToSkip}</div>
    </div>
  );
}
