// 共通の型定義をインポート
import type { EventTypeConfig } from "./types";

import liveStageData from "@/../contents/live_stage/live_stage.json";
import stageEvents from "@/../contents/stage_event.json";
import { mysteryEvents } from "./mystery";
// 各イベントタイプのデータをインポート

export type { EventData, EventTypeConfig } from "./types";

// JSON の 'type' は string 扱いになるため、リテラル型に正規化してから結合する
const stageEventsNormalized: import("./types").EventData[] = (
  stageEvents as Array<Omit<import("./types").EventData, "type"> & { type: string }>
).map(e => ({ ...e, type: "stage" as const }));

const liveStageEvents: import("./types").EventData[] = (
  liveStageData as Array<Omit<import("./types").EventData, "type"> & { type: string }>
).map(e => ({ ...e, type: "live" as const }));

// 全イベントデータを統合
export const eventsData = [
  ...stageEventsNormalized,
  ...liveStageEvents,
  ...mysteryEvents,
];

// イベントタイプの設定
export const eventTypes: Record<string, EventTypeConfig> = {
  stage: {
    label: "ステージイベント",
    color: "#FD3D21",
    anchor: "stage",
  },
  live: {
    label: "ライブステージ",
    color: "#0B3D91",
    anchor: "live",
  },
  mystery: {
    label: "謎解き",
    color: "#FFA500",
    anchor: "mystery",
  },
};
