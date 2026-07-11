import { useEffect, useRef } from "react";
import "./StarfieldBackground.css";

// Ported from BetlienFront's AirDrop.jsx HyperspaceOverlayBackground —
// same star/streak/moon particle generator, tuned for a public page.
export default function StarfieldBackground({ dim = false }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = "";

    for (let i = 0; i < 40; i++) {
      const star = document.createElement("div");
      const size = Math.random() > 0.7 ? "large" : Math.random() > 0.4 ? "medium" : "small";
      star.className = `sf-star sf-star--${size}`;
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDelay = Math.random() * 3 + "s";
      star.style.animationDuration = 4 + Math.random() * 2 + "s";
      container.appendChild(star);
    }

    for (let i = 0; i < 8; i++) {
      const streak = document.createElement("div");
      streak.className = "sf-streak";
      streak.style.left = Math.random() * 100 + "%";
      streak.style.width = 1 + Math.random() * 2 + "px";
      streak.style.height = 80 + Math.random() * 60 + "px";
      streak.style.animationDelay = Math.random() * 2 + "s";
      streak.style.animationDuration = 1.5 + Math.random() * 1.5 + "s";
      container.appendChild(streak);
    }

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className={`sf-root${dim ? " sf-root--dim" : ""}`} aria-hidden="true" />;
}
