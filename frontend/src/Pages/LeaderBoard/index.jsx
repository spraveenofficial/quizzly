import "./style.css";
import { Helmet } from "react-helmet";
import Container from "../../Components/Container";
import { motion, AnimateSharedLayout } from "framer-motion";
import Confetti from "../../Components/Confetti";
import topperImg from "../../Components/Icons/topper.json";
import Lottie from "react-lottie";
import animation from "../../helpers/animation";
import LeaderBoardList from "./items";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { leaderBoards } from "../../Redux/Actions/leaderboard";
import LoadingPage from "../LoadingPage";
export default function LeaderBoard() {
  const dispatch = useDispatch();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    isClickToPauseDisabled: true,
    animationData: topperImg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { user } = useSelector((state) => state.auth);
  const { loading, leaderboard, success } = useSelector(
    (state) => state.leaderboard
  );
  useEffect(() => {
    dispatch(leaderBoards());
  }, []);
  const items = [0, 1, 2];
  return loading ? (
    <LoadingPage />
  ) : (
    leaderboard !== null && (
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
                width="100"
                height="100"
              />
            </div>
            <div className="top-right">
              <h2>{leaderboard[0].name}</h2>
              <p>{leaderboard[0].email}</p>
              <h3>Score: {leaderboard[0].totalScore}</h3>
            </div>
          </div>
          <div className="leaderboard-items mt-20">
            <AnimateSharedLayout>
              <motion.ul layout initial={{ borderRadius: 25 }}>
                {leaderboard.slice(1).map((item, index) => (
                  <LeaderBoardList
                    key={index}
                    index={index + 2}
                    name={item.name}
                    email={item.email}
                    totalScore={item.totalScore}
                  />
                ))}
              </motion.ul>
            </AnimateSharedLayout>
          </div>
        </motion.div>
        {user.email === leaderboard[0].email && <Confetti  />}
      </Container>
    )
  );
}
