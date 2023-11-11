import LoadingIcon from "@/components/ui/icon/LoadingIcon";
import { ResultDataContext } from "@/context/ContextProvider";
import Image from "next/image";
import React, { useContext } from "react";

export default function CompanyStockPrice() {
  const resultData = useContext(ResultDataContext);

  return (
    <div className=" mt-8 mb-8">
      <div className="text-[14px] text-subtextColor mb-4">주가 그래프</div>
      {resultData ? (
        <Image alt="image" src={resultData.stock} width={500} height={300} />
      ) : (
        <LoadingIcon />
      )}
    </div>
  );
}
