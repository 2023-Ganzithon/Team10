import React from "react";
import Image from "next/image";

export default function SmallCircleImage({
  rank,
  image,
}: {
  rank: number;
  image: string;
}) {
  return (
    <div
      className={`relative  w-[55px] h-[55px]  flex justify-center items-center`}
    >
      <div className="absolute font-Pretendard-ExtraBold flex text-white  justify-center items-center text-[12px] w-[22px] h-[22px] bg-brandColor rounded-full top-0 -left-1 ">
        {rank}
      </div>
      <Image
        src={image}
        alt={"image"}
        width={50}
        height={10}
        className=" object-cover rounded-full"
      />
    </div>
  );
}
