import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useState } from "react";
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
            wind={0}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Confettis;
