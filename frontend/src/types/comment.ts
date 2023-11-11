export interface CommentsType extends CommentType {
  id: number;
  created_at: string;
}

export type CommentsTypeArray = CommentsType[];

export type CommentType = { text: string; company: number };
