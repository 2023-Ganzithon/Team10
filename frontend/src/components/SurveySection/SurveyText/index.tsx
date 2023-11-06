import React from "react";
import SurveyTitle from "./title";
import SurveyContent from "./content";

export default function SurveyText({
  number,
  content,
}: {
  number: number;
  content: string;
}) {
  return (
    <div className="flex justify-center items-center flex-col px-8">
      <SurveyTitle number={number} />
      <SurveyContent content={content} />
    </div>
  );
}
