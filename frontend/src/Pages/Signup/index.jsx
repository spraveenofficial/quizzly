import { motion } from "framer-motion";
import Container from "../../Components/Container/index";
import Input from "../../Components/Input/index";
import { Link } from "react-router-dom";
import animation from "../../helpers/animation";
import "./style.css";
import Toast from "../../Components/Toast";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Redux/Actions/user";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import { signupValidate } from "../../helpers/validate";
import { Helmet } from "react-helmet";
import { loadUser } from "../../Redux/Actions/auth";
export default function Signup() {
  const dispatch = useDispatch();
  const { loading, message, success } = useSelector((state) => state.register);
  const [errors, setError] = useState([]);
  const [inputItem, setInputItem] = useState({
    name: "",
    email: "",
    password: "",
    checkbox: false,
  });
  const handleChange = (e) => {
    setInputItem({
      ...inputItem,
      [e.target.name]: e.target.value,
    });
    // setError(signupValidate(inputItem));
  };
  const handleSubmit = async () => {
    const resultOfValidation = signupValidate(inputItem);
    setError(resultOfValidation);
    if (
      resultOfValidation[0].success &&
      resultOfValidation[1].success &&
      resultOfValidation[2].success
    ) {
      dispatch(signup(inputItem.name, inputItem.email, inputItem.password));
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
        <title>Signup - Quizzly</title>
      </Helmet>
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
            error={errors[0]?.error}
            type="text"
            success={errors[0]?.success}
            label={"Enter Name"}
            errorMessage={errors[0]?.message}
            placeholder="John doe"
            name="name"
            onChange={handleChange}
          />
          <Input
            type="email"
            error={errors[1]?.error}
            success={errors[1]?.success}
            errorMessage={errors[1]?.message}
            label={"Enter Email"}
            placeholder="test@gmail.com"
            name="email"
            onChange={handleChange}
          />
          <Input
            type="password"
            error={errors[2]?.error}
            success={errors[2]?.success}
            errorMessage={errors[2]?.message}
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
                onChange={(e) => {
                  handleChange({
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
