import { useState } from "react";
import CategoryCard from "../../Components/CategoryCard";
import Container from "../../Components/Container/index";
import data from "./data.json";
import Toast from "../../Components/Toast";
import "./style.css";
const Home = () => {
  const [toast, setToast] = useState(false);
  return (
    <Container>
      <div className="main_data">
        {data.map((quiz, index) => {
          return (
            <CategoryCard
              key={index}
              title={quiz.title}
              questionAmount={quiz.questionsCount}
              thumbnail={quiz.thumbnail}
              marks={quiz.marks}
              onClick={() => setToast(() => !toast)}
            />
          );
        })}
      </div>
      {toast && <Toast />}
    </Container>
  );
};

export default Home;
