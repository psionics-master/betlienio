import { useEffect, useRef, useState } from "react";
import moonImg from "../assets/Level1Moon.webp";
import eyeSprite from "../assets/eye_move - Copy2.png";
import "./MoonEye.css";

// Ported from BetlienFront's Bet.jsx pyramid-eye animation — an 8x4 sprite
// sheet stepped via background-position, alternating look-left/look-right
// blink sequences on a randomized schedule.
const EYE_COLS = 8;
const EYE_ROWS = 4;

const EYE_SEQ_L = [
  [0, 1100],
  [1, 180], [2, 180], [3, 180],
  [4, 140], [5, 140], [6, 140], [7, 140],
  [8, 120], [9, 120], [10, 120], [11, 120],
  [12, 140], [13, 140], [14, 140], [15, 180],
  [16, 1100],
  [17, 180], [18, 180], [19, 180],
  [20, 140], [21, 140], [22, 140], [23, 140],
  [24, 120], [25, 120], [26, 120], [27, 120],
  [28, 140], [29, 140], [30, 140], [31, 180],
];

const EYE_SEQ_R = [
  [16, 1100],
  [17, 180], [18, 180], [19, 180],
  [20, 140], [21, 140], [22, 140], [23, 140],
  [24, 120], [25, 120], [26, 120], [27, 120],
  [28, 140], [29, 140], [30, 140], [31, 180],
  [0, 1100],
  [1, 180], [2, 180], [3, 180],
  [4, 140], [5, 140], [6, 140], [7, 140],
  [8, 120], [9, 120], [10, 120], [11, 120],
  [12, 140], [13, 140], [14, 140], [15, 180],
];

export default function MoonEye() {
  const [eyeFrame, setEyeFrame] = useState(0);
  const scheduleTimer = useRef(null);
  const frameTimer = useRef(null);

  useEffect(() => {
    let first = true;
    const schedule = () => {
      const delay = first ? Math.random() * 1000 + 800 : Math.random() * 4000 + 2000;
      first = false;
      scheduleTimer.current = setTimeout(() => {
        const seq = Math.random() < 0.5 ? EYE_SEQ_L : EYE_SEQ_R;
        let s = 0;
        const advance = () => {
          s++;
          if (s < seq.length) {
            setEyeFrame(seq[s][0]);
            frameTimer.current = setTimeout(advance, seq[s][1]);
          } else {
            setEyeFrame(seq[0][0]);
            schedule();
          }
        };
        setEyeFrame(seq[0][0]);
        frameTimer.current = setTimeout(advance, seq[0][1]);
      }, delay);
    };
    schedule();
    return () => {
      clearTimeout(scheduleTimer.current);
      clearTimeout(frameTimer.current);
    };
  }, []);

  const eyeCol = eyeFrame % EYE_COLS;
  const eyeRow = Math.floor(eyeFrame / EYE_COLS);
  const eyeBgPos = `${((eyeCol / (EYE_COLS - 1)) * 100).toFixed(2)}% ${((eyeRow / (EYE_ROWS - 1)) * 100).toFixed(2)}%`;

  return (
    <div className="moon-eye-wrap" aria-hidden="true">
      <div className={`moon-eye-glow${eyeFrame > 0 ? " moon-eye-glow--active" : ""}`} />
      <div className="moon-eye-blink" style={{ backgroundImage: `url(${eyeSprite})`, backgroundPosition: eyeBgPos }} />
      <img src={moonImg} alt="" className="moon-eye-moon" draggable={false} />
    </div>
  );
}
