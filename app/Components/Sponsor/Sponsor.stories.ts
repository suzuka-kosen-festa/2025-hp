import type { Meta, StoryObj } from "@storybook/react";
import Sponsor from "./Sponsor";

const meta: Meta<typeof Sponsor> = {
  title: "Sponsor",
  component: Sponsor,
  parameters: {
    layout: "fullscreen",
  },

};

export default meta;
type Story = StoryObj<typeof Sponsor>;

// 最小限のデモデータ
const minimalSponsors = [
  {
    name: "テストスポンサー大",
    image: "public/logo-dark.png",
    size: "large" as const,
  },
  {
    name: "テストスポンサー中",
    image: "",
    size: "medium" as const,
  },
  {
    name: "テストスポンサー小",
    image: "",
    size: "small" as const,
  },
];

// isValidImage関数テスト用データ
const imageValidationTestData = [
  {
    name: "有効なURL",
    image: "public/logo-dark.png",
    size: "medium" as const,
  },
  {
    name: "空文字",
    image: "",
    size: "medium" as const,
  },
  {
    name: "null文字列",
    image: "null",
    size: "medium" as const,
  },
  {
    name: "undefined文字列",
    image: "undefined",
    size: "medium" as const,
  },
  {
    name: "スペースのみ",
    image: "   ",
    size: "medium" as const,
  },
];

// sortByJapaneseName関数テスト用データ
const sortTestSponsors = [
  {
    name: "ナニヌネノ株式会社",
    image: "",
    size: "medium" as const,
  },
  {
    name: "かいうえお株式会社",
    image: "",
    size: "medium" as const,
  },
  {
    name: "3D Innovation",
    image: "",
    size: "medium" as const,
  },
  {
    name: "アキクケコ株式会社",
    image: "",
    size: "medium" as const,
  },
  {
    name: "B&K株式会社",
    image: "",
    size: "medium" as const,
  },
  {
    name: "10年システム",
    image: "",
    size: "medium" as const,
  },
  {
    name: "2年システム",
    image: "",
    size: "medium" as const,
  },
  {
    name: "あきくけこ株式会社",
    image: "",
    size: "medium" as const,
  },
];

// 基本的なUIストーリー
export const Default: Story = {
  args: {
    sponsors: minimalSponsors,
  },
};

// isValidImage関数のロジックテストストーリー
export const ImageValidationTest: Story = {
  args: {
    sponsors: imageValidationTestData,
  },
  parameters: {
    docs: {
      description: {
        story: "isValidImage関数のロジックテスト: 有効なURL、空文字、null/undefined文字列、スペースのみのパターンを確認",
      },
    },
  },
};

// sortByJapaneseName関数のロジックテストストーリー
export const JapaneseSortTest: Story = {
  args: {
    sponsors: sortTestSponsors,
  },
  parameters: {
    docs: {
      description: {
        story: "sortByJapaneseName関数のロジックテスト: ひらがな、カタカナ、英数字、記号の混在でのソート順序を確認。期待順序: 2年システム < 3D Innovation < 10年システム < B&K株式会社 < あいうえお株式会社 < カキクケコ株式会社 < ナニヌネノ株式会社",
      },
    },
  },
};

// サイズ別表示テスト
export const SizeVariations: Story = {
  args: {
    sponsors: [
      { name: "Largeスポンサー", image: "", size: "large" as const },
      { name: "Mediumスポンサー", image: "", size: "medium" as const },
      { name: "Smallスポンサー", image: "", size: "small" as const },
    ],
  },
};
