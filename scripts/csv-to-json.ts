// Note: Papa is not used; keep import removed for cleanliness
import type { BazaarData } from "@/data/bazaarData";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

// 学科展示データの型定義
interface DepartmentExhibitionData {
  id: string
  department: string
  title: string
  description: string
}

// app/dataの型定義に合わせたインターフェース
interface EventData {
  id: string
  title: string
  datetime: string
  stage: string
  description: string
  type: "stage" | "live" | "mystery"
}

interface SponsorItem {
  name: string
  image: string
  size: "large" | "medium" | "small"
}

// 学科展示CSVの生データ型
interface DepartmentExhibitionCsvData {
  department: string
  title: string
  discription: string // 元CSVのヘッダー表記に合わせる
}

// バザーCSVの生データ型
interface BazaarCsvData {
  submissionDate: string
  organizationNumber: string
  teamName: string
  bazaarName: string
  type: string
  image: string
  description: string
}

// CSVの生データ型
interface LiveStageCsvData {
  bandName: string
  message: string
}

interface SponsorCsvData {
  name: string
}

// CSVをJSONに変換する関数
function csvToJson<T>(csvPath: string, headers: string[]): T[] {
  try {
    const csvContent = readFileSync(csvPath, "utf-8");

    // 空行を削除し、ヘッダー行をスキップ
    const lines = csvContent.split("\n").filter(line => line.trim() !== "");

    // ヘッダー行を探す（最初の非空行）
    let headerIndex = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(",")) {
        headerIndex = i;
        break;
      }
    }

    const dataLines = lines.slice(headerIndex + 1);

    const result: T[] = [];

    for (const line of dataLines) {
      // CSVの各行をパース（カンマ区切り）
      const values = parseCsvLine(line);

      if (values.length >= headers.length) {
        const obj = {} as T;
        headers.forEach((header, index) => {
          (obj as any)[header] = values[index]?.trim() || "";
        });

        // 空のオブジェクトとヘッダー行を除外
        const hasData = Object.values(obj as any).some(value => value !== "");
        const isHeader = Object.values(obj as any).some(value =>
          typeof value === "string" && (value === "バンド名" || value === "ひとこと" || value === "name"),
        );
        if (hasData && !isHeader) {
          result.push(obj);
        }
      }
    }

    return result;
  }
  catch {
    console.error(`CSVファイルの読み込みエラー (${csvPath}):`);
    return [];
  }
}

// CSV行をパースする関数（カンマ区切り、引用符対応）
function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === "\"") {
      inQuotes = !inQuotes;
    }
    else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    }
    else {
      current += char;
    }
  }

  result.push(current);
  return result;
}

// CSVデータをEventData形式に変換する関数
function convertToEventData(csvData: LiveStageCsvData[]): EventData[] {
  return csvData.map((item, index) => ({
    id: `live-${index + 1}`,
    title: item.bandName,
    datetime: "時間未定", // 実際の時間がCSVに含まれていない場合
    stage: "ライブステージ",
    description: item.message,
    type: "live" as const,
  }));
}

// CSVデータをSponsorItem形式に変換する関数
function convertToSponsorItem(csvData: SponsorCsvData[]): SponsorItem[] {
  return csvData.map(item => ({
    name: item.name,
    image: "", // 画像パスは後で設定
    size: "medium" as const, // デフォルトサイズ
  }));
}

// CSVデータをDepartmentExhibitionData形式に変換する関数
export function convertToDepartmentExhibitions(csvData: DepartmentExhibitionCsvData[]): DepartmentExhibitionData[] {
  return csvData.map((item, index) => ({
    id: `dept-${index + 1}`,
    department: item.department,
    title: item.title,
    description: item.discription,
  }));
}

// CSVデータをBazaarData形式に変換する関数
export function convertToBazaarData(csvData: BazaarCsvData[]): BazaarData[] {
  return csvData.map((item, index) => ({
    id: `bazaar-${index + 1}`,
    teamNumber: Number.parseInt(item.organizationNumber, 10),
    teamName: item.teamName,
    bazaarName: item.bazaarName,
    description: item.description,
    image: item.image,
  }));
}

// メイン処理
function main() {
  const dataDir = join(process.cwd(), "data");
  const contentsDir = join(process.cwd(), "contents");

  // contentsディレクトリを作成
  try {
    mkdirSync(contentsDir, { recursive: true });
    console.log("contentsディレクトリを作成しました");
  }
  catch {
    console.log("contentsディレクトリは既に存在します");
  }

  // live_stage.csvをJSONに変換
  const liveStagePath = join(dataDir, "live_stage.csv");
  const liveStageCsvData = csvToJson<LiveStageCsvData>(liveStagePath, ["bandName", "message"]);
  const liveStageData = convertToEventData(liveStageCsvData);
  const liveStageJsonPath = join(contentsDir, "live_stage.json");

  writeFileSync(liveStageJsonPath, JSON.stringify(liveStageData, null, 2), "utf-8");
  console.log(`live_stage.jsonを保存しました: ${liveStageData.length}件のデータ`);

  // sponsor.csvをJSONに変換
  const sponsorPath = join(dataDir, "sponsor.csv");
  const sponsorCsvData = csvToJson<SponsorCsvData>(sponsorPath, ["name"]);
  const sponsorData = convertToSponsorItem(sponsorCsvData);
  const sponsorJsonPath = join(contentsDir, "sponsor.json");

  writeFileSync(sponsorJsonPath, JSON.stringify(sponsorData, null, 2), "utf-8");
  console.log(`sponsor.jsonを保存しました: ${sponsorData.length}件のデータ`);

  // department_exhibition.csvをJSONに変換
  const departmentExhibitionPath = join(dataDir, "department_exhibition.csv");
  const departmentCsvData = csvToJson<DepartmentExhibitionCsvData>(departmentExhibitionPath, ["department", "title", "discription"]);
  const departmentData = convertToDepartmentExhibitions(departmentCsvData);
  const departmentJsonPath = join(contentsDir, "department_exhibition.json");

  writeFileSync(departmentJsonPath, JSON.stringify(departmentData, null, 2), "utf-8");
  console.log(`department_exhibition.jsonを保存しました: ${departmentData.length}件のデータ`);

  // bazaar.csvをJSONに変換
  const bazaarPath = join(dataDir, "bazaar.csv");
  const bazaarCsvData = csvToJson<BazaarCsvData>(bazaarPath, [
    "submissionDate",
    "organizationNumber",
    "teamName",
    "bazaarName",
    "type",
    "image",
    "description",
  ]);
  const bazaarData = convertToBazaarData(bazaarCsvData);
  const bazaarJsonPath = join(contentsDir, "bazaar.json");

  writeFileSync(bazaarJsonPath, JSON.stringify(bazaarData, null, 2), "utf-8");
  console.log(`bazaar.jsonを保存しました: ${bazaarData.length}件のデータ`);

  console.log("CSVからJSONへの変換が完了しました！");
}

// スクリプトが直接実行された場合のみ実行
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
