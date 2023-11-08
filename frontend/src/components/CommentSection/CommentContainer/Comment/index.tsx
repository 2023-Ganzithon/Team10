import React from "react";
import UserIcon from "@/components/ui/icon/UserIcon";

export default function Comment() {
  return (
    <div className="py-3 flex items-center border-b-[1px] border-buttonBackgroundColor">
      <div className=" ml-1 rounded-full w-9 h-9 bg-buttonBackgroundColor flex justify-center items-center">
        <UserIcon className=" rounded-full" />
      </div>
      <div className="ml-6 text-sm text-commentColor">안녕하세요</div>
    </div>
  );
}
