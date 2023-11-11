import { ScoreKeyType, ScoreTitleType } from "@/types/result";

export const SCORE_TITLE: { title: ScoreTitleType; score: ScoreKeyType }[] = [
  { title: "환경", score: "env_grade" },
  { title: "사회", score: "social_grade" },
  { title: "지배구조", score: "gov_grade" },
  { title: "종합", score: "total_grade" },
];
