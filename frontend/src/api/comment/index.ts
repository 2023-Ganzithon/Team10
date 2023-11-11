import { CommentType } from "./../../types/comment";
export const getCompanyComments = async (id: number) => {
  return fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/companies/${id}/comments/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(async (res) => {
      const data = await res.json();
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const setCompanyComment = async ({ text, company }: CommentType) => {
  return fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/companies/comments/create/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, company }),
    }
  )
    .then(async (res) => {
      const data = await res.json();
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
