import SurveySection from "@/components/SurveySection";
import { SURVEY_QUESTION } from "@/constants/Survey";
import React from "react";

const Survey = SURVEY_QUESTION;

export default function page({ params }: { params: { slug: string } }) {
  const questionNumber = parseInt(params.slug);
  return (
    <SurveySection number={questionNumber} content={Survey[questionNumber]} />
  );
}
