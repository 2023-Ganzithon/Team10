export type SurveyQuestionType = string[];

type SurveyAnswerTitleType =
  | "매우 그렇다"
  | "그렇다"
  | "보통이다"
  | "그렇지 않다";

export type SurveyAnswerType = {
  title: SurveyAnswerTitleType;
  score: number;
}[];

export type SurveyResultType = {
  social_total: number;
  env_total: number;
  gov_total: number;
  total: number;
};
