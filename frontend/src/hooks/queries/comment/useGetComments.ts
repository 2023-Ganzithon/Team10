import { CommentsTypeArray } from "./../../../types/comment";
import { getCompanyComments } from "@/api/comment";
import { useQuery } from "@tanstack/react-query";

export function useGetComments({ id }: { id: number }) {
  return useQuery<CommentsTypeArray>({
    queryKey: ["getCompanyComments", id],
    queryFn: () => {
      return getCompanyComments(id);
    },
  });
}
