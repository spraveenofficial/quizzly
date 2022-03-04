import Container from "../../Components/Container";
import "./style.css";
import { motion } from "framer-motion";
import animation from "../../helpers/animation";
import { useState } from "react";
import Toast from "../../Components/Toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Terms({ onNext, quiz }) {
  const navigate = useNavigate();
  const [isChecked, setChecked] = useState(false);
  const eachQuestionMarks =
    quiz.length === 1 && quiz[0].marks / quiz[0].questions.length;
  const [toast, setToast] = useState(false);
  const changeCheckbox = () => {
    setChecked(() => !isChecked);
  };
  const setNext = () => {
    if (!isChecked) {
      setToast(!toast);
      return;
    }
    isChecked && onNext();
  };
  const pushBack = () => {
    navigate("/");
  };
  return (
    quiz.length === 1 && (
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Rules - Quizzly</title>
        </Helmet>
        <motion.div
          className="terms-and-condition"
          initial="hidden"
          animate="show"
          variants={animation}
          exit="hidden"
        >
          <p className="text-center">
            <strong>Terms for: </strong> {quiz[0].title}
          </p>
          <h2>Concent:</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            consequuntur, impedit odio exercitationem velit amet id aperiam
            pariatur maxime consequatur facere. A, ex quo nobis ducimus dolor
            labore ratione soluta.
          </p>
          <h2>Cookies Information:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            dolorem temporibus eum deleniti pariatur aperiam vitae non amet!
            Eveniet iste a id nihil fugiat nisi porro optio sunt exercitationem
            dicta!
          </p>
          <h2>Rules:</h2>
          <p>
            1: Total no. of Questions: {quiz[0].questions.length}
            <br />
            2: {quiz[0].timeRequired / 60} Minutes Required to Complete this
            Quiz.
            <br />
            3: Each Question Contains {eachQuestionMarks}&nbsp;Marks.
            <br />
            4: You will be Redirected to Result Page after completion of Quiz.
            <br />
          </p>

          <div className="remember">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              value="true"
              className="checkbox mt-10"
              onChange={(e) => {
                changeCheckbox({
                  target: {
                    name: e.target.name,
                    value: e.target.checked,
                  },
                });
              }}
            />
            <label htmlFor="checkbox">
              I agree, all the terms & conditions.
            </label>
            <br />
          </div>
          <button onClick={() => setNext()} className="btn full-width mt-10">
            Agree
          </button>
          <button onClick={() => pushBack()} className="btn full-width mt-10">
            Not Agree
          </button>
          {toast && <Toast message="Please Agree T&C for starting Quiz." />}
        </motion.div>
      </Container>
    )
  );
}
