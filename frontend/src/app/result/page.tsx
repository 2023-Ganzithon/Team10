"use client";
import CompanySection from "@/components/CompanySection";
import Loading from "@/components/Loading";
import ResultSection from "@/components/ResultSection";
import { ResultDataContext } from "@/context/ContextProvider";
import useGetSurveyResult from "@/hooks/queries/useGetSurveyResult";
import React, { useEffect } from "react";

export default function Resultpage() {
  const { data, mutate } = useGetSurveyResult();
  useEffect(() => {
    const social_total = parseInt(localStorage.getItem("사회") || "0");
    const env_total = parseInt(localStorage.getItem("환경") || "0");
    const gov_total = parseInt(localStorage.getItem("지배구조") || "0");
    const total = parseInt(localStorage.getItem("total") || "0");
    mutate({ social_total, env_total, gov_total, total });
  }, [mutate]);

  const value = data;
  if (typeof window !== "undefined") {
    localStorage.setItem("recommend", data?.company_img || "");
    localStorage.setItem("recommendId", JSON.stringify(data?.id) || "");
    localStorage.setItem("total_grade", data?.total_grade || "");
  }
  return (
    <>
      {data ? (
        <ResultDataContext.Provider value={value}>
          <ResultSection />
          <CompanySection />
        </ResultDataContext.Provider>
      ) : (
        <Loading />
      )}
    </>
  );
}
