import type { Meta, StoryObj } from "@storybook/react";
import DepartmentExhibitionCard from "./DepartmentExhibitionCard";

type T = typeof DepartmentExhibitionCard;

const meta: Meta<T> = {
  title: "DepartmentExhibitionCard",
  component: DepartmentExhibitionCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    department: {
      control: "text",
      description: "学科名",
    },
    title: {
      control: "text",
      description: "タイトル",
    },
    description: {
      control: "text",
      description: "展示の説明文",
    },
  },
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    department: "学科名",
    title: "タイトル",
    description: "説明文",
  },
};

export default meta;
