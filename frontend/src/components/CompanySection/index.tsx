import React from "react";
import SectionContainer from "../ui/SectionContainer";
import CircleImage from "../ui/CircleImage";
import InfoTitle from "./InfoTitle";
import CompanyScoreSection from "./CompanyScoreSection";

export default function CompanySection() {
  return (
    <SectionContainer className="flex items-center flex-col justify-center py-8">
      <CircleImage />
      <InfoTitle title={"title"} subtitle={"subtitle"} />
      <CompanyScoreSection />
    </SectionContainer>
  );
}
