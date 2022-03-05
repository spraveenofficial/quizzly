import { useState } from "react";
import Profile from "../Profile";
import AddQuiz from "../CreateQuiz";
export default function ProfilePage() {
  const steps = {
    1: Profile,
    2: AddQuiz,
  };

  const [step, setStep] = useState(1);
  const Step = steps[step];
  return <Step onNext={() => setStep((prev) => prev + 1)} />;
}
