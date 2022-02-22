import { useState } from "react";
import CategoryCard from "../../Components/CategoryCard";
import Container from "../../Components/Container/index";
import data from "./data.json";
import Toast from "../../Components/Toast";
import "./style.css";
import { motion } from "framer-motion";
const Home = () => {
  const [toast, setToast] = useState(false);
  const categoryVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        type: "tween",
        staggerChildren: 0.2,
      },
    },
  };
  const categoryItemVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <Container>
      <motion.div variants={categoryVariant} initial="hidden" animate={"show"}>
        <div className="main_data">
          {data.map((quiz, index) => {
            return (
              <motion.div
                className="mobile-item"
                variants={categoryItemVariants}
              >
                <CategoryCard
                  key={index}
                  title={quiz.title}
                  questionAmount={quiz.questionsCount}
                  thumbnail={quiz.thumbnail}
                  marks={quiz.marks}
                  onClick={() => setToast(() => !toast)}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      {toast && <Toast />}
    </Container>
  );
};

export default Home;
