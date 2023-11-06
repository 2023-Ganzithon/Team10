import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SurveyText from "./SurveyText";
import Emotion from "./Emotion.tsx";
import ButtonGrid from "./ButtonGrid";

export default function SurveySection({
  number,
  content,
}: {
  number: number;
  content: string;
}) {
  return (
    <SectionContainer className="py-[40px] flex flex-col items-center">
      <SurveyText number={number} content={content} />
      <Emotion />
      <ButtonGrid number={number} />
    </SectionContainer>
  );
}
