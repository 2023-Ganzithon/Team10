import React from "react";

export default function CompanyInfoBox({
  title,
  content,
}: {
  title: string;
  content?: string | number;
}) {
  return (
    <div className=" bg-buttonBackgroundColor flex flex-col items-center w-[173px] h-[146px] rounded-[6.95px] ">
      <div className=" text-subtextColor text-[16px] mt-[19px] font-Pretendard-SemiBold">
        {title}
      </div>
      <div className=" text-black font-Pretendard-SemiBold text-[21px] mt-[24px]">
        {content}
        {title === "매출액" ? " 억원" : title === "영업이익" ? " 억원" : ""}
      </div>
    </div>
  );
}
