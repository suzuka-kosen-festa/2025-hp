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
  privacy: {
    title: "プライバシーポリシー",
    gaDescription: "当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。",
    gaLinkDescription: "この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は",
  },
  dummy: "hoge fuga piyo ダミー",
};
