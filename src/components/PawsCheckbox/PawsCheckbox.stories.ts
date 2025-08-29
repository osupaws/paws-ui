import type { Meta, StoryObj } from "@storybook/vue3";

import PawsCheckbox from "@/components/PawsCheckbox/PawsCheckbox.vue";

const meta = {
	title: "Paws UI Kit/Checkbox",
	component: PawsCheckbox,
	tags: ["autodocs"],
	argTypes: {
		label: {
			control: "text"
		},
		checked: {
			control: "boolean"
		}
	},
	args: {
		label: "Checkbox",
		checked: false
	}
} satisfies Meta<typeof PawsCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Checkbox",
		checked: false
	}
};
