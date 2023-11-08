import { RankClassTitleType } from "@/types/rank";
import { RankClassType } from "@/types/rank";

export const RANK_CLASS: RankClassType = [
  { title: "종합", linkHref: "rank/total" },
  { title: "환경", linkHref: "rank/environment" },
  { title: "사회", linkHref: "rank/social" },
  { title: "지배구조", linkHref: "rank/structure" },
];

export const RANK_CLASS_NAME: RankClassTitleType[] = [
  "종합",
  "환경",
  "사회",
  "지배구조",
];
