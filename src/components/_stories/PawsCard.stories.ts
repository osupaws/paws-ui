import type { Meta, StoryObj } from "@storybook/vue3";
import PawsCard from "@components/PawsCard/PawsCard.vue";

const meta = {
  title: "Paws UI Kit/Card",
  component: PawsCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PawsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
