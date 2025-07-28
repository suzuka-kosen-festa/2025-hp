import type { Meta, StoryObj } from "@storybook/react";

import Sponsor from "./Sponsor";

type T = typeof Sponsor;

const meta: Meta = {
  title: "Sponsor",
  component: Sponsor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
