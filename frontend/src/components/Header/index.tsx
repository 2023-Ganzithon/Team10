import React from "react";
import { Sidebar } from "../Sidebar";
import MainLogo from "../ui/MainLogo";
import LeafIcon from "../ui/icon/LeafIcon";
import PrevIcon from "../ui/icon/PrevIcon";

export default function Header() {
  return (
    <header className="flex relative w-full items-end justify-between py-4 px-8">
      <PrevIcon />
      <MainLogo className="w-16 ml-6" />
      <div className="w-fit flex">
        <LeafIcon />
        <Sidebar />
      </div>
    </header>
  );
}
