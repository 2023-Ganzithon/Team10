import React from "react";
import SectionContainer from "../ui/SectionContainer";

import SectionHeader from "../Header/SectionHeader";
import ScoreContainer from "./ScoreContainer";

export default function ResultSection() {
  return (
    <SectionContainer className="px-8 py-8 ">
      <SectionHeader title="나의 ESG 등급" />
      <ScoreContainer />
    </SectionContainer>
  );
}
