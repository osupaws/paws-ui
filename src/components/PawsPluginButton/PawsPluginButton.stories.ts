import type { Meta, StoryObj } from "@storybook/vue3";

import PawsPluginButton from "./PawsPluginButton.vue";

const meta = {
	title: "Paws UI Kit/Plugin Button",
	component: PawsPluginButton,
	tags: ["autodocs"],
	argTypes: {
		state: {
			control: { type: "radio" },
			options: ["default", "active", "disabled", "processing"]
		},
		default: {
			control: "text",
			description: "The content of the button, e.g., text or an icon."
		}
	},
	render: args => ({
		components: { PawsPluginButton },
		setup() {
			return { args };
		},
		template: `
      <PawsPluginButton :state="args.state">
        {{ args.default }}
      </PawsPluginButton>
    `
	})
} satisfies Meta<typeof PawsPluginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		default: "My Plugin",
		state: "default"
	}
};

export const Active: Story = {
	args: {
		...Default.args,
		state: "active"
	}
};

export const Processing: Story = {
	args: {
		...Default.args,
		state: "processing"
	}
};

export const Disabled: Story = {
	args: {
		...Default.args,
		state: "disabled"
	}
};
