import React from "react";

export default function SurveyTitle({ number }: { number: number }) {
  return (
    <div className=" font-Pretendard-SemiBold text-[37px]">Q{number + 1}</div>
  );
}
