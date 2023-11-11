import React, { useContext } from "react";
import CompanyScoreBox from "./CompanyScoreBox";
import { ResultDataContext } from "@/context/ContextProvider";

export default function CompanyScoreContainer() {
  const resultData = useContext(ResultDataContext);
  return (
    <div className=" grid grid-cols-4 border-b-[1px] pb-4 border-buttonBackgroundColor">
      <CompanyScoreBox title={"환경"} index={0} score={resultData?.env_grade} />
      <CompanyScoreBox title={"사회"} score={resultData?.social_grade} />
      <CompanyScoreBox title={"지배구조"} score={resultData?.gov_grade} />
      <CompanyScoreBox title={"종합"} score={resultData?.total_grade} />
    </div>
  );
}
