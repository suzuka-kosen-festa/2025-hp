import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Link",
  component: Link,
  tags: ["autodocs"],
  args: {
    children: "I'm a link",
    to: "/",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
