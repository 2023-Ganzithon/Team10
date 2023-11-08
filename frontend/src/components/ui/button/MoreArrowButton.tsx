"use client";
import React from "react";
import ArrowIcon from "../icon/ArrowIcon";
import { useRouter } from "next/navigation";

export default function MoreArrowButton({
  linkHref = "",
}: {
  linkHref?: string;
}) {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(`/${linkHref}`);
  };
  return (
    <button
      onClick={handleOnClick}
      className="flex justify-center items-center w-[2.125rem] h-[2.125rem] rounded-full bg-buttonBackgroundColor "
    >
      <ArrowIcon />
    </button>
  );
}
