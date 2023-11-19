"use client";
import RankSection from "@/components/RankSection";
import { RANK_CLASS_NAME } from "@/constants/rank";
import { useGet3Rank } from "@/hooks/queries/rank/useGetRank";
import React from "react";

const RankClassTitle = RANK_CLASS_NAME;

export default function RankDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  console.log(typeof slug);
  const { data, isLoading } = useGet3Rank({ slug });
  const numSlug = parseInt(slug);
  return (
    <RankSection
      title={RankClassTitle[numSlug]}
      isMore={false}
      data={data || undefined}
      isLoading={isLoading}
    />
  );
}
