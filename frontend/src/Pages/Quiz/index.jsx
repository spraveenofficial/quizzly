import Terms from "../Terms";
import Questions from "../../Components/Question";
import { useState } from "react";
export default function Question() {
  const steps = {
    1: Terms,
    2: Questions,
  };
  const [step, setStep] = useState(1);
  const Step = steps[step];
  return <Step onNext={() => setStep(2)} />;
}
