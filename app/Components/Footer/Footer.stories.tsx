import type { Meta, StoryObj } from "@storybook/react";
import { createRemixStub } from "@remix-run/testing";
import FooterComponent from "./Footer";

const Footer = FooterComponent;

const meta: Meta<typeof Footer> = {
  title: "Footer",
  component: Footer,
  decorators: [
    (story) => {
      const remixStub = createRemixStub([
        {
          Component: () => story(),
          path: "/*",
        },
      ]);

      return remixStub({});
    },
  ],
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

const extensiveSiteMap = [
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

export const Default: Story = {
  args: {
    siteMap: extensiveSiteMap,
  },
};
