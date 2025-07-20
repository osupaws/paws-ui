import type { Meta, StoryObj } from "@storybook/vue3";

import PawsButton from "./PawsButton.vue";

const meta = {
	title: "Paws UI/Button",
	component: PawsButton,
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		variant: {
			control: { type: "radio" },
			options: ["primary", "secondary"]
		}
	}
} satisfies Meta<typeof PawsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: "Primary Button",
		variant: "primary"
	}
};

export const Secondary: Story = {
	args: {
		label: "Secondary Button",
		variant: "secondary"
	}
};
