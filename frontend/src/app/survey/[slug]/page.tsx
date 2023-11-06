import SurveySection from "@/components/SurveySection";
import { SurveyQuestion } from "@/constants/Survey";
import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  const questionNumber = parseInt(params.slug);
  const Survey = SurveyQuestion;
  return (
    <SurveySection
      number={questionNumber}
      content={SurveyQuestion[questionNumber]}
    />
  );
}
