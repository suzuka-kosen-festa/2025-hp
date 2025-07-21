import type { Meta, StoryObj } from "@storybook/react";
import BazaarCard from "./BazaarCard";

type T = typeof BazaarCard;

const meta: Meta<T> = {
  title: "BazaarCard",
  component: BazaarCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    image: {
      control: "text",
      description: "バザーの画像URL",
    },
    teamName: {
      control: "text",
      description: "チーム名",
    },
    bazaarName: {
      control: "text",
      description: "バザー名",
    },
    description: {
      control: "text",
      description: "バザーの説明（10-50文字）",
    },
  },

} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {

  args: {

    image: "/public/images/not-found.png",

    teamName: "サンプルチーム",

    bazaarName: "ロボコンプロジェクト",

    description: "手作りの美味しいクレープをお楽しみください。フルーツやクリームがたっぷり！",

  },

};

export const LongDescription: Story = {

  args: {

    image: "https://via.placeholder.com/320x200/e74c3c/ffffff?text=Long+Text",

    teamName: "テスト用チーム",

    bazaarName: "超長い名前のバザー",

    description: "これは非常に長い説明文のテストです。50文字を超える場合は自動的に切り取られて省略記号が表示されるはずです。",

  },

};

export const ShortDescription: Story = {

  args: {

    image: "https://via.placeholder.com/320x200/27ae60/ffffff?text=Short+Text",

    teamName: "短文チーム",

    bazaarName: "シンプルカフェ",

    description: "美味しいコーヒー",

  },

};

export default meta;
