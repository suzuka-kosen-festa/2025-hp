export const ja = {
  sponsorCard: {
    image: "イメージ",
    sponsorName: "チーム名",
    description: "説明",
    phone: "電話番号",
    imageAlt: (sponsorName: string) => `${sponsorName}のイメージ`,
    name: (sponsorName: string) => `${sponsorName}`,
  },
  footer: {
    copyright: "©2025 鈴鹿工業高等専門学校 高専祭実行委員会",
  },
  bazaarCard: {
    image: "イメージ",
    teamName: "チーム名",
    bazaarName: "バザー名",
    description: "説明",
    imageAlt: (bazaarName: string) => `${bazaarName}のイメージ`,
  },
  eventCard: {
    eventName: "イベント名",
    description: "説明",
    linkName: "リンク名",
    linkUrl: "リンクURL",
    color: "カラー",
    name: (eventName: string) => `${eventName}`,
  },
  dummy: "hoge fuga piyo ダミー",
};
