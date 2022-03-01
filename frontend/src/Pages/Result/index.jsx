import { motion } from "framer-motion";
import Container from "../../Components/Container";
import "./style.css";
import animation from "../../helpers/animation";
import { useSelector } from "react-redux";
export default function Result() {
  const { score } = useSelector((state) => state.score);
  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="show"
        variants={animation}
        exit="hidden"
      >
        <h1>This is Result</h1>
        {score}
      </motion.div>
    </Container>
  );
}
