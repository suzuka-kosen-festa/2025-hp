import type { EventData } from "./types";

// ライブステージのデータ
export const liveEvents: EventData[] = [
  {
    id: "live-1",
    title: "軽音楽部ライブ",
    datetime: "11月1日 13:00-14:00",
    stage: "ライブステージ",
    description: "軽音楽部による生演奏。ロックからポップスまで幅広いジャンルの楽曲をお楽しみください。",
    type: "live",
  },
  {
    id: "live-2",
    title: "吹奏楽部コンサート",
    datetime: "11月1日 16:00-17:00",
    stage: "ライブステージ",
    description: "吹奏楽部によるコンサート。クラシックから現代音楽まで美しい音色をお楽しみください。",
    type: "live",
  },
  {
    id: "live-3",
    title: "アカペラサークル発表",
    datetime: "11月2日 10:00-11:00",
    stage: "ライブステージ",
    description: "アカペラサークルによる美しいハーモニーの発表会。",
    type: "live",
  },
  {
    id: "live-4",
    title: "DJ部パフォーマンス",
    datetime: "11月2日 15:00-16:00",
    stage: "ライブステージ",
    description: "DJ部によるエレクトロニックミュージックのパフォーマンス。",
    type: "live",
  },
];
