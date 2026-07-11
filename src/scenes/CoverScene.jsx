import { useCallback, useEffect, useRef, useState } from "react";
import bgImage from "../assets/Cover.webp";
import titleImg from "../assets/Betlient.webp";
import btnImg from "../assets/StartMine.webp";
import { trackEvent } from "../utils/analytics";
import { playSfx } from "../utils/sfx";
import "./CoverScene.css";

const AUTO_ENTER_DELAY = 4000;
const HOLO_BARS = 10;

export default function CoverScene({ onDone }) {
  const [btnPress, setBtnPress] = useState(false);
  const [holoActive, setHoloActive] = useState(false);
  const [advancing, setAdvancing] = useState(false);
  const autoTimerRef = useRef(null);

  const advance = useCallback((source) => {
    if (advancing) return;
    setAdvancing(true);
    trackEvent("start_mining", { source });
    setBtnPress(true);
    playSfx("teleport", { volume: 0.5 });
    clearTimeout(autoTimerRef.current);

    setTimeout(() => {
      setBtnPress(false);
      setHoloActive(true);
      playSfx("ticTak", { volume: 0.45 });
    }, 140);

    setTimeout(() => {
      onDone?.();
    }, 620);
  }, [advancing, onDone]);

  useEffect(() => {
    autoTimerRef.current = setTimeout(() => advance("auto"), AUTO_ENTER_DELAY);
    return () => clearTimeout(autoTimerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cover-scene">
      <img src={bgImage} alt="" className="cover-bg" draggable={false} />

      <div className="cover-title-wrap">
        <img src={titleImg} alt="Betlien — Mine the Galaxy" className="cover-title-img" draggable={false} />
      </div>

      <button
        className={`cover-mine-btn${btnPress ? " cover-mine-btn--pressed" : ""}`}
        onClick={() => advance("tap")}
        type="button"
        aria-label="Start Mining"
      >
        <img src={btnImg} alt="Start Mining" className="cover-mine-btn__img" draggable={false} />
      </button>

      {holoActive && (
        <div className="cover-holo-overlay" aria-hidden="true">
          {Array.from({ length: HOLO_BARS }).map((_, i) => (
            <div key={i} className="cover-holo-bar" style={{ animationDelay: `${i * 28}ms` }} />
          ))}
        </div>
      )}

      <div className="cover-footer">
        <p className="cover-footer__tc">18+ only. Free-to-play. No purchase required. T&amp;C apply.</p>
      </div>
    </div>
  );
}
