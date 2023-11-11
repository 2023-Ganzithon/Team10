import { CommentsTypeArray } from "./../../../types/comment";
import { setCompanyComment } from "@/api/comment";
import { CommentType } from "@/types/comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useSetComment({ id }: { id: number }) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ text, company }: CommentType) =>
      setCompanyComment({ text, company }),
    onMutate: async (newPost) => {
      await queryClient.cancelQueries({ queryKey: ["getCompanyComments", id] });

      const previousBoardPosts = queryClient.getQueryData(["boardPosts"]);

      queryClient.setQueryData(
        ["getCompanyComments", id],
        (old: CommentsTypeArray) => [newPost, ...old]
      );

      return { previousBoardPosts };
    },
    onError: (err, newPost, context) => {
      queryClient.setQueryData(
        ["getCompanyComments", id],
        context?.previousBoardPosts
      );
    },
  });
}
