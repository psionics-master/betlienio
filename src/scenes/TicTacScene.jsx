import { useEffect, useState } from "react";
import bgImage from "../assets/desert-night-stars_up.webp";
import ufoImg from "../assets/tictac-ufo.webp";
import fogImg from "../assets/fog.webp";
import "./TicTacScene.css";

export default function TicTacScene({ onDone }) {
  const [phase, setPhase] = useState("flight"); // flight -> crash -> settle

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("crash"), 1500);
    const t2 = setTimeout(() => setPhase("settle"), 2300);
    const t3 = setTimeout(() => onDone?.(), 3400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`tictac-scene tictac-scene--${phase}`} onClick={onDone}>
      <img src={bgImage} alt="" className="tictac-bg" draggable={false} />

      <img
        src={ufoImg}
        alt=""
        className={`tictac-ufo tictac-ufo--${phase}`}
        draggable={false}
      />

      {(phase === "crash" || phase === "settle") && (
        <>
          <div className="tictac-flash" />
          <img src={fogImg} alt="" className="tictac-fog" draggable={false} />
        </>
      )}

      <div className="tictac-skip-hint">tap to continue</div>
    </div>
  );
}
