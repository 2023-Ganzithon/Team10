import React from "react";

export default function CompanyInfoBox({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className=" bg-buttonBackgroundColor flex flex-col items-center w-[173px] h-[146px] rounded-[6.95px] ">
      <div className=" text-subtextColor text-[16px] mt-[19px]">{title}</div>
      <div className=" text-black font-Pretendard-SemiBold text-[21px] mt-[24px]">
        {content}
      </div>
    </div>
  );
}
