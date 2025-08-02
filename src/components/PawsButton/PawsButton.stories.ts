import type { Meta, StoryObj } from "@storybook/vue3";

import PawsButton from "@/components/PawsButton/PawsButton.vue";

const meta = {
	title: "Paws UI Kit/Button",
	component: PawsButton,
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		variant: {
			control: { type: "radio" },
			options: ["primary", "secondary"],
		},
		size: {
			control: { type: "radio" },
			options: ["normal", "small"],
		},
	},
} satisfies Meta<typeof PawsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: "Primary Button",
		variant: "primary",
	},
};

export const Secondary: Story = {
	args: {
		label: "Secondary Button",
		variant: "secondary",
	},
};

export const Small: Story = {
	args: {
		label: "Small Button",
		variant: "primary",
		size: "small",
	},
};
