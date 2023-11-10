"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function MoreButton({ linkHref }: { linkHref: string }) {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(`/${linkHref}`);
  };
  return (
    <button
      className=" bg-buttonBackgroundColor text-subtextColor text-[10px] rounded-[7px] w-16 h-6"
      onClick={handleOnClick}
    >
      더보기
    </button>
  );
}
