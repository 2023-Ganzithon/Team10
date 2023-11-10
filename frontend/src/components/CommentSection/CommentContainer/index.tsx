import React from "react";
import Comment from "./Comment";

export default function CommentContainer() {
  return (
    <div className="mt-8">
      <Comment />
      <Comment />
      <Comment />
      <form className="flex w-full justify-between mt-4">
        <input
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
