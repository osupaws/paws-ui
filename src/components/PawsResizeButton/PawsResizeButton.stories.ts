import type { Meta, StoryObj } from "@storybook/vue3";

import PawsResizeButton from "@/components/PawsResizeButton/PawsResizeButton.vue";

const meta: Meta<typeof PawsResizeButton> = {
	title: "Paws UI Kit/Resize Button",
	component: PawsResizeButton,
	tags: ["autodocs"],
	argTypes: {
		initialState: {
			control: { type: "radio" },
			options: ["compact", "wide"],
			description: "The initial state of the button",
		},
	},
	parameters: {
		docs: {
			description: {
				component: "A button to resize a window, with compact and wide states.",
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof PawsResizeButton>;

export const Compact: Story = {
	args: {
		initialState: "compact",
	},
};

export const Wide: Story = {
	args: {
		initialState: "wide",
	},
};
