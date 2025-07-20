// src/stories/PawsInput.stories.ts
import type { Meta, StoryObj } from "@storybook/vue3";

import folderIconRaw from "../../icons/folderIcon.svg?raw";
// Update the import path to the new component location
import PawsInput from "./PawsInput.vue";
const meta = {
	// Use a consistent naming convention for the Storybook sidebar
	title: "Paws UI/Input",
	component: PawsInput,
	tags: ["autodocs"],
	argTypes: {
		modelValue: { control: "text" },
		placeholder: { control: "text" },
		disabled: { control: "boolean" },
		icon: {
			control: false,
			description: "Slot for the leading icon adornment.",
			table: {
				category: "Slots",
				type: { summary: "template" }
			}
		}
	},
	render: args => ({
		components: { PawsInput },
		setup() {
			return { args };
		},
		template: '<PawsInput v-model="args.modelValue" v-bind="args" />'
	}),
	args: {
		modelValue: "",
		disabled: false
	}
} satisfies Meta<typeof PawsInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: "Enter text here..."
	}
};

export const AdornedWithIcon: Story = {
	render: args => ({
		components: { PawsInput },
		setup() {
			return { args, folderIconRaw };
		},
		template: `
       <PawsInput v-model="args.modelValue" v-bind="args">
        <template #icon>
          <div v-html="folderIconRaw"></div>
        </template>
      </PawsInput>
    `
	}),
	args: {
		placeholder: "Path to folder..."
	}
};
