import type { Meta, StoryObj } from "@storybook/vue3";

import PawsButton from "@/components/PawsButton/PawsButton.vue";

const meta = {
	title: "Paws UI/Button",
	component: PawsButton,
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		variant: {
			control: { type: "radio" },
			options: ["primary", "secondary"]
		},
		size: {
			control: { type: "radio" },
			options: ["normal", "small"]
		}
	}
} satisfies Meta<typeof PawsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: "primary button",
		variant: "primary"
	}
};

export const Secondary: Story = {
	args: {
		label: "secondary button",
		variant: "secondary"
	}
};

export const Small: Story = {
	args: {
		label: "small button",
		variant: "primary",
		size: "small"
	}
};
