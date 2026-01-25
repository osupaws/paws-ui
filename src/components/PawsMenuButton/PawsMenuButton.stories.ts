import type { Meta, StoryObj } from "@storybook/vue3";

import FolderIcon from "@/components/Icon/FolderIcon.vue";

import PawsMenuButton from "./PawsMenuButton.vue";

const meta: Meta<typeof PawsMenuButton> = {
	title: "Paws UI/Menu Button",
	component: PawsMenuButton,
	tags: ["autodocs"],
	argTypes: {
		active: { control: "boolean" },
		disabled: { control: "boolean" },
		width: { control: "text" }
	}
};

export default meta;
type Story = StoryObj<typeof PawsMenuButton>;

export const Default: Story = {
	args: {
		width: "200px"
	},
	render: args => ({
		components: { PawsMenuButton },
		setup() {
			return { args };
		},
		template: '<PawsMenuButton v-bind="args">menu item</PawsMenuButton>'
	})
};

export const WithIcon: Story = {
	args: {
		width: "200px"
	},
	render: args => ({
		components: { PawsMenuButton, FolderIcon },
		setup() {
			return { args };
		},
		template: `
      <PawsMenuButton v-bind="args">
        plugins
        <template #icon>
          <FolderIcon />
        </template>
      </PawsMenuButton>
    `
	})
};

export const OnlyIcon: Story = {
	render: args => ({
		components: { PawsMenuButton, FolderIcon },
		setup() {
			return { args };
		},
		template: `
      <PawsMenuButton v-bind="args">
        <template #icon>
          <FolderIcon />
        </template>
      </PawsMenuButton>
    `
	})
};

export const FullWidth: Story = {
	args: {
		width: "100%"
	},
	render: args => ({
		components: { PawsMenuButton },
		setup() {
			return { args };
		},
		template: '<PawsMenuButton v-bind="args">full width item</PawsMenuButton>'
	})
};

export const Active: Story = {
	args: {
		active: true,
		width: "200px"
	},
	render: args => ({
		components: { PawsMenuButton },
		setup() {
			return { args };
		},
		template: '<PawsMenuButton v-bind="args">active item</PawsMenuButton>'
	})
};

export const WithTooltip: Story = {
	args: {
		width: "200px",
		tooltip: "this is a helpful tooltip!"
	},
	render: args => ({
		components: { PawsMenuButton },
		setup() {
			return { args };
		},
		template: '<PawsMenuButton v-bind="args">hover me for 1s</PawsMenuButton>'
	})
};
