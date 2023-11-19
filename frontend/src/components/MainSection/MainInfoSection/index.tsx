import React from "react";
import SectionContainer from "../../ui/SectionContainer";
import SectionHeader from "../../Header/SectionHeader";

export default function MainInfoSection() {
  return (
    <SectionContainer className="px-8 py-8">
      <SectionHeader title="ESG란?" linkHref="info" />
      <div className="mt-8 w-[20px] h-1 bg-brandColor mb-4" />
      <div className=" text-[15px]">
        ESG는 환경, 사회, 재무구조 특면에서 중장기 기업가치에 <br />직 ·
        간접적으로 영향을 미치는 비재무적 성과지표입니다.
      </div>
    </SectionContainer>
  );
}
