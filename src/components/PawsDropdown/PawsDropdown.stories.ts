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
		}
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
		placeholder: "Select an option",
		disabled: false,
		options: ["Option 1", "Option 2", "Option 3"],
		iconName: "None",
		label: "",
		tooltip: ""
	}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		modelValue: "Option 1"
	}
};

export const WithLabel: Story = {
	args: {
		label: "Ruleset",
		modelValue: "Option 1"
	}
};

export const WithIconAndLabel: Story = {
	args: {
		label: "Asset",
		iconName: "Folder",
		modelValue: "Skins"
	}
};

export const WithTooltip: Story = {
	args: {
		tooltip: "This is a dropdown hint",
		modelValue: "Option 1"
	}
};

export const Disabled: Story = {
	args: {
		disabled: true,
		modelValue: "Disabled Value"
	}
};
