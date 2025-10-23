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

// ライブイベントの時間順ソート関数
function sortLiveEventsByTime(events: import("./types").EventData[]): import("./types").EventData[] {
  return events.sort((a, b) => {
    // まずステージタイプでソート（ライブステージ → サブステージ）
    const stageOrderA = a.stage === "ライブステージ" ? 1 : 2;
    const stageOrderB = b.stage === "ライブステージ" ? 1 : 2;

    if (stageOrderA !== stageOrderB) {
      return stageOrderA - stageOrderB;
    }

    // 同じステージタイプ内で日付順ソート
    function getSortOrder(datetime: string): number {
      // 11月1日
      if (datetime.includes("11月1日")) {
        return 1;
      }
      // 中夜祭は11月1日と11月2日の間
      if (datetime.includes("中夜祭")) {
        return 2;
      }
      // 11月2日
      if (datetime.includes("11月2日")) {
        return 3;
      }
      // その他の場合は最後
      return 4;
    }

    const orderA = getSortOrder(a.datetime);
    const orderB = getSortOrder(b.datetime);

    // 同じ日付内での時間順ソート
    if (orderA === orderB) {
      // 時間を抽出して比較
      const timeA = a.datetime.match(/(\d{1,2}):(\d{2})/);
      const timeB = b.datetime.match(/(\d{1,2}):(\d{2})/);

      if (timeA && timeB) {
        const minutesA = Number.parseInt(timeA[1]) * 60 + Number.parseInt(timeA[2]);
        const minutesB = Number.parseInt(timeB[1]) * 60 + Number.parseInt(timeB[2]);
        return minutesA - minutesB;
      }
    }

    return orderA - orderB;
  });
}

const liveStageEvents: import("./types").EventData[] = sortLiveEventsByTime(
  (liveStageData as Array<Omit<import("./types").EventData, "type"> & { type: string }>)
    .map(e => ({ ...e, type: "live" as const })),
);

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
