// Ported from BetlienFront's src/components/UfoFlight.jsx — the Bet-screen
// UFO physics (moon-canvas roaming/erratic/orbiting states + transit
// in/out routes to and from Earth), stripped of its Redux `isMining` gate
// since this is a decorative marketing scene, not the live game.
import { useCallback, useEffect, useRef, useState } from "react";

import UFO1 from "../assets/ufo1.webp";
import UFO2 from "../assets/ufo2.webp";
import UFO3 from "../assets/ufo3.webp";
import UFO4 from "../assets/ufo4.webp";
import UFO5 from "../assets/ufo5.webp";

import trandsTetra from "../assets/trands_tetra.webp";
import "./TransTetra.css";
import "./BetUfoFlight.css";

// Curated to the approved ship designs: metallic saucer, black triangle,
// cigar ship, TicTac capsule, plasma jellyfish.
const IMGS = [UFO1, UFO2, UFO3, UFO4, UFO5];
const PH_IN = 0;
const PH_MOON = 1;
const PH_OUT = 2;

const lerp = (a, b, t) => a + (b - a) * t;

function sampleKfs(kfs, t) {
  if (t <= 0) return { ...kfs[0] };
  if (t >= 1) return { ...kfs[kfs.length - 1] };
  const raw = (kfs.length - 1) * t;
  const i = Math.floor(raw);
  const f = raw - i;
  const a = kfs[i];
  const b = kfs[Math.min(i + 1, kfs.length - 1)];
  return {
    x: lerp(a.x, b.x, f),
    y: lerp(a.y, b.y, f),
    s: lerp(a.s, b.s, f),
    r: lerp(a.r, b.r, f),
    o: lerp(a.o, b.o, f),
    flash: a.flash || 0,
  };
}

function scaleFromY(y) {
  const t = Math.max(0, Math.min(1, (y - 8) / 36));
  return 0.3 + 0.65 * t;
}

const FLASH_IN = [
  { x: 82, y: -12, s: 0.22, r: 2, o: 1.0, flash: 0 },
  { x: 82, y: -16, s: 0.2, r: 2, o: 1.0, flash: 1 },
  { x: 82, y: -20, s: 0.18, r: 2, o: 0.0, flash: 0 },
];
const FLASH_OUT = [
  { x: 82, y: -20, s: 0.18, r: 2, o: 0.0, flash: 0 },
  { x: 82, y: -16, s: 0.2, r: 2, o: 1.0, flash: 1 },
  { x: 82, y: -12, s: 0.22, r: 2, o: 1.0, flash: 0 },
];

const spawnLeft = () => ({ x: 14 + Math.random() * 16, y: 47 + Math.random() * 5 });
const landRight = () => ({ x: 62 + Math.random() * 14, y: 47 + Math.random() * 4 });

function buildTransitInMoon() {
  const sp = spawnLeft();
  return [
    { x: sp.x, y: sp.y, s: 0.85, r: 0, o: 0.0, flash: 0 },
    { x: sp.x + 4, y: sp.y - 3, s: 0.84, r: -4, o: 0.45, flash: 0 },
    { x: sp.x + 10, y: sp.y - 6, s: 0.87, r: -6, o: 1.0, flash: 0 },
    { x: 38, y: 40, s: 0.86, r: -4, o: 1.0, flash: 0 },
    { x: 42, y: 32, s: 0.75, r: -2, o: 1.0, flash: 0 },
    { x: 44, y: 26, s: 0.64, r: -1, o: 1.0, flash: 0 },
  ];
}

function buildTransitInEarth() {
  return [
    ...FLASH_OUT,
    { x: 77, y: 4, s: 0.24, r: -4, o: 1.0, flash: 0 },
    { x: 70, y: 10, s: 0.31, r: -4, o: 1.0, flash: 0 },
    { x: 60, y: 15, s: 0.4, r: -2, o: 1.0, flash: 0 },
    { x: 52, y: 20, s: 0.49, r: -1, o: 1.0, flash: 0 },
  ];
}

function buildTransitInEarthHigh() {
  return [
    ...FLASH_OUT,
    { x: 78, y: 2, s: 0.23, r: -6, o: 1.0, flash: 0 },
    { x: 67, y: -2, s: 0.22, r: -5, o: 1.0, flash: 0 },
    { x: 55, y: 3, s: 0.26, r: -3, o: 1.0, flash: 0 },
    { x: 44, y: 10, s: 0.32, r: 3, o: 1.0, flash: 0 },
    { x: 36, y: 18, s: 0.4, r: 6, o: 1.0, flash: 0 },
  ];
}

function buildTransitOutEarth(px, py) {
  const s0 = scaleFromY(py);
  return [
    { x: px, y: py, s: s0, r: 0, o: 1.0, flash: 0 },
    { x: lerp(px, 70, 0.5), y: lerp(py, 18, 0.5), s: lerp(s0, 0.35, 0.5), r: -5, o: 1.0, flash: 0 },
    { x: 70, y: 18, s: 0.35, r: -5, o: 1.0, flash: 0 },
    { x: 76, y: 8, s: 0.25, r: -3, o: 1.0, flash: 0 },
    { x: 80, y: 1, s: 0.22, r: -1, o: 1.0, flash: 0 },
    ...FLASH_IN,
  ];
}

function buildTransitOutLand(px, py) {
  const lnd = landRight();
  const s0 = scaleFromY(py);
  return [
    { x: px, y: py, s: s0, r: 2, o: 1.0, flash: 0 },
    { x: px + 8, y: py + 4, s: s0, r: 5, o: 1.0, flash: 0 },
    { x: lnd.x - 4, y: lnd.y, s: 0.82, r: 3, o: 1.0, flash: 0 },
    { x: lnd.x, y: lnd.y, s: 0.8, r: 1, o: 0.55, flash: 0 },
    { x: lnd.x, y: lnd.y, s: 0.78, r: 0, o: 0.0, flash: 0 },
  ];
}

function buildTransitOutLandUnder(px, py) {
  const lnd = landRight();
  const s0 = scaleFromY(py);
  return [
    { x: px, y: py, s: s0, r: 5, o: 1.0, flash: 0 },
    { x: 52, y: 48, s: 0.9, r: 10, o: 1.0, flash: 0 },
    { x: 62, y: 52, s: 0.84, r: 12, o: 1.0, flash: 0 },
    { x: lnd.x - 2, y: lnd.y + 2, s: 0.8, r: 5, o: 1.0, flash: 0 },
    { x: lnd.x, y: lnd.y, s: 0.78, r: 1, o: 0.55, flash: 0 },
    { x: lnd.x, y: lnd.y, s: 0.76, r: 0, o: 0.0, flash: 0 },
  ];
}

const ROUTE_DEFS = [
  { inType: "moon", inDur: 5500, outType: "earth", outDur: 5000, moonDur: () => 7000 + Math.random() * 5000 },
  { inType: "moon", inDur: 5500, outType: "land_under", outDur: 5500, moonDur: () => 6000 + Math.random() * 4000 },
  { inType: "earth", inDur: 6000, outType: "land", outDur: 4500, moonDur: () => 7000 + Math.random() * 4000 },
  { inType: "earth_high", inDur: 7000, outType: "land", outDur: 4500, moonDur: () => 8000 + Math.random() * 4000 },
];

const MC_X = 50;
const MC_Y = 26;

function initMoonPhys(ex, ey) {
  return {
    x: ex,
    y: ey,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.2,
    state: "roaming",
    stateTimer: 0,
    nextChange: 2000 + Math.random() * 3000,
    orbitAngle: Math.atan2(ey - MC_Y, ex - MC_X),
    orbitRadius: 16 + Math.random() * 10,
    orbitSpeed: 0.35 + Math.random() * 0.35,
    erraticDir: { x: Math.random() - 0.5, y: (Math.random() - 0.5) * 0.4 },
    erraticTimer: 0,
    targetDir: { x: (Math.random() - 0.5) * 1.2, y: (Math.random() - 0.5) * 0.5 },
    smooth: 0.06 + Math.random() * 0.06,
    maxSpeed: 0.55 + Math.random() * 0.45,
    agility: 0.08 + Math.random() * 0.1,
  };
}

function tickMoonPhys(p, dtMs) {
  const dt = dtMs / 16.67;
  p.stateTimer += dtMs;
  p.erraticTimer += dtMs;

  if (p.stateTimer > p.nextChange) {
    const prevState = p.state;
    const r = Math.random();
    if (r < 0.28) {
      p.state = "orbiting";
      p.orbitAngle = Math.atan2(p.y - MC_Y, p.x - MC_X);
      p.orbitRadius = 14 + Math.random() * 12;
    } else if (r < 0.5) {
      p.state = "roaming";
    } else if (r < 0.72) {
      p.state = "erratic";
    } else {
      // "stop and inspect" — nearly full stop for a beat before the next move
      p.state = "hovering";
    }
    // Coming out of a hover, snap straight to speed instead of easing in —
    // reads as an instant acceleration rather than a gradual drift-off.
    if (prevState === "hovering" && p.state !== "hovering") {
      const burstAngle = Math.random() * Math.PI * 2;
      const burstSpeed = p.maxSpeed * (0.75 + Math.random() * 0.25);
      p.vx = Math.cos(burstAngle) * burstSpeed;
      p.vy = Math.sin(burstAngle) * burstSpeed * 0.6;
    }
    p.stateTimer = 0;
    p.nextChange = p.state === "hovering" ? 900 + Math.random() * 1400 : 2500 + Math.random() * 5000;
  }

  let ax = 0;
  let ay = 0;

  switch (p.state) {
    case "roaming":
      if (p.erraticTimer > 900 + Math.random() * 700) {
        p.targetDir = { x: (Math.random() - 0.5) * 1.6, y: (Math.random() - 0.5) * 0.6 };
        p.erraticTimer = 0;
      }
      ax += (p.targetDir.x - p.vx) * p.smooth * 2.5;
      ay += (p.targetDir.y - p.vy) * p.smooth * 2.5;
      break;
    case "erratic":
      if (p.erraticTimer > 150 + Math.random() * 450) {
        p.erraticDir = { x: (Math.random() - 0.5) * 2.8, y: (Math.random() - 0.5) * 1.2 };
        p.erraticTimer = 0;
      }
      ax += p.erraticDir.x * p.agility * 3.5;
      ay += p.erraticDir.y * p.agility * 3.5;
      break;
    case "orbiting": {
      const newAngle = p.orbitAngle + p.orbitSpeed * (dtMs / 1000);
      const rVar = Math.sin(newAngle * 3) * 4;
      const r = p.orbitRadius + rVar;
      const tx = MC_X + r * Math.cos(newAngle);
      const ty = MC_Y + r * 0.6 * Math.sin(newAngle);
      ax += (tx - p.x) * p.agility * 0.55;
      ay += (ty - p.y) * p.agility * 0.55;
      p.orbitAngle = newAngle;
      break;
    }
    case "hovering":
      // Hard damping — parked in place, "inspecting" the scene below.
      p.vx *= 0.82;
      p.vy *= 0.82;
      break;
    default:
      break;
  }

  p.vx += ax * dt;
  p.vy += ay * dt;

  const spd = Math.hypot(p.vx, p.vy);
  if (spd > p.maxSpeed) {
    p.vx = (p.vx / spd) * p.maxSpeed;
    p.vy = (p.vy / spd) * p.maxSpeed;
  }

  p.x += p.vx * dt;
  p.y += p.vy * dt;

  if (p.x < 16) {
    p.x = 16;
    p.vx = Math.abs(p.vx) * 0.7;
  }
  if (p.x > 84) {
    p.x = 84;
    p.vx = -Math.abs(p.vx) * 0.7;
  }
  if (p.y < 8) {
    p.y = 8;
    p.vy = Math.abs(p.vy) * 0.7;
  }
  if (p.y > 44) {
    p.y = 44;
    p.vy = -Math.abs(p.vy) * 0.7;
  }
}

function useUfoInstance(initialDelay) {
  const rafRef = useRef(null);
  const timerRef = useRef(null);
  const [st, setSt] = useState({ x: 82, y: -20, s: 0.18, r: 2, o: 0, flash: 0, img: 0 });

  const launch = useCallback(() => {
    const img = Math.floor(Math.random() * IMGS.length);
    const rd = ROUTE_DEFS[Math.floor(Math.random() * ROUTE_DEFS.length)];

    const inKfs = rd.inType === "moon" ? buildTransitInMoon() : rd.inType === "earth" ? buildTransitInEarth() : buildTransitInEarthHigh();
    const moonDur = rd.moonDur();

    let phase = PH_IN;
    let t0 = performance.now();
    let lastNow = t0;
    let phys = null;
    let outKfs = null;
    let outDur = 0;

    const tick = (now) => {
      const dtMs = Math.min(now - lastNow, 100);
      lastNow = now;

      if (phase === PH_IN) {
        const t = Math.min((now - t0) / rd.inDur, 1);
        const kf = sampleKfs(inKfs, t);
        setSt({ ...kf, img });

        if (t >= 1) {
          phase = PH_MOON;
          const last = inKfs[inKfs.length - 1];
          phys = initMoonPhys(last.x, last.y);
          t0 = now;
        }
      } else if (phase === PH_MOON) {
        tickMoonPhys(phys, dtMs);
        const s = scaleFromY(phys.y);
        const r = Math.max(-28, Math.min(28, phys.vx * 24));
        setSt({ x: phys.x, y: phys.y, s, r, o: 1, flash: 0, img });

        if (now - t0 >= moonDur) {
          phase = PH_OUT;
          if (rd.outType === "earth") {
            outKfs = buildTransitOutEarth(phys.x, phys.y);
            outDur = rd.outDur;
          } else if (rd.outType === "land_under") {
            outKfs = buildTransitOutLandUnder(phys.x, phys.y);
            outDur = rd.outDur;
          } else {
            outKfs = buildTransitOutLand(phys.x, phys.y);
            outDur = rd.outDur;
          }
          t0 = now;
        }
      } else {
        const t = Math.min((now - t0) / outDur, 1);
        const kf = sampleKfs(outKfs, t);
        setSt({ ...kf, img });

        if (t >= 1) {
          timerRef.current = setTimeout(launch, 1000 + Math.random() * 3000);
          return;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(launch, initialDelay);
    return () => {
      clearTimeout(timerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [launch, initialDelay]);

  return st;
}

function UfoUnit({ st }) {
  const flashingRef = useRef(false);
  const [flashKey, setFlashKey] = useState(0);

  useEffect(() => {
    if (st.flash >= 0.98 && !flashingRef.current) {
      flashingRef.current = true;
      setFlashKey((k) => k + 1);
    } else if (st.flash < 0.5) {
      flashingRef.current = false;
    }
  }, [st.flash]);

  return (
    <>
      {flashKey > 0 && (
        <div
          key={flashKey}
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "82%",
            top: "-16%",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(180,230,255,0.60) 40%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 5,
            mixBlendMode: "screen",
          }}
        />
      )}
      <img
        className="bet-ufo-flight"
        src={IMGS[st.img]}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{
          left: `${st.x}%`,
          top: `${st.y}%`,
          transform: `translate(-50%, -50%) scale(${st.s}) rotate(${st.r}deg)`,
          opacity: st.o,
          zIndex: 4,
        }}
      />
    </>
  );
}

function TransTetraUnit({ st }) {
  return (
    <div
      className="trans-tetra"
      style={{
        left: `${st.x}%`,
        top: `${st.y}%`,
        transform: `translate(-50%, -50%) scale(${st.s}) rotate(${st.r}deg)`,
        opacity: st.o,
        zIndex: 4,
      }}
    >
      <img className="trans-tetra-sprite" src={trandsTetra} alt="" draggable={false} />
    </div>
  );
}

// 3 staggered regular UFOs (random from the approved pool) + 1 animated
// TransTetra sprite-sheet triangle — flying to/from an Earth in the
// top-right corner, same routes as the Bet screen's moon-canvas.
export default function BetUfoFlight() {
  const st0 = useUfoInstance(400);
  const st1 = useUfoInstance(3500);
  const st2 = useUfoInstance(7000);
  const st3 = useUfoInstance(1800);

  return (
    <>
      <UfoUnit st={st0} />
      <UfoUnit st={st1} />
      <UfoUnit st={st2} />
      <TransTetraUnit st={st3} />
    </>
  );
}
