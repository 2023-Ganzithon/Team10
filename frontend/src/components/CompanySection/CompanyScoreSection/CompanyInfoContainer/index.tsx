import React, { useContext } from "react";
import CompanyInfoBox from "./CompanyInfoBox";
import { ResultDataContext } from "@/context/ContextProvider";

export default function CompanyInfoContainer() {
  const resultData = useContext(ResultDataContext);
  return (
    <div className="grid grid-cols-2 grid-rows-2 mt-4 gap-4">
      <CompanyInfoBox title={"산업"} content={resultData?.industry} />
      <CompanyInfoBox title={"기업구분"} content={resultData?.division} />
      <CompanyInfoBox title={"매출액"} content={resultData?.revenue} />
      <CompanyInfoBox title={"영업이익"} content={resultData?.profit} />
    </div>
  );
}
