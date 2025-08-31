import type { Meta, StoryObj } from "@storybook/vue3";

import PawsCheckbox from "@/components/PawsCheckbox/PawsCheckbox.vue";

const meta = {
	title: "Paws UI/Checkbox",
	component: PawsCheckbox,
	tags: ["autodocs"],
	argTypes: {
		label: {
			control: "text"
		},
		labelFontSize: {
			control: "select",
			options: ["xs", "sm", "md", "lg", "xl"]
		},
		modelValue: {
			name: "Checked",
			control: "boolean"
		}
	},
	args: {
		label: "Checkbox",
		labelFontSize: "md",
		modelValue: false
	}
} satisfies Meta<typeof PawsCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Checkbox",
		labelFontSize: "md",
		modelValue: false
	}
};
