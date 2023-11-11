"use client";

import SectionContainer from "@/components/ui/SectionContainer";
import LoadingIcon from "@/components/ui/icon/LoadingIcon";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function MainUserScore() {
  const [userScore, setUserScore] = useState("?");
  const [company, setCompany] = useState<string | null>("");
  const [companyId, setCompanyId] = useState<string | null>("");

  useEffect(() => {
    const companyImg = localStorage.getItem("recommend");
    setCompany(companyImg);
    const companyId = localStorage.getItem("recommendId");
    setCompanyId(companyId);
    const userScore = localStorage.getItem("total_grade");
    if (userScore) {
      setUserScore(userScore);
    } else {
      setUserScore("?");
    }
  }, []);
  return (
    <SectionContainer className="w-full pl-4 ml-0 mr-0 flex flex-col">
      <div className="flex px-4 py-8 items-center">
        <div className="text-[18px] font-semibold mr-4">나의 등급</div>
        <Link
          href={userScore === "?" ? "/survey/0" : "/result"}
          className="w-[53px] h-[53px] rounded-full bg-buttonBackgroundColor flex justify-center items-center font-Pretendard-ExtraBold  text-brandColor"
        >
          {company ? userScore : <LoadingIcon className="w-8" />}
        </Link>
      </div>
      <div className="flex  pl-4 py-8 items-center border-t-2  border-buttonBackgroundColor">
        <div className="text-[18px] font-semibold mr-4">추천 기업</div>
        <Link
          href={userScore === "?" ? "/survey/0" : `/company/${companyId}`}
          className="w-[53px] h-[53px] rounded-full  flex justify-center items-center font-Pretendard-ExtraBold  text-brandColor"
        >
          {company ? (
            <Image
              src={`${company}`}
              alt="companyLogo"
              width={50}
              height={10}
            />
          ) : (
            <LoadingIcon className="w-8" />
          )}
          {/* <Image src={company || ""} alt="companyLogo" width={50} height={10} /> */}
        </Link>
      </div>
    </SectionContainer>
  );
}
