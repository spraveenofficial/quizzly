import { useState } from "react";
import "./style.css";
import { motion, AnimatePresence } from "framer-motion";
export default function Toast() {
  const [toast, setToast] = useState(true);
  setInterval(() => {
    setToast(false);
  }, 5000);
  const animateToast = {
    hidden: {
      x: -1000,
      opacity: 0,
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeOut",
      },
    },
    show: {
      x: -200,
      opacity: 1,
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeOut",
      },
    },
  };
  return (
    <AnimatePresence>
      {toast && (
      <motion.div
        initial="hidden"
        animate="show"
        variants={animateToast}
        exit="hidden"
        className="snackbars"
      >
        <p>Something went wrong. Please try again</p>
        <i
          onClick={() => setToast(false)}
          className="fa fa-times pointer"
          aria-hidden="true"
        ></i>
      </motion.div>
    )}
    </AnimatePresence>
  );
}
