// イベントデータの型定義
export interface EventData {
  id: string
  title: string
  datetime: string
  stage: string
  description: string
  type: "stage" | "live" | "mystery"
  image?: string
}

// イベントタイプの設定
export interface EventTypeConfig {
  label: string
  color: string
  anchor: string
}

// バザーデータの型定義
export interface BazaarData {
  id: string
  teamNumber: number
  teamName: string
  bazaarName: string
  description: string
  image: string
}
