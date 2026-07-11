import { AnimatePresence, motion } from "framer-motion";

export default function SceneTransition({ sceneKey, children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={sceneKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ position: "absolute", inset: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
