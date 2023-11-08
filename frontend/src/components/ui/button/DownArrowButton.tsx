import React from "react";
import DownArrowIcon from "../icon/DownArrowIcon";

export default function DownArrowButton({
  handleOnClick,
}: {
  handleOnClick?: () => void;
}) {
  return (
    <button
      onClick={handleOnClick}
      className="flex justify-center items-center w-[2.125rem] h-[2.125rem] rounded-full bg-buttonBackgroundColor "
    >
      <DownArrowIcon />
    </button>
  );
}
