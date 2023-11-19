import SectionContainer from "@/components/ui/SectionContainer";
import React from "react";
import CompanyScoreContainer from "./CompanyScoreContainer";
import CompanyInfoContainer from "./CompanyInfoContainer";
import CompanyStockPrice from "./CompanyStockPrice";

export default function CompanyScoreSection() {
  return (
    <SectionContainer className="shadow  py-6 px-3 ">
      <CompanyScoreContainer />
      <CompanyStockPrice />
      <CompanyInfoContainer />
    </SectionContainer>
  );
}
