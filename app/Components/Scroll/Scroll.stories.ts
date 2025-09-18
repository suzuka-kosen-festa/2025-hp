import type { Meta, StoryObj } from "@storybook/react";

import Scroll from "./Scroll";

type T = typeof Scroll;

const meta: Meta = {
  title: "Scroll",
  component: Scroll,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
