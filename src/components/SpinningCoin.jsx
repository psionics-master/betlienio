import coinImg from "../assets/BetlienGCoin.webp";
import "./SpinningCoin.css";

export default function SpinningCoin() {
  return (
    <div className="spin-coin-wrap" aria-hidden="true">
      <div className="spin-coin-glow" />
      <img src={coinImg} alt="" className="spin-coin-img" draggable={false} />
    </div>
  );
}
