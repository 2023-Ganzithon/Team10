import { getTotal3Rank } from "./../../../api/rank/index";
import { getCompanyDetail } from "@/api/company";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function useGetTotal3Rank() {
  return useQuery({
    queryKey: ["getTotal3Rank"],
    queryFn: async () => getTotal3Rank(),
  });
}
