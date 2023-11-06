import React from "react";

export default function SurveyTitle({ number }: { number: number }) {
  return <div className=" font-semibold text-[37px]">Q{number + 1}</div>;
}
