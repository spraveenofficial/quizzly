import { motion } from "framer-motion";
import Container from "../../Components/Container/index";
import Input from "../../Components/Input/index";
import { Link } from "react-router-dom";
import animation from "../../helpers/animation";
export default function Login() {
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
          <h1 className="text-center">Login 👋</h1>
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
              <label htmlFor="checkbox">Remember Me</label>
              <br />
            </div>
            <div className="forgot-passwor">
              <Link to="/forget">
                <p>Forgot Password?</p>
              </Link>
            </div>
          </div>
          <button className="btn full-width mt-10 inherit-font">
            Login Now
          </button>
          <p className="text-center mt-10 text-white">
            New User? <Link to="/signup">Signup Now</Link>{" "}
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
}
