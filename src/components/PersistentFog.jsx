import fogImg from "../assets/fog.webp";
import "./PersistentFog.css";

// stage: "hidden" | "in" (fade in at crash, then hold) | "out" (slow fade
// once Blurppz has descended) — mirrors the source, where fog appears at
// impact, lingers through the crash-site dialogue, and only fades out
// slowly (~5-6s) once the story moves past the first alien encounter.
export default function PersistentFog({ stage }) {
  if (stage === "hidden") return null;
  return (
    <div className={`pf-fog-container pf-fog-container--${stage}`} aria-hidden="true">
      <img src={fogImg} alt="" className="pf-fog pf-fog--1" draggable={false} />
      <img src={fogImg} alt="" className="pf-fog pf-fog--2" draggable={false} />
    </div>
  );
}
