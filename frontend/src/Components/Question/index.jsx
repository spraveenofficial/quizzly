import "./style.css";
import Container from "../Container";
import { motion } from "framer-motion";
import animation from "../../helpers/animation";
import quizQuestion from "./question.json";
import { useEffect, useState } from "react";
import Toast from "../Toast";
import { Helmet } from "react-helmet";
export default function Question({ onNext }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const thisQuestion = quizQuestion.questions[currentQuestion];
  const [totalTimer, setTotalTimer] = useState(20);
  const [toast, setToast] = useState(false);
  const nextQuestion = () => {
    const upcomingQuestion = currentQuestion + 1;
    if (upcomingQuestion < quizQuestion.questions.length) {
      setCurrentQuestion(upcomingQuestion);
    } else {
      onNext();
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (totalTimer === 0) {
        clearTimeout(interval);
      } else {
        setTotalTimer((prev) => prev - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [totalTimer]);

  var minutes = Math.floor(totalTimer / 60);
  var seconds = totalTimer - minutes * 60;
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{quizQuestion.title} - Quizzly</title>
      </Helmet>
      <motion.div
        initial="hidden"
        animate="show"
        variants={animation}
        exit="hidden"
      >
        <div className="header">
          <h2 className="text-center">{thisQuestion.question}</h2>
        </div>
        <p>
          Timer: {minutes}.{seconds} min
        </p>
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
