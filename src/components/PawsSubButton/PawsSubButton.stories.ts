import type { Meta, StoryObj } from "@storybook/vue3";

import SettingsIcon from "@/components/Icon/SettingsIcon.vue";
import PawsSubButton from "@/components/PawsSubButton/PawsSubButton.vue";

const meta: Meta<typeof PawsSubButton> = {
	title: "Paws UI/SubButton",
	component: PawsSubButton,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: { type: "select" },
			options: ["large", "medium"]
		}
	}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
	render: args => ({
		components: { PawsSubButton, SettingsIcon },
		setup() {
			return { args };
		},
		template: `
      <PawsSubButton v-bind="args">
        <template #icon>
          <SettingsIcon />
        </template>
      </PawsSubButton>
    `
	}),
	args: {
		size: "large"
	}
};

export const Medium: Story = {
	render: args => ({
		components: { PawsSubButton, SettingsIcon },
		setup() {
			return { args };
		},
		template: `
      <PawsSubButton v-bind="args">
        <template #icon>
          <SettingsIcon />
        </template>
      </PawsSubButton>
    `
	}),
	args: {
		size: "medium"
	}
};
