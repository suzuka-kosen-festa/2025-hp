import type { Meta, StoryObj } from "@storybook/react";

import Footer, { type FooterComponentProps } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    siteMap: {
      description: "サイトマップのセクションとリンクの配列",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

// 多くのセクションを持つサイトマップ
const extensiveSiteMap: FooterComponentProps["siteMap"] = [
  {
    sectionTitle: "ホーム",
    links: [
      { title: "トップページ", href: "/" },
      { title: "お知らせ", href: "/news" },
      { title: "イベント情報", href: "/events" },
      { title: "アクセス", href: "/access" },
    ],
  },
  {
    sectionTitle: "高専祭について",
    links: [
      { title: "高専祭とは", href: "/about" },
      { title: "実行委員会", href: "/committee" },
      { title: "歴史", href: "/history" },
      { title: "理念・目標", href: "/philosophy" },
    ],
  },
  {
    sectionTitle: "参加・出展",
    links: [
      { title: "一般参加", href: "/participation" },
      { title: "出展申込", href: "/exhibition" },
      { title: "スケジュール", href: "/schedule" },
      { title: "会場マップ", href: "/map" },
      { title: "注意事項", href: "/notes" },
    ],
  },
  {
    sectionTitle: "サポート",
    links: [
      { title: "よくある質問", href: "/faq" },
      { title: "お問い合わせ", href: "/contact" },
      { title: "プライバシーポリシー", href: "/privacy" },
    ],
  },
  {
    sectionTitle: "アーカイブ",
    links: [
      { title: "過去の高専祭", href: "/archive" },
      { title: "写真ギャラリー", href: "/gallery" },
      { title: "動画アーカイブ", href: "/videos" },
    ],
  },
];

export const Extensive: Story = {
  args: {
    siteMap: extensiveSiteMap,
  },
  parameters: {
    docs: {
      description: {
        story: "多くのセクションとリンクを持つサイトマップの例。ページが増えても自動的にレイアウトが調整されます。",
      },
    },
  },
};
