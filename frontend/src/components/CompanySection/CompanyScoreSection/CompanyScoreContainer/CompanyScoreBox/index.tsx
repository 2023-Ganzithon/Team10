import React from "react";

export default function CompanyScoreBox({
  title = "환경",
  score = "A+",
  className,
}: {
  title: string;
  score?: string;
  className?: string;
}) {
  return (
    <div
      className={`${className} flex justify-center flex-col items-center border-l-[1px] gap-2 border-buttonBackgroundColor`}
    >
      <div className=" text-subtextColor text-sm">{title}</div>
      <div className=" font-Pretendard-SemiBold text-[28px]">{score}</div>
    </div>
  );
}
