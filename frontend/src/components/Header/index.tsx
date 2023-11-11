"use client";
import React from "react";
import { Sidebar } from "../Sidebar";
import MainLogo from "../ui/MainLogo";
import LeafIcon from "../ui/icon/LeafIcon";
import PrevIcon from "../ui/icon/PrevIcon";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const onClick = () => router.back();
  const handleOnclick = () => {
    router.push("/info");
  };

  if (pathname === "/") {
    return (
      <header className="flex relative w-full items-end justify-between py-4 px-8">
        <PrevIcon onClick={onClick} />
        <MainLogo className="w-16 ml-6" />
        <div className="w-fit flex">
          <LeafIcon onClick={handleOnclick} className=" cursor-pointer" />
          <Sidebar />
        </div>
      </header>
    );
  } else
    return (
      <header className="flex relative w-full items-end justify-between pt-4 pb-4 px-8">
        <PrevIcon onClick={onClick} />
        <div className="w-fit flex">
          <LeafIcon onClick={handleOnclick} className=" cursor-pointer" />
          <Sidebar />
        </div>
      </header>
    );
}
