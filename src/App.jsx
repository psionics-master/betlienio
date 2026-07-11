import { useEffect, useState } from "react";
import SceneTransition from "./components/SceneTransition";
import TopBar from "./components/TopBar";
import PersistentUfo from "./components/PersistentUfo";
import PersistentFog from "./components/PersistentFog";
import CoverScene from "./scenes/CoverScene";
import IntroScene from "./scenes/IntroScene";
import TicTacScene from "./scenes/TicTacScene";
import DialogueScene from "./scenes/DialogueScene";
import TelegramWallScene from "./scenes/TelegramWallScene";
import { DIALOGUE_SCENES } from "./data/content";
import { trackEvent } from "./utils/analytics";

const SCENES = ["cover", "intro", "tictac", "dialogue", "wall"];
const HYBRID_SCAN_IDX = DIALOGUE_SCENES.findIndex((s) => s.type === "hybridScan");

function App() {
  const [sceneIdx, setSceneIdx] = useState(0);
  const [tictacPhase, setTictacPhase] = useState("appear");
  const [dialogueIdx, setDialogueIdx] = useState(0);
  const scene = SCENES[sceneIdx];

  useEffect(() => {
    trackEvent(`scene_${scene}`);
  }, [scene]);

  const goNext = () => setSceneIdx((i) => Math.min(i + 1, SCENES.length - 1));
  const skipToWall = () => {
    trackEvent("skip_clicked", { from: scene });
    setSceneIdx(SCENES.length - 1);
  };

  const goHome = () => {
    trackEvent("logo_home_clicked", { from: scene });
    setTictacPhase("appear");
    setDialogueIdx(0);
    setSceneIdx(0);
  };

  // Both the crashed TicTac and the fog it kicks up are mounted once here,
  // outside the per-scene crossfade, so they persist as one continuous DOM
  // element across TicTacScene -> DialogueScene instead of unmounting and
  // jump-cutting to a differently-positioned prop.
  const ufoStage =
    scene === "tictac"
      ? tictacPhase
      : scene === "dialogue"
        ? dialogueIdx < HYBRID_SCAN_IDX
          ? "hover"
          : dialogueIdx === HYBRID_SCAN_IDX
            ? "ping"
            : "drift"
        : "hidden";

  const fogStage =
    (scene === "tictac" && (tictacPhase === "crash" || tictacPhase === "pause")) ||
    (scene === "dialogue" && dialogueIdx < 1)
      ? "in"
      : scene === "dialogue" && dialogueIdx >= 1
        ? "out"
        : "hidden";

  return (
    <div className="stage-outer">
      <div className="stage">
        <TopBar onSkip={skipToWall} onHome={goHome} showSkip={scene !== "cover" && scene !== "wall"} />

        <SceneTransition sceneKey={scene}>
          {scene === "cover" && <CoverScene onDone={goNext} />}
          {scene === "intro" && <IntroScene onDone={goNext} />}
          {scene === "tictac" && <TicTacScene onDone={goNext} onPhaseChange={setTictacPhase} />}
          {scene === "dialogue" && <DialogueScene onDone={goNext} onSceneIdxChange={setDialogueIdx} />}
          {scene === "wall" && <TelegramWallScene />}
        </SceneTransition>

        <PersistentFog stage={fogStage} />
        <PersistentUfo stage={ufoStage} />
      </div>
    </div>
  );
}

export default App;
