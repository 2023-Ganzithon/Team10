import React, { useContext } from "react";
import SectionContainer from "../ui/SectionContainer";
import BigCircleImage from "../ui/CircleImage/BigCircleImage";
import InfoTitle from "./InfoTitle";
import CompanyScoreSection from "./CompanyScoreSection";
import { ResultDataContext } from "@/context/ContextProvider";

export default function CompanySection() {
  const resultData = useContext(ResultDataContext);
  return (
    <SectionContainer className="flex items-center flex-col justify-center py-8 mb-6">
      <BigCircleImage />
      <InfoTitle title={resultData?.company_name}  />
      <CompanyScoreSection />
    </SectionContainer>
  );
}
