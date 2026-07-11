// Ported from firstContact.jsx's getTicTacPoint(): a hand-authored waypoint
// path blended with smoothstep easing between adjacent keys, driven by a
// single eased progress value across the whole flight duration.
export const TIC_TAC_DURATION = 12000;

export function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function smoothstep(k) {
  return k * k * (3 - 2 * k);
}

// x/y as fraction of stage (0-1), s = scale, r = rotation deg.
// distant dot -> glitchy darts -> big overhead flyover -> erratic wobble -> descent
const KEYFRAMES = [
  { x: 0.85, y: 0.05, s: 0.1, r: 0 },
  { x: 0.75, y: 0.07, s: 0.12, r: 2 },
  { x: 0.79, y: 0.05, s: 0.16, r: -7 },
  { x: 0.6, y: 0.09, s: 0.18, r: 8 },
  { x: 0.9, y: 0.11, s: 0.24, r: 18 },
  { x: 0.12, y: 0.07, s: 0.26, r: -20 },
  { x: 0.2, y: 0.35, s: 1.05, r: -5 },
  { x: 0.5, y: 0.33, s: 1.25, r: 0 },
  { x: 0.82, y: 0.35, s: 1.05, r: 4 },
  { x: 0.55, y: 0.22, s: 0.48, r: -26 },
  { x: 0.43, y: 0.3, s: 0.5, r: 22 },
  { x: 0.5, y: 0.34, s: 0.52, r: 9 },
  { x: 0.5, y: 0.4, s: 0.55, r: 3 },
  { x: 0.5, y: 0.44, s: 0.58, r: 2 },
];

export function getTicTacPoint(t) {
  const n = KEYFRAMES.length - 1;
  const raw = Math.min(Math.max(t, 0), 1) * n;
  const i = Math.min(Math.floor(raw), n - 1);
  const frac = smoothstep(raw - i);
  const a = KEYFRAMES[i];
  const b = KEYFRAMES[i + 1];
  return {
    x: a.x + (b.x - a.x) * frac,
    y: a.y + (b.y - a.y) * frac,
    s: a.s + (b.s - a.s) * frac,
    r: a.r + (b.r - a.r) * frac,
  };
}
