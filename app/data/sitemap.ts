import type { SiteMapSection } from "@/Components/Footer/Footer";

export const sitemapData: SiteMapSection[] = [
  {
    sectionTitle: "メイン",
    links: [
      {
        title: "ホーム",
        href: "/",
      },
      {
        title: "イベントステージ",
        href: "/events",
      },
      {
        title: "バザー、学科展示",
        href: "/bazaar",
      },
    ],
  },
  {
    sectionTitle: "その他",
    links: [
      {
        title: "プライバシーポリシー",
        href: "/privacy",
      },
    ],
  },
];
