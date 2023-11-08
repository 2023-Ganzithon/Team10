import { SCORE_TITLE } from "@/constants/result";
import React from "react";
import ScoreBox from "./ScoreBox";

const ScoreTitle = SCORE_TITLE;

export default function ScoreContainer() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
      {ScoreTitle.map((title) => (
        <ScoreBox key={title} title={title}  />
      ))}
    </div>
  );
}
