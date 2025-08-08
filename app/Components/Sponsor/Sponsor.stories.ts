import type { Meta, StoryObj } from "@storybook/react";
import Sponsor from "./Sponsor";

const meta: Meta<typeof Sponsor> = {
  title: "Sponsor",
  component: Sponsor,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sponsor>;

// デモデータ
const demoSponsors = [
  {
    name: "株式会社アイウエオ",
    image: "/logo-dark.png",
    size: "large" as const,
  },
  {
    name: "株式会社カキクケコ",
    image: "/logo.svg",
    size: "large" as const,
  },
  {
    name: "株式会社サシスセソ",
    image: "/logo-dark.png",
    size: "medium" as const,
  },
  {
    name: "株式会社タチツテト",
    image: "/logo.svg",
    size: "medium" as const,
  },
  {
    name: "株式会社ナニヌネノ",
    image: "/logo-dark.png",
    size: "small" as const,
  },
  {
    name: "株式会社ハヒフヘホ",
    image: "/logo.svg",
    size: "small" as const,
  },
  {
    name: "株式会社マミムメモ",
    image: "",
    size: "large" as const,
  },
  {
    name: "株式会社ヤユヨ",
    image: "",
    size: "medium" as const,
  },
  {
    name: "株式会社ラリルレロ",
    image: "",
    size: "small" as const,
  },
  {
    name: "株式会社ワワヲ",
    image: "",
    size: "large" as const,
  },
  {
    name: "株式会社ザシスセソ",
    image: "",
    size: "medium" as const,
  },
  {
    name: "株式会社ワワヲ",
    image: "",
    size: "small" as const,
  },
  {
    name: "株式会社ワワヲ",
    image: "/kosen-logo.png",
    size: "large" as const,
  },
  {
    name: "株式会社ワワヲ",
    image: "/kosen-logo.png",
    size: "medium" as const,
  },
  {
    name: "株式会社ワワヲ",
    image: "/kosen-logo.png",
    size: "small" as const,
  },
];

export const Default: Story = {
  args: {
    sponsors: demoSponsors,
  },
};
