// 共通の型定義をインポート
import type { EventTypeConfig } from "./types";

import { liveEvents } from "./live";
import { mysteryEvents } from "./mystery";
// 各イベントタイプのデータをインポート
import { stageEvents } from "./stage";

export type { EventData, EventTypeConfig } from "./types";

// 全イベントデータを統合
export const eventsData = [
  ...stageEvents,
  ...liveEvents,
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
