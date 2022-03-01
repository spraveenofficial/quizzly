import Terms from "../Terms";
import Questions from "../../Components/Question";
import { useState } from "react";
import Result from "../Result";
export default function Question() {
  const steps = {
    1: Terms,
    2: Questions,
    3: Result,
  };
  const [step, setStep] = useState(1);
  const Step = steps[step];
  return <Step onNext={() => setStep((prev) => prev + 1)} />;
}
