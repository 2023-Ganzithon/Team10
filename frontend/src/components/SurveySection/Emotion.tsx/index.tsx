import Image from "next/image";
import React from "react";
import example from "/public/images/example.jpg";
export default function Emotion() {
  return (
    <Image
      src={example}
      alt="example"
      className=" rounded-full object-cover w-[184px] h-[184px] mt-4"
    ></Image>
  );
}
