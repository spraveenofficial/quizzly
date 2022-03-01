import "./style.css";
import Container from "../../Components/Container";
import animation from "../../helpers/animation";
import { motion } from "framer-motion";
import Input from "../../Components/Input";
import { useSelector } from "react-redux";
import Button from "../../Components/Button";
import { useState } from "react";
export default function CreateQuiz() {
  const itemTemplate = {
    title: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "",
  };
  const { user } = useSelector((state) => state.auth);
  const [userInput, setUserInput] = useState({
    title: "",
    thumbnail: "",
    totalMarks: "",
    totalTime: "",
  });
  const [questionInput, setQuestionInput] = useState([itemTemplate]);
  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const addQuizQuestion = (e) => {
    e.preventDefault();
    console.log("clicked");
    setQuestionInput([...questionInput, itemTemplate]);
  };
  const onChange = (e, index) => {
    const updatedItems = questionInput.map((items, i) =>
      console.log(items) && index === i
        ? Object.assign(items, {
            // [e.target.name]: e.target.value,
            ["options"]:
              e.target.name == "option" &&
              new Array(...questionInput[index].options, e.target.value),
          })
        : items
    );
    setQuestionInput(updatedItems);
  };
  console.log(questionInput);
  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="show"
        variants={animation}
        exit="hidden"
        className="create-quiz"
      >
        <div className="justify-between text-center align-center flex">
          <h3>Create Quiz</h3>
          <p>{user.name} </p>
        </div>
        <div className="quiz-box-main">
          <Input
            label="Enter Title *"
            onChange={handleChange}
            placeholder="Enter Quiz Title"
            name="title"
          />
          <Input
            label="Enter Thumbnail *"
            placeholder="Currently we are accepting url"
            onChange={handleChange}
            name="thumbnail"
          />
          <div className="grid grid-2 gap10">
            <Input
              label="Total Time *"
              onChange={handleChange}
              placeholder="in Minutes "
              name="totalTime"
              type="number"
            />
            <Input
              label="Marks"
              onChange={handleChange}
              placeholder="Total Marks"
              name="totalMarks"
              type="number"
            />
          </div>
        </div>
        <div className="create-quiz-btn flex justify-last">
          <Button onClick={(e) => addQuizQuestion(e)}>Add Question</Button>
        </div>
        {questionInput.map((item, index) => {
          return (
            <div
              className={
                "add-questions pb-10 mt-10 " +
                (questionInput.length > 1 && "border-bottom")
              }
              key={index}
            >
              <Input
                label="Enter Question Title *"
                placeholder="Question of 1st Question"
                onChange={(e) => onChange(e, index)}
                name="title"
              />
              <div className="grid grid-2 gap-10 ">
                <Input
                  onChange={(e) => onChange(e, index)}
                  name="option"
                  label="Option A"
                />
                <div className="checkbox-option-correct">
                  <p>Correct?</p>
                  <input
                    className="text-center justify-center"
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="grid grid-2 gap-10 ">
                <Input
                  onChange={(e) => onChange(e, index)}
                  name="option"
                  label="Option B"
                />
                <div className="checkbox-option-correct">
                  <p>Correct?</p>
                  <input
                    className="text-center justify-center"
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="grid grid-2 gap-10 ">
                <Input label="Option C" />
                <div className="checkbox-option-correct">
                  <p>Correct?</p>
                  <input
                    className="text-center justify-center"
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="grid grid-2 gap-10 ">
                <Input label="Option D" />
                <div className="checkbox-option-correct">
                  <p>Correct?</p>
                  <input
                    className="text-center justify-center"
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </Container>
  );
}
