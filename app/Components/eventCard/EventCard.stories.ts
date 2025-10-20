import type { Meta, StoryObj } from "@storybook/react";
import { createElement } from "react";
import { MemoryRouter } from "react-router";
import EventCard from "./EventCard";

type T = typeof EventCard;

const meta: Meta<T> = {
  title: "EventCard",
  component: EventCard,
  decorators: [
    (story) => {
      return createElement(MemoryRouter, { initialEntries: ["/"] }, story());
    },
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    eventName: {
      control: "text",
      description: "チーム名",
    },
    linkName: {
      control: "text",
      description: "リンク名",
    },
    description: {
      control: "text",
      description: "バザーの説明（10-50文字）",
    },
    color: {
      control: "color",
      description: "カラー",
    },
  },
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    eventName: "イベント名",
    description: "説明文",
    linkName: "リンク名",
    color: "#FF6B6B",
  },
};

export default meta;
