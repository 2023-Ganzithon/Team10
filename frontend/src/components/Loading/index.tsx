"use client";
import React, { useEffect, useState } from "react";
import SectionContainer from "../ui/SectionContainer";
import LoadingSubtitle from "./subtitle";
import LoadingIcon from "../ui/icon/LoadingIcon";
import LoadingTitle from "./title";

export default function Loading() {
  return (
    <SectionContainer className="flex flex-col h-[90%] items-center justify-center">
      <LoadingTitle title="잠시만 기다려주세요" />
      <LoadingSubtitle subtitle="미쓱이 사용자의 유형을 분석중이에요" />
      <LoadingIcon className="w-8 h-8" />
    </SectionContainer>
  );
}
