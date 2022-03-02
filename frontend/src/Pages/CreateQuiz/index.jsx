import "./style.css";
import Container from "../../Components/Container";
import animation from "../../helpers/animation";
import { motion } from "framer-motion";
import Input from "../../Components/Input";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Components/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addQuiz } from "../../Redux/Actions/quiz";
import Toast from "../../Components/Toast";
import Loader from "../../Components/Loader";
export default function CreateQuiz() {
  const dispatch = useDispatch();
  const optionArray = ["A", "B", "C", "D"];
  const itemTemplate = {
    id: uuidv4(),
    title: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    answer: "",
  };
  const { user } = useSelector((state) => state.auth);
  const { loading, success, message } = useSelector((state) => state.addQuiz);
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
    setQuestionInput([...questionInput, itemTemplate]);
  };
  const onChange = (e, index) => {
    console.log(e.target.name);
    const updatedItems = questionInput.map((items, i) =>
      index === i
        ? Object.assign(items, {
            [e.target.name]: e.target.value,
          })
        : items
    );
    setQuestionInput(updatedItems);
  };
  const handleSubmit = () => {
    const questions = questionInput.map((item) => {
      return {
        id: item.id,
        question: item.title.trim(),
        options: [
          item.optionA.trim(),
          item.optionB.trim(),
          item.optionC.trim(),
          item.optionD.trim(),
        ],
        correctAnswer: item[item.answer].trim(),
      };
    });
    const titleThing = {
      title: userInput.title.trim(),
      thumbnail: userInput.thumbnail.trim(),
      marks: userInput.totalMarks.trim(),
      timeRequired: Number(userInput.totalTime) * 60,
      difficulty: "easy",
      noOfQuestions: Number(questionInput.length),
      questions: questions,
    };
    dispatch(addQuiz(titleThing));
  };
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
                placeholder={`Enter Question ${index + 1}`}
                onChange={(e) => onChange(e, index)}
                name="title"
              />
              {optionArray.map((item, i) => {
                return (
                  <div className="grid grid-2 gap-10 " key={i}>
                    <Input
                      onChange={(e) => onChange(e, index)}
                      name={`option${item}`}
                      label={`Option ${i + 1}`}
                      placeholder={`Option ${item} `}
                    />
                    <div className="checkbox-option-correct">
                      <p>Correct?</p>
                      <input
                        className="text-center justify-center"
                        type="checkbox"
                        name="answer"
                        id=""
                        onChange={(e) =>
                          onChange(
                            {
                              target: {
                                name: e.target.name,
                                value: e.target.checked ? `option${item}` : "",
                              },
                            },
                            index
                          )
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
        <Button onClick={() => handleSubmit()} isFull={true}>
          {loading && <Loader />} Submit
        </Button>
      </motion.div>
      {message && <Toast message={message} success={success} />}
    </Container>
  );
}
