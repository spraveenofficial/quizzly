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
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const switchQuiz = (path) => {
    navigate(`/quiz/${path}`);
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
                key={index}
              >
                <CategoryCard
                  key={index}
                  title={quiz.title}
                  questionAmount={quiz.questionsCount}
                  thumbnail={quiz.thumbnail}
                  marks={quiz.marks}
                  onClick={() => switchQuiz(quiz.path)}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      {/* {toast && <Toast />} */}
    </Container>
  );
};

export default Home;
