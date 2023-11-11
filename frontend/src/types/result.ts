export type ScoreType = "?" | "A+" | "A" | "B+";

export type ScoreTitleType = "종합" | "환경" | "사회" | "지배구조";

export type ScoreKeyType =
  | "total_grade"
  | "env_grade"
  | "social_grade"
  | "gov_grade";

export type PostDataType = {
  id: number;
  company_name: string;
  company_img: string;
  total_grade: ScoreType;
  social_grade: ScoreType;
  env_grade: ScoreType;
  gov_grade: ScoreType;
  profit: number;
  revenue: number;
  stock: string;
  industry: string;
  division: string;
  user_total_grade: ScoreType;
};