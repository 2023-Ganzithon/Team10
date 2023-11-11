import Image from "next/image";
import React, { useContext } from "react";
import { ResultDataContext } from "@/context/ContextProvider";

export default function BigCircleImage() {
  const resultData = useContext(ResultDataContext);

  return (
    <div
      className={`relative  rounded-full w-[11rem] h-[11rem]  flex justify-center items-center`}
    >
      <Image
        src={resultData?.company_img ? resultData?.company_img : ""}
        alt="image"
        width={500}
        height={10}
        className="relative w-full object-cover"
      />
    </div>
  );
}
