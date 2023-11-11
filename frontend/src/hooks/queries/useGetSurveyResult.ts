import { setSurvey } from "@/api/survey";
import { SurveyResultType } from "@/types/survey";
import { useMutation } from "@tanstack/react-query";

export default function useGetSurveyResult() {
  return useMutation({
    mutationFn: async ({
      social_total,
      env_total,
      gov_total,
      total,
    }: SurveyResultType) =>
      setSurvey({ social_total, env_total, gov_total, total }),
  });
}
