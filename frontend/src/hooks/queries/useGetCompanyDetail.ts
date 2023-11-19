import { getCompanyDetail } from "@/api/company";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function useGetCompanyDetail(id: number) {
  return useQuery({
    queryKey: ["companyDetail", id],
    queryFn: async () => getCompanyDetail(id),
  });
}
