import RankSection from "@/components/RankSection";
import { RANK_CLASS_NAME } from "@/constants/rank";
import React from "react";

const RankClassTitle = RANK_CLASS_NAME;

export default async function Page({ params }: { params: { slug: number } }) {
  const slug = params.slug;

  return <RankSection title={RankClassTitle[slug]} isMore={false} />;
}
