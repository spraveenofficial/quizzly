import { useState } from "react";
import CategoryCard from "../../Components/CategoryCard";
import Container from "../../Components/Container/index";
import data from "./data.json";
import Toast from "../../Components/Toast";
import "./style.css";
import { motion } from "framer-motion";
import {
  categoryVariant,
  categoryItemVariants,
} from "../../helpers/categoryAnimation";
const Home = () => {
  const [toast, setToast] = useState(false);
  return (
    <Container>
      <motion.div variants={categoryVariant} initial="hidden" animate={"show"}>
        <div className="main_data">
          {data.map((quiz, index) => {
            return (
              <motion.div
                className="mobile-item"
                variants={categoryItemVariants}
                key={index}
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
