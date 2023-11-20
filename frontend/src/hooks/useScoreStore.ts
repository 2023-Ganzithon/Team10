import { SURVEY_QUESTION_LENGTH } from "@/constants/surveys";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SurveyQuestionLength = SURVEY_QUESTION_LENGTH;

export default function useScoreStore(
  score: number,
  number: number,
  setPicked: React.Dispatch<React.SetStateAction<number>>
) {
  const router = useRouter();

  const onClickButton = () => {
    localStorage.setItem(number.toString(), score.toString());
    setPicked(score);
    if (number + 1 === SurveyQuestionLength) {
      // router.push(`/result`);
    } else {
      router.push(`/survey/${number + 1}`);
    }
  };

  useEffect(() => {
    const localStoragePicked = localStorage.getItem(number.toString());
    if (localStoragePicked === score.toString()) {
      setPicked(score);
    }
  }, [number, setPicked, score]);

  return [onClickButton];
}
