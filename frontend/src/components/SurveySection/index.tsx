import React from "react";
import { SURVEY_QUESTION_LENGTH } from "@/constants/Survey";
import SectionContainer from "../ui/SectionContainer";
import SurveyText from "./SurveyText";
import Emotion from "./Emotion.tsx";
import ButtonGrid from "./ButtonGrid";
import SubmitButton from "./SubmitButton";

const SurveyQuestionLength = SURVEY_QUESTION_LENGTH;

export default function SurveySection({
  number,
  content,
}: {
  number: number;
  content: string;
}) {
  return (
    <SectionContainer className="px-8 py-[40px] flex flex-col items-center">
      <SurveyText number={number} content={content} />
      <Emotion number={number} />
      <ButtonGrid number={number} />
      {number + 1 === SurveyQuestionLength ? <SubmitButton /> : <></>}
    </SectionContainer>
  );
}
