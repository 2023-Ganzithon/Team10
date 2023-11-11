import SmallCircleImage from "@/components/ui/CircleImage/SmallCircleImage";
import MoreButton from "@/components/ui/button/MoreButton";
import React from "react";
import example from "/public/images/example.png";

export default function RankItem({
  id,
  className,
  index,
  title,
  industry,
  image,
}: {
  id: number;
  className?: string;
  index: number;
  title: string;
  industry: string;
  image: string;
}) {
  return (
    <div
      className={`flex ml-3 items-center justify-between py-3  ${
        index === 0 ? "border-none" : "border-t-[1px]"
      } border-buttonBackgroundColor ${className}`}
    >
      <div className="flex items-center ml-2">
        <SmallCircleImage rank={index + 1} image={image} />
        <div className="ml-4 justify-center">
          <div className="text-[10px] text-subtextColor">{industry}</div>
          <div className="text-[19px]">{title}</div>
        </div>
      </div>
      <MoreButton linkHref={`company/${id}`} />
    </div>
  );
}
