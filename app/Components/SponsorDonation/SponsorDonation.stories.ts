import type { Meta, StoryObj } from "@storybook/react";
import SponsorDonation from "./SponsorDonation";

const meta: Meta<typeof SponsorDonation> = {
  title: "Components/SponsorDonation",
  component: SponsorDonation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SponsorDonation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
