"use client";

import SectionContainer from "@/components/ui/SectionContainer";
import LoadingIcon from "@/components/ui/icon/LoadingIcon";
import useGetUserScore from "@/hooks/queries/mainUserScore/useGetUserScore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MainUserScore() {
  const { company, companyId, userScore, isLoading } = useGetUserScore();
  return (
    <SectionContainer className="w-full pl-4 ml-0 mr-0 flex flex-col">
      <div className="flex px-4 py-8 items-center">
        <div className="text-[13px] md:text-[18px] font-semibold mr-4">
          나의 등급
        </div>
        <Link
          href={userScore === "?" ? "/survey" : "/result"}
          className=" w-[53px] h-[53px] rounded-full  flex justify-center items-center font-Pretendard-ExtraBold  text-brandColor"
        >
          {isLoading ? (
            <LoadingIcon className="w-8" />
          ) : company ? (
            userScore
          ) : (
            "?"
          )}
        </Link>
      </div>
      <div className="flex  pl-4 py-8 items-center border-t-2  border-buttonBackgroundColor">
        <div className=" font-semibold mr-4 text-[13px] md:text-[18px]">
          추천 기업
        </div>
        <Link
          href={userScore === "?" ? "/survey" : `/company/${companyId}`}
          className="w-[53px] h-[53px] rounded-full  flex justify-center items-center font-Pretendard-ExtraBold  text-brandColor"
        >
          {isLoading ? (
            <LoadingIcon className="w-8" />
          ) : company ? (
            <Image
              src={`${company}`}
              alt="companyLogo"
              width={50}
              height={10}
            />
          ) : (
            <div className="w-[53px] h-[53px] rounded-full flex justify-center items-center  ">
              {userScore}
            </div>
          )}
        </Link>
      </div>
    </SectionContainer>
  );
}
