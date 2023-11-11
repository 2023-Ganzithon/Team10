"use client";
import RankSection from "@/components/RankSection";
import { RANK_CLASS_NAME } from "@/constants/rank";
import { useGet3Rank } from "@/hooks/queries/rank/useGetRank";
import React from "react";

const RankClassTitle = RANK_CLASS_NAME;

export default function RankDetailPage({
  params,
}: {
  params: { slug: number };
}) {
  const slug = params.slug;
  const { data, isLoading } = useGet3Rank({ slug });
  return (
    <RankSection
      title={RankClassTitle[slug]}
      isMore={false}
      data={data || undefined}
      isLoading={isLoading}
    />
  );
}
