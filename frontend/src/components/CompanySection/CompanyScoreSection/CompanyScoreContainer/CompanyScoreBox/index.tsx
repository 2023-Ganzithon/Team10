import React from "react";

export default function CompanyScoreBox({
  title,
  score,
  index = 1,
  className,
}: {
  title: string;
  score?: string;
  index?: number;
  className?: string;
}) {
  return (
    <div
      className={`${className} flex justify-center flex-col items-center  gap-2 border-buttonBackgroundColor ${
        index === 0 ? "border-none " : "border-l-[1px]"
      }`}
    >
      <div className=" text-subtextColor text-sm font-Pretendard-SemiBold">
        {title}
      </div>
      <div className=" font-Pretendard-SemiBold text-[28px]">{score}</div>
    </div>
  );
}
