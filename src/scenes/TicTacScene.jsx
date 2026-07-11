import { useEffect, useState } from "react";
import bgImage from "../assets/desert-night-stars.webp";
import ufoImg from "../assets/tictac-ufo.webp";
import fogImg from "../assets/fog.webp";
import { playSfx, stopSfx } from "../utils/sfx";
import "./TicTacScene.css";

// Timings echo the source game's intro sequence (tictacAppear 800ms,
// tictacFlight 12000ms, tictacCrash 1400ms, tictacPause 900ms) — the source
// drives the flight with per-frame JS physics across 13 hand-authored
// waypoints; here that's approximated with a single authored CSS path
// hitting the same story beats (distant dot -> glitchy darts -> big flyover
// -> erratic wobble -> crash dive) rather than porting the full RAF engine.
export default function TicTacScene({ onDone }) {
  const [phase, setPhase] = useState("appear"); // appear -> flight -> crash -> pause

  useEffect(() => {
    const t0 = setTimeout(() => {
      setPhase("flight");
      playSfx("ufoHum", { volume: 0.4 });
    }, 800);

    const t1 = setTimeout(() => {
      stopSfx("ufoHum");
      setPhase("crash");
      playSfx("ufoCrash", { volume: 0.7 });
    }, 800 + 12000);

    const t2 = setTimeout(() => {
      setPhase("pause");
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

      <img src={ufoImg} alt="" className={`tictac-ufo tictac-ufo--${phase}`} draggable={false} />

      {phase === "crash" && (
        <>
          <div className="tictac-flash" />
          <div className="tictac-boom" />
          <div className="tictac-dust" />
        </>
      )}

      {(phase === "crash" || phase === "pause") && (
        <div className="tictac-fog-container">
          <img src={fogImg} alt="" className="tictac-fog tictac-fog--1" draggable={false} />
          <img src={fogImg} alt="" className="tictac-fog tictac-fog--2" draggable={false} />
        </div>
      )}

      <div className="tictac-skip-hint">tap to skip</div>
    </div>
  );
}
