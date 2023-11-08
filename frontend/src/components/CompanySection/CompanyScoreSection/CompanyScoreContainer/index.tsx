import React from "react";
import CompanyScoreBox from "./CompanyScoreBox";
import { SCORE_TITLE } from "@/constants/result";

const Scoretitle = SCORE_TITLE;

export default function CompanyScoreContainer() {
  return (
    <div className=" grid grid-cols-4 border-b-[1px] pb-4 border-buttonBackgroundColor">
      {Scoretitle.map((title, index) => (
        <CompanyScoreBox key={title} title={title} index={index} />
      ))}
    </div>
  );
}
