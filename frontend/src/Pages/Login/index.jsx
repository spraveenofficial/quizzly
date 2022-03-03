import { motion } from "framer-motion";
import Container from "../../Components/Container/index";
import Input from "../../Components/Input/index";
import { Link } from "react-router-dom";
import animation from "../../helpers/animation";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../Components/Toast";
import { login } from "../../Redux/Actions/user";
import Loader from "../../Components/Loader";
import { useEffect, useState } from "react";
import { loadUser } from "../../Redux/Actions/auth";
import { loginValidate } from "../../helpers/validate";
import { Helmet } from "react-helmet";
export default function Login() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const { loading, message, success } = useSelector((state) => state.login);
  const handleSubmit = () => {
    const validateResult = loginValidate(userInput);
    setErrors(validateResult);
    if (validateResult[0].success && validateResult[1].success) {
      dispatch(login(userInput.email, userInput.password));
    }
  };
  useEffect(() => {
    success === true &&
      setTimeout(() => {
        dispatch(loadUser());
      }, 1000);
  }, [success, dispatch]);
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login - Quizzly</title>
      </Helmet>
      <motion.div
        initial="hidden"
        animate="show"
        variants={animation}
        exit="hidden"
        className="logincontainer"
      >
        <motion.div className="logincard">
          <h1 className="text-center">Login 👋</h1>
          <Input
            type="email"
            error={errors[0]?.error}
            success={errors[0]?.success}
            errorMessage={errors[0]?.message}
            label={"Enter Email"}
            placeholder="test@gmail.com"
            name="email"
            onChange={handleChange}
          />
          <Input
            type="password"
            error={errors[1]?.error}
            success={errors[1]?.success}
            errorMessage={errors[1]?.message}
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
              <label htmlFor="checkbox">Remember Me</label>
              <br />
            </div>
            <div className="forgot-passwor">
              <Link to="/forget">
                <p>Forgot Password?</p>
              </Link>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="btn full-width mt-10 inherit-font loading-btn"
          >
            {loading && <Loader />} Login Now
          </button>
          <p className="text-center mt-10 text-white">
            New User? <Link to="/signup">Signup Now</Link>{" "}
          </p>
        </motion.div>
        {message && <Toast message={message} success={success} />}
      </motion.div>
    </Container>
  );
}
