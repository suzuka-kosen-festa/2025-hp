import type { Meta, StoryObj } from "@storybook/react";

import StageEventCard from "./StageEventCard";

type T = typeof StageEventCard;

const meta = {
  title: "Components/StageEventCard",
  component: StageEventCard,
} satisfies Meta<T>;

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    title: "ステージイベント",
    datetime: "2025年11月2日(土) 10:00 - 11:00",
    stage: "メインステージ",
    description:
      "ステージイベントについての情報。",
  },
};
