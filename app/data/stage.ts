import type { EventData } from "./types";

// ステージイベントのデータ
export const stageEvents: EventData[] = [
  {
    id: "stage-1",
    title: "オープニングセレモニー",
    datetime: "11月1日 9:00-9:30",
    stage: "メインステージ",
    description: "高専祭2025の開会を告げるセレモニー。学生代表による挨拶とテーマ発表があります。",
    type: "stage",
  },
  {
    id: "stage-2",
    title: "学生発表会",
    datetime: "11月1日 10:00-12:00",
    stage: "メインステージ",
    description: "各学科の研究成果やプロジェクトの発表会。学生たちの創意工夫が詰まった発表をお楽しみください。",
    type: "stage",
  },
  {
    id: "stage-3",
    title: "クラス対抗クイズ大会",
    datetime: "11月1日 14:00-16:00",
    stage: "メインステージ",
    description: "クラス対抗のクイズ大会。知識とチームワークで優勝を目指します。",
    type: "stage",
  },
  {
    id: "stage-4",
    title: "閉会式",
    datetime: "11月2日 16:30-17:00",
    stage: "メインステージ",
    description: "2日間の高専祭を締めくくる閉会式。来場者の皆様に感謝を込めて。",
    type: "stage",
  },
];
