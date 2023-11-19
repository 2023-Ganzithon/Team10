import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useGetUserScore() {
  const [userScore, setUserScore] = useState("?");
  const [company, setCompany] = useState<string | null>("");
  const [companyId, setCompanyId] = useState<string | null>("");
  const { isLoading } = useQuery({
    queryKey: ["getUserScore"],
    queryFn: () => {
      const localCompanyImg = localStorage.getItem("recommend");
      setCompany(localCompanyImg);
      const localCompanyId = localStorage.getItem("recommendId");
      setCompanyId(localCompanyId);
      const localUserScore = localStorage.getItem("total_grade");
      if (localUserScore) {
        setUserScore(localUserScore);
      } else {
        setUserScore("?");
      }
      return company;
    },
  });

  return { company, companyId, userScore, isLoading };
}
