import { SCORE_TITLE } from "@/constants/result";
import React from "react";
import UserScoreBox from "./UserScoreBox";

const ScoreTitle = SCORE_TITLE;

export default function UserScoreContainer() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
      {ScoreTitle.map((title) => (
        <UserScoreBox key={title} title={title} />
      ))}
    </div>
  );
}
