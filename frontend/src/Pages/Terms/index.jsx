import Container from "../../Components/Container";
import "./style.css";
import { motion } from "framer-motion";
import animation from "../../helpers/animation";
import { useState } from "react";
import Toast from "../../Components/Toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Terms({ onNext }) {
  const navigate = useNavigate();
  const [isChecked, setChecked] = useState(false);
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
        <p>
          <strong>Terms: </strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Labore, perspiciatis. Dolor voluptatibus eos soluta
          aliquam nobis quas tenetur natus, optio repellat ut commodi odio
          excepturi dolorum sint inventore consequuntur illum.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolorem
          temporibus eum deleniti pariatur aperiam vitae non amet! Eveniet iste
          a id nihil fugiat nisi porro optio sunt exercitationem dicta!
        </p>
        <h2>Privacy:</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          amet, nemo harum magni, animi et necessitatibus tenetur debitis,
          mollitia consectetur ex optio qui cumque ea laborum magnam quis ipsum
          unde!
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
          <label htmlFor="checkbox">I agree, all the terms & conditions.</label>
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
  );
}
