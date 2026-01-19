import type { Meta, StoryObj } from "@storybook/vue3";

import PawsCheckbox from "./PawsCheckbox.vue";

const meta: Meta<typeof PawsCheckbox> = {
	title: "Paws UI/Checkbox",
	component: PawsCheckbox,
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		tooltip: { control: "text" },
		disabled: { control: "boolean" },
		modelValue: { control: "boolean" }
	},
	args: {
		label: "Checkbox",
		tooltip: "",
		disabled: false,
		modelValue: false
	}
};

export default meta;
type Story = StoryObj<typeof PawsCheckbox>;

export const Default: Story = {
	args: {
		label: "Checkbox",
		modelValue: false
	}
};

export const Checked: Story = {
	args: {
		label: "Checked State",
		modelValue: true
	}
};

export const WithTooltip: Story = {
	args: {
		label: "Hover me",
		tooltip: "This is a checkbox hint!",
		modelValue: false
	}
};

export const Disabled: Story = {
	args: {
		label: "Disabled State",
		disabled: true,
		modelValue: false
	}
};
