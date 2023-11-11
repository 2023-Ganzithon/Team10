import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

export default function useGetUserScore() {
  const [userScore, setUserScore] = useState("?");
  const [company, setCompany] = useState<string | null>("");
  const [companyId, setCompanyId] = useState<string | null>("");
  const { isLoading } = useQuery({
    queryKey: ["getUserScore"],
    queryFn: () => {
      useEffect(() => {
        const companyImg = localStorage.getItem("recommend");
        setCompany(companyImg);
        const companyId = localStorage.getItem("recommendId");
        setCompanyId(companyId);
        const userScore = localStorage.getItem("total_grade");
        if (userScore) {
          setUserScore(userScore);
        } else {
          setUserScore("?");
        }
      }, []);
    },
  });

  return { company, companyId, userScore, isLoading };
}
