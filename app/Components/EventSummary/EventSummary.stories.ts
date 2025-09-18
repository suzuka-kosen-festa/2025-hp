import type { Meta, StoryObj } from "@storybook/react";
import EventSummary from "./EventSummary";

type T = typeof EventSummary;

const meta: Meta<T> = {
  title: "Components/EventSummary",
  component: EventSummary,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    mainTitle: "Orbit",
    description: "テーマの説明ウンタラカンタラ",
    dateLabel: "開催日時",
    date: "2024年11月2日(土)～11月3日(日)",
    locationLabel: "開催場所",
    location: "鈴鹿工業高等専門学校",
  },
};
