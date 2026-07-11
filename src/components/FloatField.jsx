import "./FloatField.css";

// Generic decorative layer: a set of images drifting slowly on independent
// randomized loops. Used for NHI portraits, UFOs, and asteroids on the wall scene.
export default function FloatField({ items }) {
  return (
    <div className="float-field" aria-hidden="true">
      {items.map((item, i) => (
        <img
          key={i}
          src={item.src}
          alt=""
          className={`float-item${item.round ? " float-item--round" : ""}`}
          draggable={false}
          style={{
            width: item.size,
            top: item.top,
            left: item.left,
            opacity: item.opacity ?? 0.85,
            animationDuration: `${item.duration ?? 14}s`,
            animationDelay: `${item.delay ?? 0}s`,
            "--drift-x": `${item.driftX ?? 18}px`,
            "--drift-y": `${item.driftY ?? 14}px`,
          }}
        />
      ))}
    </div>
  );
}
