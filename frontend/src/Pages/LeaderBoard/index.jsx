import Toast from "../../Components/Toast";
import "./style.css";
import { Helmet } from "react-helmet";
import Container from "../../Components/Container";
import { motion, AnimateSharedLayout } from "framer-motion";
import Confetti from "../../Components/Confetti";
import topperImg from "../../Components/Icons/topper.json";
import Lottie from "react-lottie";
import animation from "../../helpers/animation";
import LeaderBoardList from "./items";
export default function LeaderBoard() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    isClickToPauseDisabled: true,
    animationData: topperImg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const items = [0, 1, 2];
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>LeaderBoard - Quizzly</title>
      </Helmet>
      <motion.div
        className="leaderboard"
        initial="hidden"
        animate="show"
        variants={animation}
        exit="hidden"
      >
        <div className="top-on-leaderboard">
          <div className="top-left">
            <Lottie
              isClickToPauseDisabled
              options={defaultOptions}
              width={200}
              height={300}
            />
          </div>
          <div className="top-right">
            <h2>Praveen Singh</h2>
            <p>spraxxxxx@gmail.com</p>
            <h3>Score: 1200</h3>
          </div>
        </div>
        <div className="leaderboard-items mt-20">
          <AnimateSharedLayout>
            <motion.ul layout initial={{ borderRadius: 25 }}>
              {items.map((item) => (
                <LeaderBoardList key={item} />
              ))}
            </motion.ul>
          </AnimateSharedLayout>
        </div>
      </motion.div>
      <Toast />
      <Confetti />
    </Container>
  );
}
