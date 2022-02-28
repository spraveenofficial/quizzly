import { motion, AnimatePresence } from "framer-motion";
import Confetti from "https://cdn.skypack.dev/react-confetti@6.0.0";
import { useState } from "react";
import animation from "../../helpers/animation";
const Confettis = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  setTimeout(() => {
    setShowConfetti(false);
  }, 5000);
  return (
    <AnimatePresence>
      {showConfetti && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            wind={0.05}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Confettis;
