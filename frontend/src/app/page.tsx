"use client";
import RankSection from "@/components/RankSection";
import MainInfoSection from "@/components/MainSection/MainInfoSection";
import MainSurveySection from "@/components/MainSection/MainSurveySection";
import { useGetTotal3Rank } from "@/hooks/queries/rank/useGetRank";

export default function Home() {
  const { data, isLoading } = useGetTotal3Rank();
  return (
    <>
      <MainInfoSection />
      <MainSurveySection />
      <RankSection
        isLoading={isLoading}
        title="ESG 기업 순위"
        linkHref="rank"
        data={data || undefined}
      />
    </>
  );
}
