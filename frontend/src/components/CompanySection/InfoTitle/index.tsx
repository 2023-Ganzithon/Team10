import React from "react";

export default function InfoTitle({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="flex justify-center items-center flex-col mb-4">
      <h1 className=" text-[1.8125rem] font-Pretendard-SemiBold">{title}</h1>
      <h2 className="text-sm text-subtextColor"> {subtitle}</h2>
    </div>
  );
}
