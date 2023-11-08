import SmallCircleImage from "@/components/ui/CircleImage/SmallCircleImage";
import MoreButton from "@/components/ui/button/MoreButton";
import React from "react";
import example from "/public/images/example.png";

export default function RankItem({
  className,
  index,
}: {
  className?: string;
  index?: number;
}) {
  return (
    <div
      className={`flex ml-3 items-center justify-between py-3  ${
        index === 0 ? "border-none" : "border-t-[1px]"
      } border-buttonBackgroundColor ${className}`}
    >
      <div className="flex items-center ml-2">
        <SmallCircleImage rank={2} image={example} />
        <div className="ml-4 justify-center">
          <div className="text-[10px] text-subtextColor">제조업</div>
          <div className="text-[19px]">삼성전자</div>
        </div>
      </div>
      <MoreButton linkHref={`company/1`} />
    </div>
  );
}
