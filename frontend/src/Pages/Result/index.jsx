import { motion } from "framer-motion";
import Container from "../../Components/Container";
import "./style.css";
import animation from "../../helpers/animation";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Components/Button";
import { useEffect } from "react";
import { updateUserQuiz } from "../../Redux/Actions/user";
export default function Result({ quiz }) {
  const dispatch = useDispatch();
  const { score, selectedOptions } = useSelector(
    (state) => state.quiz
  );
  const { marks, questions, title, id, timeRequired } = quiz[0];
  useEffect(() => {
    dispatch(updateUserQuiz(id, score, 120));
  }, []);
  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="show"
        variants={animation}
        exit="hidden"
      >
        <div className="finalscore">
          <h1 className="text-center mb-10">
            You have Scored: {score} out of {marks}
          </h1>
        </div>
        {questions.map((eachQuiz, index) => {
          return (
            <div key={index} className="questions questionss">
              <p>
                {index + 1}. {eachQuiz.question}
              </p>
              <div className="options-answer">
                {eachQuiz.options.map((eachOption) => {
                  return (
                    <Button
                      disabled={true}
                      isTrue={eachOption === eachQuiz.correctAnswer}
                      isError={eachOption === selectedOptions[index].option}
                      key={eachOption}
                      isFull={true}
                    >
                      {eachOption}
                    </Button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </motion.div>
    </Container>
  );
}
