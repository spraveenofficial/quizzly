import "./style.css";
import Container from "../Container";
import { motion } from "framer-motion";
import animation from "../../helpers/animation";
import quizQuestion from "./question.json";
import { useState } from "react";
import Toast from "../Toast";
export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const thisQuestion = quizQuestion.questions[currentQuestion];
  const [toast, setToast] = useState(false);
  const nextQuestion = () => {
    const upcomingQuestion = currentQuestion + 1;
    if (upcomingQuestion < quizQuestion.questions.length) {
      setCurrentQuestion(upcomingQuestion);
    } else {
      setToast(true);
    }
  };
  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="show"
        variants={animation}
        exit="hidden"
      >
        <div className="header">
          <h2 className="text-center">{thisQuestion.question}</h2>
        </div>
        <div className="question">
          <div className="score">
            <p>
              Questions: {currentQuestion + 1}/{quizQuestion.questions.length}
            </p>
            <p>Score: 0</p>
          </div>
          <div className="questions">
            {/* <p>
              Harvey Specter is considered one of New York's most brillant
              corporate litigation lawyers, but what's his unusual middle name?
            </p> */}
            <div className="options">
              {thisQuestion.options.map((item) => {
                return (
                  <button
                    key={item}
                    onClick={() => nextQuestion()}
                    className="btn full-width mt-10 inherit-font opt-button"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {toast && <Toast message="Result Page Under Construction." />}
      </motion.div>
    </Container>
  );
}
