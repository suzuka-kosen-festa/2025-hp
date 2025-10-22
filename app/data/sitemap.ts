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
        title: "イベント",
        href: "/events",
      },
      {
        title: "バザー",
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
