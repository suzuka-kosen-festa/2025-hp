import type { Meta, StoryObj } from "@storybook/react";

import GoogleMap from "./GoogleMap";

type T = typeof GoogleMap;

const meta: Meta = {
  title: "Components/GoogleMap",
  component: GoogleMap,
  parameters: {
    screenshot: {
      skip: true,
    },
  },

  tags: ["autodocs"],
  argTypes: {
    address: {
      control: { type: "text" },
      description: "表示する住所",
    },
    width: {
      control: { type: "text" },
      description: "幅 (px, %, など)",
    },
    height: {
      control: { type: "number" },
      description: "高さ(px)",
    },
  },
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    address: "三重県鈴鹿市白子町高専1-1 鈴鹿工業高等専門学校",
    height: 360,
  },
};

export const Tall: Story = {
  args: {
    address: "東京駅",
    height: 560,
  },
};

export const CustomWidth: Story = {
  args: {
    address: "京都駅",
    width: 600,
    height: 360,
  },
};

export default meta;
