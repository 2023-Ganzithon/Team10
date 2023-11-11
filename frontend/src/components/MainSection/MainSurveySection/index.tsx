import React from "react";
import MainUserScore from "./MainUserScore";
import MainSurveyButton from "./MainSurveyButton";

export default function MainSurveySection() {
  return (
    <div className="px-4 w-full flex justify-center items-center">
      <div className="gap-4 grid grid-cols-2 my-4">
        <MainUserScore />
        <MainSurveyButton />
      </div>
    </div>
  );
}
