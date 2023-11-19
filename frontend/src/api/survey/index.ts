import { PostDataType } from "@/types/result";
import { SurveyResultType } from "./../../types/survey";
import React from "react";

export const setSurvey = async ({
  social_total,
  env_total,
  gov_total,
  total,
}: SurveyResultType) => {
  const bodyData = {
    social_total,
    env_total,
    gov_total,
    total,
  };
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/companies/survey/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(bodyData),
  })
    .then(async (res) => {
      const data: PostDataType = await res.json();
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};


// company detail

