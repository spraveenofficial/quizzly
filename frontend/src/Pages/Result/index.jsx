import { motion } from "framer-motion";
import Container from "../../Components/Container";
import "./style.css";
import animation from "../../helpers/animation";
export default function Result() {
  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="show"
        variants={animation}
        exit="hidden"
      >
        <h1>This is Result</h1>
      </motion.div>
    </Container>
  );
}
