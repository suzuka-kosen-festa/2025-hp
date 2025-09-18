import type { Meta, StoryObj } from "@storybook/react";
import { SnsShare } from "./SnsShare";

const meta: Meta<typeof SnsShare> = {
  title: "Components/SnsShare",
  component: SnsShare,
};

export default meta;
type Story = StoryObj<typeof SnsShare>;

export const Default: Story = {
  args: {},
};
