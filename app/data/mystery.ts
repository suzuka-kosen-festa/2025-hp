import type { EventData } from "./types";

// 謎解きイベントのデータ
export const mysteryEvents: EventData[] = [
  {
    id: "mystery-1",
    title: "高専謎解きツアー",
    datetime: "11月1日 10:00-16:00",
    stage: "校舎内各所",
    description: "高専内に隠された謎を解いて、最終的な答えを見つけ出そう！参加者には記念品をプレゼント。",
    type: "mystery",
  },
  {
    id: "mystery-2",
    title: "プログラミング謎解き",
    datetime: "11月1日 11:00-15:00",
    stage: "情報工学科棟",
    description: "プログラミングの知識を使って謎を解く特別な謎解きイベント。初心者でも楽しめます。",
    type: "mystery",
  },
  {
    id: "mystery-3",
    title: "科学実験謎解き",
    datetime: "11月2日 9:00-15:00",
    stage: "実験室",
    description: "科学実験を通して謎を解く体験型謎解き。実験の結果から答えを導き出そう。",
    type: "mystery",
  },
];
