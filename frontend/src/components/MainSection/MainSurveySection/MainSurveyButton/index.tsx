"use client";
import React, { useState } from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import Link from "next/link";
import Image from "next/image";
import research from "/public/images/research.png";

export default function MainSurveyButton() {
  const [userScore, setUserScore] = useState("");
  return (
    <SectionContainer className="w-full px-2 mx-0 ml-0 mr-0 ">
      <div className="text-[18px] px-4 mt-8">유형 탐구</div>
      {userScore === "" ? (
        <div className="mx-4 mt-1 text-[10px] text-subtextColor">
          아직 유형 탐구를 시작하지 않으셨네요. 지금 시작해보세요!
        </div>
      ) : (
        <div className="mx-4 mt-1  text-subtextColor text-[10px]">
          유형 탐색을 다시 해보실래요?
        </div>
      )}
      <div className="flex justify-center mt-8">
        <div className=" rounded-full w-20 h-20 bg-buttonBackgroundColor flex justify-center items-center">
          <Link href={"/survey/0"} className="">
            <Image src={research} alt="survey" />
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
