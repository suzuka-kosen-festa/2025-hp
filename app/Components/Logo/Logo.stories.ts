import type { Meta, StoryObj } from "@storybook/react";

import Logo from "./Logo";

type T = typeof Logo;

const meta: Meta = {
  title: "Logo",
  component: Logo,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    length: {
      control: { type: "number" },
      description: "Logo length of a side",
    },
    simpleLogo: {
      control: { type: "boolean" },
      description: "Choose between full logo or simple logo",
    },
    withBlackBackground: {
      control: { type: "boolean" },
      description: "Add black background to the logo",
    },
    withStars: {
      control: { type: "boolean" },
      description: "Add stars background layer",
    },
  },
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export const SimpleLogo: Story = {
  args: { simpleLogo: true },
};

export const WithBlackBackground: Story = {
  args: { withBlackBackground: true },
};

export const SimpleLogoWithBlackBackground: Story = {
  args: { simpleLogo: true, withBlackBackground: true },
};

export const WithStars: Story = {
  args: { withStars: true },
};

export const SimpleLogoWithStars: Story = {
  args: { simpleLogo: true, withStars: true },
};

export const WithBlackBackgroundAndStars: Story = {
  args: { withBlackBackground: true, withStars: true },
};

export const SimpleLogoWithBlackBackgroundAndStars: Story = {
  args: {
    simpleLogo: true,
    withBlackBackground: true,
    withStars: true,
  },
};

export const SmallSize: Story = {
  args: { length: 300 },
};

export const LargeSize: Story = {
  args: { length: 800 },
};

export default meta;
