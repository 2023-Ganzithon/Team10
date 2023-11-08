import React from "react";
import SectionContainer from "../ui/SectionContainer";
import BigCircleImage from "../ui/CircleImage/BigCircleImage";
import InfoTitle from "./InfoTitle";
import CompanyScoreSection from "./CompanyScoreSection";

export default function CompanySection() {
  return (
    <SectionContainer className="flex items-center flex-col justify-center py-8 mb-6">
      <BigCircleImage />
      <InfoTitle title={"title"} subtitle={"subtitle"} />
      <CompanyScoreSection />
    </SectionContainer>
  );
}
