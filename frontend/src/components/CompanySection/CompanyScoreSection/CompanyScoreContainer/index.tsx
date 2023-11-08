import React from "react";
import CompanyScoreBox from "./CompanyScoreBox";
import { SCORE_TITLE } from "@/constants/result";

const Scoretitle = SCORE_TITLE;

export default function CompanyScoreContainer() {
  const companyScoreBox = (title: string, index: number) => {
    if (index === 0) {
      const className = "border-none";
      return (
        <CompanyScoreBox key={title} title={title} className={className} />
      );
    } else {
      return <CompanyScoreBox key={title} title={title} />;
    }
  };

  return (
    <div className=" grid grid-cols-4 border-b-[1px] pb-4 border-buttonBackgroundColor">
      {Scoretitle.map((title, index) => companyScoreBox(title, index))}
    </div>
  );
}
