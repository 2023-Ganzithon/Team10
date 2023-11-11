import React, { useContext } from "react";
import UserScoreBox from "./UserScoreBox";
import { ResultDataContext } from "@/context/ContextProvider";


export default function UserScoreContainer() {
  const resultData = useContext(ResultDataContext);

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
      <UserScoreBox title={"환경"} score={resultData?.env_grade} />
      <UserScoreBox title={"사회"} score={resultData?.social_grade} />
      <UserScoreBox title={"지배구조"} score={resultData?.gov_grade} />
      <UserScoreBox title={"종합"} score={resultData?.total_grade} />
    </div>
  );
}
