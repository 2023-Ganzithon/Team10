import React from "react";
import CompanyInfoBox from "./CompanyInfoBox";
import { COMPANY_INFO_TITLE } from "@/constants/company";

const CompanyInfoTitle = COMPANY_INFO_TITLE;

export default function CompanyInfoContainer() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 mt-4 gap-4">
      {CompanyInfoTitle.map((title) => (
        <CompanyInfoBox key={title} title={title} content="202020억원" />
      ))}
    </div>
  );
}
