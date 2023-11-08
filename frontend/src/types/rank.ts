export type RankClassType = {
  title: RankClassTitleType;
  linkHref: RankClassLinkHrefType;
}[];

export type RankClassTitleType = "종합" | "환경" | "사회" | "지배구조";

export type RankClassLinkHrefType =
  | "rank/total"
  | "rank/environment"
  | "rank/social"
  | "rank/structure";
