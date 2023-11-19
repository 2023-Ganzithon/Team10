import React, { FormEvent, useRef } from "react";
import Comment from "./Comment";
import { useParams } from "next/navigation";
import { useGetComments } from "@/hooks/queries/comment/useGetComments";
import useSetComment from "@/hooks/queries/comment/useSetComment";

export default function CommentContainer() {
  const params = useParams();
  const textRef = useRef<HTMLInputElement>(null);
  const { slug } = params;
  const id = Number(slug);
  const { data } = useGetComments({ id });
  const { mutate } = useSetComment({ id });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate({ company: id, text: textRef.current?.value || "" });
    (e.target as HTMLFormElement).reset();
  };
  return (
    <div className="mt-8">
      {data?.map(({ text, id, company, created_at }) => (
        <Comment key={id} content={text} />
      ))}

      <form
        className="flex w-full justify-between mt-4"
        onSubmit={handleSubmit}
      >
        <input
          ref={textRef}
          required
          className=" bg-buttonBackgroundColor w-[298px] pl-4 rounded-[6.93px] h-8 text-[10px]"
          placeholder="댓글을 입력해주세요."
        />
        <button
          type="submit"
          className="h-8 w-10 bg-buttonBackgroundColor text-[10px] rounded-[6.93px]"
        >
          입력
        </button>
      </form>
    </div>
  );
}
