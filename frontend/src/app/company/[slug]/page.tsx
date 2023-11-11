"use client";
import React from "react";
import CompanySection from "@/components/CompanySection";
import CommentSection from "@/components/CommentSection";
import { ResultDataContext } from "@/context/ContextProvider";
import useGetCompanyDetail from "@/hooks/queries/useGetCompanyDetail";
import Loading from "@/components/Loading";

export default function CompanyDetailPage({
  params,
}: {
  params: { slug: number };
}) {
  const { data, isLoading } = useGetCompanyDetail(params.slug);
  const value = data;
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ResultDataContext.Provider value={value}>
          <CompanySection />
          <CommentSection />
        </ResultDataContext.Provider>
      )}
    </>
  );
}
