import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../Header/SectionHeader";
import RankItem from "./RankItem";

export default function RankSection({
  title,
  linkHref,
  isMore = true,
  data,
}: {
  title: string;
  linkHref?: string;
  isMore?: boolean;
  data?: [];
}) {
  return (
    <SectionContainer className="px-8 pt-6 mb-4">
      <SectionHeader title={title} linkHref={linkHref} isMore={isMore} />

      {/* {data &&
        data.map(() => (
          <>
            <RankItem />
          </>
        ))} */}
      <RankItem />
      <RankItem />
      <RankItem />
      <RankItem />
    </SectionContainer>
  );
}
