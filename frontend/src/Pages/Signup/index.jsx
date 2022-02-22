import { motion } from "framer-motion";
import Container from "../../Components/Container/index";
import Input from "../../Components/Input/index";
import { Link } from "react-router-dom";
import animation from "../../helpers/animation";
import "./style.css";
import Toast from "../../Components/Toast";
import { useState } from "react";
export default function Signup() {
  const [toast, setToast] = useState(false);
  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="show"
        variants={animation}
        exit="hidden"
        className="logincontainer"
      >
        <motion.div className="logincard">
          <h1 className="text-center">Sign Up 👋</h1>
          <Input
            error={false}
            type="text"
            success={false}
            label={"Enter Name"}
            placeholder="John doe"
          />
          <Input
            type="email"
            error={false}
            success={false}
            label={"Enter Email"}
            placeholder="test@gmail.com"
          />
          <Input
            type="password"
            error={false}
            success={false}
            label={"Enter Password"}
            placeholder="***********"
          />
          <div className="remember-options">
            <div className="remember">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value="true"
                className="checkbox"
              />
              <label htmlFor="checkbox">
                I agree, all the terms & conditions.
              </label>
              <br />
            </div>
          </div>
          <button
            onClick={() => setToast(!toast)}
            className="btn full-width mt-10 inherit-font"
          >
            Signup Now
          </button>
          <p className="text-center mt-10 text-white">
            Already Registered? <Link to="/login">Login Now</Link>{" "}
          </p>
        </motion.div>
        {toast && <Toast />}
      </motion.div>
    </Container>
  );
}
