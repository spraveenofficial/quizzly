import { motion } from "framer-motion";
import Confetti from "https://cdn.skypack.dev/react-confetti@6.0.0";
import { useState } from "react";
import animation from "../../helpers/animation";
const Confettis = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  setTimeout(() => {
    setShowConfetti(false);
  }, 5000);
  return (
    showConfetti && (
      <motion.div
        initial="hidden"
        animate="show"
        // variants={animation}
        exit={{ opactiy: 0 }}
      >
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          wind={0.05}
        />
      </motion.div>
    )
  );
};

export default Confettis;
