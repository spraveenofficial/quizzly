import Loader from "../../Components/Loader";
import "./style.css";
import { motion } from "framer-motion";
const Loading = () => {
  return (
    <motion.div className="pageLoader">
      <Loader />
    </motion.div>
  );
};

export default Loading;
