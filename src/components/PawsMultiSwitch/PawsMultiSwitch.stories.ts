import type { Meta, StoryObj } from "@storybook/vue3";
import { ref, watch } from "vue";

import ArrowIcon from "@/components/Icon/ArrowIcon.vue";
import FolderIcon from "@/components/Icon/FolderIcon.vue";

import PawsMultiSwitch from "./PawsMultiSwitch.vue";

const meta: Meta<typeof PawsMultiSwitch> = {
	title: "Paws UI/Multi Switch",
	component: PawsMultiSwitch,
	tags: ["autodocs"],
	argTypes: {
		options: { control: "object" },
		modelValue: { control: "text" },
		tooltip: { control: "text" }
	},
	render: args => ({
		components: { PawsMultiSwitch, FolderIcon, ArrowIcon },
		setup() {
			const selectedOption = ref(args.modelValue);
			watch(
				() => args.modelValue,
				val => (selectedOption.value = val)
			);
			return { args, selectedOption };
		},
		template: `
      <PawsMultiSwitch v-bind="args" v-model="selectedOption">
        <template #icon_only>
          <FolderIcon />
        </template>
        <template #with_icon>
          <FolderIcon />
          <span>Plugins</span>
        </template>
      </PawsMultiSwitch>
    `
	}),
	args: {
		options: ["Settings", "Window", "Interface"],
		modelValue: "Settings",
		tooltip: ""
	}
};

export default meta;
type Story = StoryObj<typeof PawsMultiSwitch>;

export const Default: Story = {
	args: {
		options: ["Active", "Paused", "Stopped"],
		modelValue: "Active"
	}
};

export const IconsOnly: Story = {
	args: {
		options: ["icon_only", "arrow"],
		modelValue: "icon_only"
	},
	render: args => ({
		components: { PawsMultiSwitch, FolderIcon, ArrowIcon },
		setup() {
			const selectedOption = ref(args.modelValue);
			return { args, selectedOption };
		},
		template: `
      <PawsMultiSwitch v-bind="args" v-model="selectedOption">
        <template #icon_only><FolderIcon /></template>
        <template #arrow><ArrowIcon /></template>
      </PawsMultiSwitch>
    `
	})
};

export const IconsAndText: Story = {
	args: {
		options: ["with_icon", "Settings"],
		modelValue: "with_icon"
	}
};
