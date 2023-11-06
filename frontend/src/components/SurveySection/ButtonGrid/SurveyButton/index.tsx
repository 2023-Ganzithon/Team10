import useScoreStore from "@/hooks/useScoreStore";
import React from "react";

export default function SurveyButton({
  title,
  score,
  number,
  setPicked,
  picked,
}: {
  title: string;
  score: number;
  number: number;
  setPicked: React.Dispatch<React.SetStateAction<number>>;
  picked: number;
}) {
  const [onClickButton] = useScoreStore(score, number, setPicked);

  return (
    <button
      onClick={onClickButton}
      className={`w-[140px] h-[88px] flex justify-center items-center  rounded-[7px] text-base ${
        picked == score
          ? "bg-brandColor text-white"
          : "bg-buttonBackgroundColor"
      }`}
    >
      {title}
    </button>
  );
}
