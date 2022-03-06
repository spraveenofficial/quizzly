import "./style.css";
import Container from "../Container";
import { motion } from "framer-motion";
import animation from "../../helpers/animation";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { scoreChange, SelectAnswer, SetTimer } from "../../Redux/Actions/score";

export default function Question({ onNext, quiz }) {
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.quiz);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const thisQuestion = quiz[0].questions[currentQuestion];
  const [totalTimer, setTotalTimer] = useState(quiz[0].timeRequired);
  const eachQuestionMarks =
    quiz.length === 1 && quiz[0].marks / quiz[0].questions.length;
  const nextQuestion = (e, id) => {
    const optionSelected = e.target.textContent;
    dispatch(SelectAnswer(id, optionSelected));
    if (optionSelected === thisQuestion.correctAnswer) {
      dispatch(scoreChange(Number(eachQuestionMarks)));
    }
    const upcomingQuestion = currentQuestion + 1;
    upcomingQuestion < quiz[0].questions.length
      ? setCurrentQuestion(upcomingQuestion)
      : onNext();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      totalTimer == 0
        ? clearTimeout(interval)
        : setTotalTimer((prev) => prev - 1);
    }, 1000);
    return () => {
      // dispatch(SetTimer(totalTimer));
      clearInterval(interval);
    };
  }, [totalTimer]);

  var minutes = Math.floor(totalTimer / 60);
  var seconds = totalTimer - minutes * 60;

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{quiz[0].title} - Quizzly</title>
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
          Time Left: {minutes}.{seconds} {minutes > 1 ? "min" : "sec"}
        </p>
        <div className="question">
          <div className="score">
            <p>
              Questions: {currentQuestion + 1}/{quiz[0].questions.length}
            </p>
            <p>Score: {score}</p>
          </div>
          <div className="questions">
            <div className="options">
              {thisQuestion.options.map((item) => {
                return (
                  <button
                    key={item}
                    onClick={(e) => nextQuestion(e, thisQuestion.id)}
                    className="btn full-width mt-10 inherit-font opt-button"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}
