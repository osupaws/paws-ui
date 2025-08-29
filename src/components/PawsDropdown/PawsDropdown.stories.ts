import type { Meta, StoryObj } from "@storybook/vue3";

import ArrowIcon from "@/components/Icon/ArrowIcon.vue";
import FolderIcon from "@/components/Icon/FolderIcon.vue";
import PawsDropdown from "@/components/PawsDropdown/PawsDropdown.vue";

const icons = {
	None: null,
	Folder: FolderIcon,
	Arrow: ArrowIcon
};

// Define a type for the story's args that includes our custom iconName control
type PawsDropdownStoryProps = {
	modelValue?: string;
	placeholder?: string;
	disabled?: boolean;
	options?: string[];
	iconName?: keyof typeof icons;
};

const meta: Meta<PawsDropdownStoryProps> = {
	title: "Paws UI Kit/Dropdown",
	component: PawsDropdown,
	tags: ["autodocs"],
	argTypes: {
		modelValue: { control: "text" },
		placeholder: { control: "text" },
		disabled: { control: "boolean" },
		options: { control: "object" },
		iconName: {
			name: "icon",
			control: { type: "select" },
			options: Object.keys(icons),
			description: "Select an icon to display.",
			table: {
				category: "Slots"
			}
		}
	},
	render: args => ({
		components: { PawsDropdown, ArrowIcon, FolderIcon },
		setup() {
			const { iconName, ...props } = args;
			const selectedIcon = icons[iconName || "None"];
			const isComponent =
				typeof selectedIcon !== "string" && selectedIcon !== null;
			return { props, selectedIcon, isComponent };
		},
		template: `
      <PawsDropdown v-bind="props">
        <template #icon v-if="selectedIcon">
          <div v-if="!isComponent" v-html="selectedIcon"></div>
          <component v-else :is="selectedIcon" />
        </template>
      </PawsDropdown>
    `
	}),
	args: {
		placeholder: "Select an option",
		disabled: false,
		options: ["Option 1", "Option 2", "Option 3"],
		iconName: "None"
	}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		modelValue: "Option 1"
	}
};

export const WithIcon: Story = {
	args: {
		modelValue: "Option 1",
		iconName: "Folder"
	}
};
