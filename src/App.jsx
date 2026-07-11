import { useEffect, useState } from "react";
import SceneTransition from "./components/SceneTransition";
import TopBar from "./components/TopBar";
import CoverScene from "./scenes/CoverScene";
import IntroScene from "./scenes/IntroScene";
import TicTacScene from "./scenes/TicTacScene";
import DialogueScene from "./scenes/DialogueScene";
import TelegramWallScene from "./scenes/TelegramWallScene";
import { trackEvent } from "./utils/analytics";

const SCENES = ["cover", "intro", "tictac", "dialogue", "wall"];

function App() {
  const [sceneIdx, setSceneIdx] = useState(0);
  const scene = SCENES[sceneIdx];

  useEffect(() => {
    trackEvent(`scene_${scene}`);
  }, [scene]);

  const goNext = () => setSceneIdx((i) => Math.min(i + 1, SCENES.length - 1));
  const skipToWall = () => {
    trackEvent("skip_clicked", { from: scene });
    setSceneIdx(SCENES.length - 1);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <TopBar onSkip={skipToWall} showSkip={scene !== "cover" && scene !== "wall"} />

      <SceneTransition sceneKey={scene}>
        {scene === "cover" && <CoverScene onDone={goNext} />}
        {scene === "intro" && <IntroScene onDone={goNext} />}
        {scene === "tictac" && <TicTacScene onDone={goNext} />}
        {scene === "dialogue" && <DialogueScene onDone={goNext} />}
        {scene === "wall" && <TelegramWallScene />}
      </SceneTransition>
    </div>
  );
}

export default App;
