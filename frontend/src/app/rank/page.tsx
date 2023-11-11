"use client";
import RankSection from "@/components/RankSection";
import {
  useGetEnv3Rank,
  useGetGov3Rank,
  useGetSocial3Rank,
  useGetTotal3Rank,
} from "@/hooks/queries/rank/useGetRank";
import React from "react";

export default function RankPage() {
  const { data: total3RankData, isLoading: total3RankLoading } =
    useGetTotal3Rank();
  const { data: Env3RankData, isLoading: Env3RankLoading } = useGetEnv3Rank();
  const { data: gov3RankData, isLoading: gov3RankLoading } = useGetGov3Rank();
  const { data: social3RankData, isLoading: social3RankLoading } =
    useGetSocial3Rank();

  console.log(total3RankData, Env3RankData, gov3RankData, social3RankData);
  const RankClass = [
    {
      title: "종합",
      linkHref: "rank/0",
      data: total3RankData,
      isLoading: total3RankLoading,
    },
    {
      title: "환경",
      linkHref: "rank/1",
      data: Env3RankData,
      isLoading: Env3RankLoading,
    },
    {
      title: "사회",
      linkHref: "rank/2",
      data: social3RankData,
      isLoading: social3RankLoading,
    },
    {
      title: "지배구조",
      linkHref: "rank/3",
      data: gov3RankData,
      isLoading: gov3RankLoading,
    },
  ];
  return (
    <>
      {RankClass.map(({ title, linkHref, data, isLoading }) => (
        <RankSection
          key={title}
          title={title}
          linkHref={linkHref}
          data={data || undefined}
          isLoading={isLoading}
        />
      ))}
    </>
  );
}
