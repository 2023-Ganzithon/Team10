"use client";
import React, { useState } from "react";
import SectionContainer from "../ui/SectionContainer";
import DownArrowButton from "../ui/button/DownArrowButton";
import CommentContainer from "./CommentContainer";

export default function CommentSection() {
  const [isShowComment, setIsShowComment] = useState(false);

  const handleOnClick = () => {
    setIsShowComment((prev) => !prev);
  };
  return (
    <SectionContainer className="px-8 py-8 mb-8">
      <div className="flex justify-between items-center">
        <div className=" font-Pretendard-SemiBold ">댓글</div>
        <DownArrowButton handleOnClick={handleOnClick} />
      </div>
      {isShowComment && <CommentContainer />}
    </SectionContainer>
  );
}
