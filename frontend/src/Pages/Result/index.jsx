import { motion } from "framer-motion";
import Container from "../../Components/Container";
import "./style.css";
import animation from "../../helpers/animation";
import { useSelector } from "react-redux";
import Button from "../../Components/Button";
export default function Result({ quiz }) {
  const { marks, questions, title } = quiz[0];
  console.log(questions);
  const { score } = useSelector((state) => state.score);
  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="show"
        variants={animation}
        exit="hidden"
      >
        <div className="finalscore">
          <h1 className="text-center">
            You have Scored: {score} out of {marks}
          </h1>
        </div>
        {questions.map((eachQuiz, index) => {
          return (
            <div key={index} className="questions">
              <p>
                {index + 1}.{eachQuiz.question}
              </p>
              <div className="options-answer">
                {eachQuiz.options.map((eachOption) => {
                  return (
                    <Button
                      disabled={true}
                      isTrue={eachOption === eachQuiz.correctAnswer}
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
