import RankSection from "@/components/RankSection";
import React from "react";

const RankClass = [
  { title: "종합", linkHref: "rank/0" },
  { title: "환경", linkHref: "rank/1" },
  { title: "사회", linkHref: "rank/2" },
  { title: "지배구조", linkHref: "rank/3" },
];

export default function page() {
  return (
    <>
      {RankClass.map(({ title, linkHref }) => (
        <RankSection key={title} title={title} linkHref={linkHref}  />
      ))}
    </>
  );
}
