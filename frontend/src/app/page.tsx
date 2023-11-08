import RankSection from "@/components/RankSection";
import SectionContainer from "../components/ui/SectionContainer";

export default function Home() {
  return (
    <>
      <SectionContainer className=" p-4">안녕하세요</SectionContainer>
      <RankSection title="ESG 기업 순위" linkHref="rank" />
    </>
  );
}
