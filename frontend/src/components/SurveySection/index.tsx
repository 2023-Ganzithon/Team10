import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SurveyText from "./SurveyText";
import SurveyEmotion from "./SurveyEmotion.tsx";

export default function SurveySection({
  number,
  content,
}: {
  number: number;
  content: string;
}) {
  return (
    <SectionContainer className="py-[125px]">
      <SurveyText number={number} content={content} />
      <SurveyEmotion />
    </SectionContainer>
  );
}
