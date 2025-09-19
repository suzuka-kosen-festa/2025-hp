import type { Meta, StoryObj } from "@storybook/react";
import SponsorCard from "./SponsorCard";

type T = typeof SponsorCard;

const meta: Meta<T> = {
  title: "SponsorCard",
  component: SponsorCard,
  parameters: {
    layout: "centered",
    viewport: {
      // デフォルトをスマホ相当で確認できるように
      defaultViewport: "responsive",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    image: {
      control: "text",
      description: "スポンサー紹介画像URL",
    },
    sponsorName: {
      control: "text",
      description: "スポンサー名",
    },
    description: {
      control: "text",
      description: "スポンサーの説明（100文字程度）",
    },
    phone: {
      control: "text",
      description: "電話番号",
    },
  },
};

type Story = StoryObj<T>;

const defaultArgs = {
  image: "https://placehold.jp/800x400.png",
  sponsorName: "テストスポンサー",
  description:
    "スポンサーの説明がここに入ります。スポンサーの説明がここに入ります。スポンサーの説明がここに入ります。スポンサーの説明がここに入ります。",
  phone: "xxx-xxxx-xxxx",
};

export const Default: Story = {
  args: defaultArgs,
  parameters: {
    viewport: {
      defaultViewport: "desktop", // Storybook viewportアドオンで lg を確認
    },
  },
};


export default meta;