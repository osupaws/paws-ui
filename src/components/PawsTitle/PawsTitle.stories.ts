import type { Meta, StoryObj } from "@storybook/vue3";

import PawsTitle from "@components/PawsTitle/PawsTitle.vue";

const meta = {
  title: "Paws UI Kit/Title",
  component: PawsTitle,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variant: {
      control: { type: "radio" },
      options: ["title", "subtitle"],
    },
  },
} satisfies Meta<typeof PawsTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "This is a title",
    variant: "title",
  },
};

export const Subtitle: Story = {
  args: {
    label: "This is a subtitle",
    variant: "subtitle",
  },
};
