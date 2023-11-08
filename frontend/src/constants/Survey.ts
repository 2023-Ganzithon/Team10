import { SurveyQuestionType, SurveyAnswerType } from "@/types/survey";

export const SURVEY_QUESTION: SurveyQuestionType = [
  "투자할 때 정규직 비율을 고려한다.",
  "투자할 때 사회 법/규제 위반을 고려한다.",
  "투자할 때 인권 리스크 평가(개인 또는 집단에 부정적인 영향을 미칠 수 있는 상황 또는 요인)를 고려한다.",
  "투자할 때 재생에너지 사용 비율을 고려한다.",
  "투자할 때 온실가스 배출량을 고려한다.",
  "투자할 때 폐기물 배출량을 고려한다.",
  "투자할 때 배당 정책 및 이행을 고려한다.",
  "투자할 때 이사회 안건 처리를 고려한다.",
  "투자할 때 이사회 내 esg 안건 상정을 고려한다.",
  "나는 기후 위기와 관련한 정부 차원의 대응에 대해 알고 있다.",
  "나는 투자 시에 기업의 지속가능보고서를 고려한다.",
  "나는 ESG 경영의 개념에 대해 알고 있다.",
  "나는 기업의 ESG 각각의 영역별 대표적인 경영 활동을 설명할 수 있다.",
  "나는 평소 esg투자를 위해 기업의 활동들을 찾아보는 편이다.",
];

export const SURVEY_QUESTION_LENGTH = SURVEY_QUESTION.length;

export const SURVEY_ANSWERS: SurveyAnswerType = [
  { title: "그렇지 않다", score: 1 },
  { title: "보통이다", score: 2 },
  { title: "그렇다", score: 3 },
  { title: "매우 그렇다", score: 4 },
];
