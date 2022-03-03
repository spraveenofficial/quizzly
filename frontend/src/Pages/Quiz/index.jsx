import Terms from "../Terms";
import Questions from "../../Components/Question";
import { useState } from "react";
import Result from "../Result";
import { eachQuiz } from "../../Redux/Actions/quiz";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../LoadingPage";
import { decryptEachQuiz } from "../../helpers/decrypt";

export default function Question() {
  // Using React Router dom Use Params for Getting the exact path of the url.
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [eachQuizs, setEachQuizs] = useState([]);

  const { success, loading, quiz, error } = useSelector(
    (state) => state.eachQuiz
  );

  useEffect(() => {
    dispatch(eachQuiz(id));
  }, []);

  useEffect(async () => {
    if (success && !loading) {
      const datas = await decryptEachQuiz(quiz);
      setEachQuizs(() => datas);
    }
    if (error) {
      navigate("/");
    }
  }, [success, error]);

  const steps = {
    1: Terms,
    2: Questions,
    3: Result,
  };

  const [step, setStep] = useState(1);
  const Step = steps[step];
  return loading ? (
    <Loading />
  ) : (
    <Step onNext={() => setStep((prev) => prev + 1)} quiz={eachQuizs} />
  );
}
