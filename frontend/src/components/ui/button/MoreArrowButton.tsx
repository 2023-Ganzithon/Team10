"use client";
import React from "react";
import ArrowIcon from "../icon/ArrowIcon";
import Link from "next/link";

export default function MoreArrowButton({
  linkHref = "",
}: {
  linkHref?: string;
}) {
  return (
    <Link
      href={`/${linkHref}`}
      className="flex justify-center items-center w-[2.125rem] h-[2.125rem] rounded-full bg-buttonBackgroundColor "
    >
      <ArrowIcon />
    </Link>
  );
}
