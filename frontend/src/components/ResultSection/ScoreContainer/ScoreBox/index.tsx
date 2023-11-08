import React from "react";

export default function ScoreBox({
  title,
  score = "?",
}: {
  title: string;
  score?: string;
}) {
  return (
    <div className=" bg-buttonBackgroundColor rounded-[6.95px] w-[10.25rem] h-[10.22081rem]">
      <div className=" text-subtextColor w-full text-center text-base mt-4 font-Pretendard-SemiBold">
        {title}
      </div>
      <div className=" font-Pretendard-ExtraBold mt-4 text-center text-brandColor  text-[3.375rem]">
        {score}
      </div>
    </div>
  );
}
