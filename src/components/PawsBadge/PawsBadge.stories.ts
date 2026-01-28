import type { Meta, StoryObj } from "@storybook/vue3";

import PawsBadge from "./PawsBadge.vue";

const meta = {
	title: "Paws UI/Badge",
	component: PawsBadge,
	tags: ["autodocs"],
	args: {
		label: "badge text"
	}
} satisfies Meta<typeof PawsBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "badge"
	}
};

export const LongText: Story = {
	args: {
		label: "badge with longer text content"
	}
};
