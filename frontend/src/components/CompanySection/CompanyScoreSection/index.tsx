import ScoreContainer from "@/components/ResultSection/UserScoreContainer";
import SectionContainer from "@/components/ui/SectionContainer";
import React from "react";
import CompanyScoreContainer from "./CompanyScoreContainer";
import CompanyInfoContainer from "./CompanyInfoContainer";

export default function CompanyScoreSection() {
  return (
    <SectionContainer className="shadow  py-6 px-3 ">
      <CompanyScoreContainer />
      <CompanyInfoContainer />
    </SectionContainer>
  );
}
