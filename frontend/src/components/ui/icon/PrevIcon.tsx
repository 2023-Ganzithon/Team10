import React from "react";

export default function PrevIcon({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`${className} flex justify-center items-center w-[28px] h-[28px]`}
    >
      <svg
        width="19"
        height="24"
        viewBox="0 0 19 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 2L3 16L17 30"
          stroke="#B1B8C0"
          strokeWidth="3.23077"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
