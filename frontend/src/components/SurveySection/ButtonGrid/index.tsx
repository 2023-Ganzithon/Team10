"use client";
import React, { useState } from "react";
import SurveyButton from "./SurveyButton";
import { SURVEY_ANSWERS } from "@/constants/surveys";

const Answers = SURVEY_ANSWERS;

export default function ButtonGrid({ number }: { number: number }) {
  const [picked, setPicked] = useState(0);

  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-4 mt-4">
      {Answers.map(({ title, score }) => (
        <SurveyButton
          key={title}
          title={title}
          score={score}
          number={number}
          picked={picked}
          setPicked={setPicked}
        />
      ))}
    </div>
  );
}
