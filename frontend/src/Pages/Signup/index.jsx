import { motion } from "framer-motion";
import Container from "../../Components/Container/index";
import Input from "../../Components/Input/index";
import { Link } from "react-router-dom";
import animation from "../../helpers/animation";
import "./style.css";
import Toast from "../../Components/Toast";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Redux/Actions/user";
import { useState } from "react";
import Loader from "../../Components/Loader";
export default function Signup() {
  const dispatch = useDispatch();
  const { loading, message, success } = useSelector((state) => state.register);
  const [nameError, setNameError] = useState(false);
  // const [nameSuccess, setNameSuccess] = useState(false);
  const [nametextError, setNametextError] = useState("");
  const [emailError, setEmailError] = useState(false);
  // const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailTextError, setEmailTextError] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  // const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [passwordTextError, setTextPasswordError] = useState("");
  const [inputItem, setInputItem] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputItem({ ...inputItem, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (!inputItem.name && !inputItem.email && !inputItem.password) {
      setNameError(true);
      setNametextError("You should put your valid Name.");
      setEmailError(true);
      setEmailTextError("Enter valid Email Address.");
      setPasswordError(true);
      setTextPasswordError("Enter password of minimim 6 characters.");
      return;
    } else if ((!inputItem.name && !inputItem.password) || !inputItem.name) {
      setNameError(true);
      setNametextError("You should put your valid Name.");
      return;
    } else if ((!inputItem.email && !inputItem.password) || !inputItem.email) {
      setEmailError(true);
      setEmailTextError("Enter valid Email Address.");
      setPasswordError(true);
      setTextPasswordError("Enter password of minimim 6 characters.");
      return;
    } else if (!inputItem.password) {
      setPasswordError(true);
      setTextPasswordError("Enter password of minimim 6 characters.");
      return;
    }
    // setFormError(validate(inputItem));
    dispatch(signup(inputItem.name, inputItem.email, inputItem.password));
  };
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
            error={nameError}
            type="text"
            success={false}
            label={"Enter Name"}
            errorMessage={nametextError}
            placeholder="John doe"
            name="name"
            onChange={handleChange}
          />
          <Input
            type="email"
            error={emailError}
            success={false}
            errorMessage={emailTextError}
            label={"Enter Email"}
            placeholder="test@gmail.com"
            name="email"
            onChange={handleChange}
          />
          <Input
            type="password"
            error={passwordError}
            errorMessage={passwordTextError}
            success={false}
            label={"Enter Password"}
            placeholder="***********"
            name="password"
            onChange={handleChange}
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
            onClick={handleSubmit}
            className="btn full-width mt-10 inherit-font loading-btn"
          >
            {loading && <Loader />}Signup Now
          </button>
          <p className="text-center mt-10 text-white">
            Already Registered? <Link to="/login">Login Now</Link>{" "}
          </p>
        </motion.div>
        {message && <Toast message={message} success={success} />}
      </motion.div>
    </Container>
  );
}
