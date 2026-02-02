import type { Meta, StoryObj } from "@storybook/vue3";

import ArrowIcon from "@/components/Icon/ArrowIcon.vue";
import FolderIcon from "@/components/Icon/FolderIcon.vue";
import PawsDropdown from "@/components/PawsDropdown/PawsDropdown.vue";

const icons = {
	None: null,
	Folder: FolderIcon,
	Arrow: ArrowIcon
};

type PawsDropdownStoryProps = {
	modelValue?: string;
	placeholder?: string;
	disabled?: boolean;
	options?: string[];
	iconName?: keyof typeof icons;
	label?: string;
	tooltip?: string;
	size?: "normal" | "compact";
	defaultValue?: string;
};

const meta: Meta<PawsDropdownStoryProps> = {
	title: "Paws UI/Dropdown",
	component: PawsDropdown,
	tags: ["autodocs"],
	argTypes: {
		modelValue: { control: "text" },
		placeholder: { control: "text" },
		disabled: { control: "boolean" },
		options: { control: "object" },
		label: { control: "text" },
		tooltip: { control: "text" },
		iconName: {
			name: "icon",
			control: { type: "select" },
			options: Object.keys(icons),
			description: "Select an icon to display in the left area.",
			table: { category: "Slots" }
		},
		size: {
			control: { type: "select" },
			options: ["normal", "compact"]
		},
		defaultValue: { control: "text" }
	},
	render: args => ({
		components: { PawsDropdown, ArrowIcon, FolderIcon },
		setup() {
			const { iconName, ...props } = args;
			const selectedIcon = icons[iconName || "None"];
			return { props, selectedIcon };
		},
		template: `
      <PawsDropdown v-bind="props">
        <template #icon v-if="selectedIcon">
          <component :is="selectedIcon" />
        </template>
      </PawsDropdown>
    `
	}),
	args: {
		placeholder: "select an option",
		disabled: false,
		options: ["option 1", "option 2", "option 3"],
		iconName: "None",
		label: "",
		tooltip: ""
	}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		modelValue: "option 1"
	}
};

export const WithLabel: Story = {
	args: {
		label: "ruleset",
		modelValue: "option 1"
	}
};

export const WithIconAndLabel: Story = {
	args: {
		label: "asset",
		iconName: "Folder",
		modelValue: "skins"
	}
};

export const WithTooltip: Story = {
	args: {
		tooltip: "this is a dropdown hint",
		modelValue: "option 1"
	}
};

export const Disabled: Story = {
	args: {
		disabled: true,
		modelValue: "disabled value"
	}
};

export const Compact: Story = {
	args: {
		size: "compact",
		modelValue: "option 1",
		placeholder: "compact select"
	}
};

export const Highlighted: Story = {
	args: {
		label: "highlighted",
		modelValue: "option 2",
		defaultValue: "option 1",
		options: ["option 1", "option 2", "option 3"],
		tooltip: "Highlighted because value differs from default"
	}
};
