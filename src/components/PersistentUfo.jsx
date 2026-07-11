import { useEffect, useRef } from "react";
import ufoImg from "../assets/tictac-ufo.png";
import { TIC_TAC_DURATION, easeInOut, getTicTacPoint } from "../utils/ticTacFlight";
import "./PersistentUfo.css";

// Mounted once at the App level (outside the per-scene crossfade) so the
// crashed TicTac never unmounts/remounts between TicTacScene and
// DialogueScene — it's one continuous DOM element for the whole sequence.
export default function PersistentUfo({ stage }) {
  const elRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    if (stage !== "flight") {
      // Hand back control to the CSS classes for every other stage.
      if (elRef.current) {
        elRef.current.style.left = "";
        elRef.current.style.top = "";
        elRef.current.style.transform = "";
      }
      return;
    }

    const start = performance.now();
    const tick = (now) => {
      const raw = Math.min((now - start) / TIC_TAC_DURATION, 1);
      const t = easeInOut(raw);
      const pt = getTicTacPoint(t);
      if (elRef.current) {
        elRef.current.style.left = `${pt.x * 100}%`;
        elRef.current.style.top = `${pt.y * 100}%`;
        elRef.current.style.transform = `translate(-50%, -50%) scale(${pt.s}) rotate(${pt.r}deg)`;
      }
      if (raw < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [stage]);

  if (stage === "hidden") return null;

  return <img ref={elRef} src={ufoImg} alt="" className={`pu-ufo pu-ufo--${stage}`} draggable={false} />;
}
