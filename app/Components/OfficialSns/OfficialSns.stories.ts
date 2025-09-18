import type { Meta, StoryObj } from "@storybook/react";
import OfficialSns from "./OfficialSns";

const meta = {
  title: "Components/OfficialSns",
  component: OfficialSns,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof OfficialSns>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomLinks: Story = {
  args: {
    xUrl: "https://x.com/",
    instagramUrl: "https://instagram.com/",
    facebookUrl: "https://facebook.com/",
  },
};
