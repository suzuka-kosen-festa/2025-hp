import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

type T = typeof Button;

const meta: Meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
