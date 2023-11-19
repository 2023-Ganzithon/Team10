"use client";

import SectionContainer from "@/components/ui/SectionContainer";
import React from "react";
import research from "/public/images/research2.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SurveyStartPage() {
  const router = useRouter();

  const handleOnclick = () => {
    localStorage.clear();
    router.push("/survey/0");
  };
  return (
    <SectionContainer className="relative px-8 h-[90%] flex flex-col justify-center items-center">
      <Image src={research} alt="image" className="w-20 h-20" />
      <div className="text-[28px] font-Pretendard-SemiBold">
        유형탐구 시작하기
      </div>
      <div className="text-[11px] text-subtextColor ">
        ESG 유형탐구를 지금 시작해보세요!
      </div>
      <motion.div
        onClick={handleOnclick}
        className=" flex justify-center items-center h-10  text-[17px] mt-16 w-full text-white  bg-brandColor rounded-[7px]"
        whileHover={{ scale: 1.1 }}
      >
        시작하기
      </motion.div>

      <div className="absolute bottom-8 text-[14px]  text-subtextColor">
        *시작하면 이전 데이터는 사라집니다.
      </div>
    </SectionContainer>
  );
}
