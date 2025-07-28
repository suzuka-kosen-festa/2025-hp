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
    teamName: "チーム名",
    bazaarName: "バザー名",
    description: "説明文",
  },
};

export default meta;
