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
    gaDescription: "当サイトでは、Googleが提供するサービス（Googleアナリティクスを含む）を利用しています。これにより、お客様が当サイトを閲覧する際に、お使いのブラウザからGoogleに対して特定の情報（閲覧したページのURLやIPアドレスなど）が自動的に送信されます。",
    gaLinkDescription: "Googleによるデータの収集および処理の仕組みについての詳細は、以下のリンクからご確認いただけます。",
    gaLinkText: "Google のプライバシーポリシーと規約",
  },
  dummy: "hoge fuga piyo ダミー",
};
