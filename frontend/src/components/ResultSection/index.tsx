import React from "react";
import SectionContainer from "../ui/SectionContainer";

import SectionHeader from "../Header/SectionHeader";
import MyScoreContainer from "./UserScoreContainer";

export default function ResultSection() {
  return (
    <SectionContainer className="px-8 py-8 mb-4 ">
      <SectionHeader title="나의 ESG 등급" />
      <MyScoreContainer />
    </SectionContainer>
  );
}
