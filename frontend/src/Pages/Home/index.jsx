import { useEffect, useState } from "react";
import CategoryCard from "../../Components/CategoryCard";
import Container from "../../Components/Container/index";
import { decryptHomeQuiz } from "../../helpers/decrypt";
import "./style.css";
import { motion } from "framer-motion";
import {
  categoryVariant,
  categoryItemVariants,
} from "../../helpers/categoryAnimation";
import { useDispatch, useSelector } from "react-redux";
import { homePageQuiz } from "../../Redux/Actions/quiz";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import LoadingPage from "../../Pages/LoadingPage";
const Home = () => {
  const dispatch = useDispatch();
  const [quizs, setQuizs] = useState([]);
  const navigate = useNavigate();
  const { success, loading, quiz } = useSelector((state) => state.homePageQuiz);
  const switchQuiz = (path) => {
    navigate(`/quiz/${path}`);
  };
  useEffect(async () => {
    if (success) {
      const datas = await decryptHomeQuiz(quiz);
      setQuizs(datas);
    }
  }, [success]);
  useEffect(() => {
    dispatch(homePageQuiz());
  }, []);
  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <Container>
          <motion.div
            variants={categoryVariant}
            initial="hidden"
            animate={"show"}
          >
            <Helmet>
              <meta charSet="utf-8" />
              <title>Home - Quizzly</title>
            </Helmet>
            <div className="main_data">
              {quizs.map((quiz, index) => {
                return (
                  <motion.div
                    className="mobile-item"
                    variants={categoryItemVariants}
                    key={index}
                  >
                    <CategoryCard
                      key={index}
                      title={quiz.title}
                      questionAmount={quiz.questionsCount}
                      thumbnail={quiz.thumbnail}
                      marks={quiz.marks}
                      onClick={() => switchQuiz(quiz.path)}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Container>
      )}
    </>
  );
};

export default Home;
