import logoImg from "../assets/Betlient.webp";
import "./SceneLogo.css";

export default function SceneLogo() {
  return (
    <div className="scene-logo" aria-hidden="true">
      <img src={logoImg} alt="" draggable={false} />
    </div>
  );
}
