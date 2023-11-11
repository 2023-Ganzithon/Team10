import React from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../Header/SectionHeader";
import RankItem from "./RankItem";
import { Company3RankType } from "@/types/rank";
import LoadingIcon from "../ui/icon/LoadingIcon";

export default function RankSection({
  title,
  linkHref,
  isMore = true,
  data,
  isLoading,
}: {
  title: string;
  linkHref?: string;
  isMore?: boolean;
  data?: Company3RankType;
  isLoading?: boolean;
}) {
  return (
    <SectionContainer className="px-8 pt-6 mb-4">
      <SectionHeader title={title} linkHref={linkHref} isMore={isMore} />
      {isLoading ? (
        <div className="flex justify-center">
          <LoadingIcon className="w-20 h-20" />
        </div>
      ) : (
        data?.map(({ company_name, industry, company_img }, index) => (
          <>
            <RankItem
              key={company_name}
              title={company_name}
              industry={industry}
              image={company_img}
              index={index}
            />
          </>
        ))
      )}
    </SectionContainer>
  );
}
