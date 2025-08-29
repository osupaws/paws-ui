import type { Meta, StoryObj } from "@storybook/vue3";

import ArrowIcon from "@/components/Icon/ArrowIcon.vue";
import FolderIcon from "@/components/Icon/FolderIcon.vue";
import PawsInput from "@/components/PawsInput/PawsInput.vue";

const icons = {
	None: null,
	Folder: FolderIcon,
	Arrow: ArrowIcon
};

// Define a type for the story's args that includes our custom iconName control
type PawsInputStoryProps = {
	modelValue?: string;
	placeholder?: string;
	disabled?: boolean;
	isIconClickable?: boolean;
	buttonText?: string;
	iconName?: keyof typeof icons;
	onIconClick?: () => void;
	title?: string;
};

const meta: Meta<PawsInputStoryProps> = {
	title: "Paws UI Kit/Input",
	component: PawsInput,
	tags: ["autodocs"],
	argTypes: {
		modelValue: { control: "text" },
		placeholder: { control: "text" },
		disabled: { control: "boolean" },
		isIconClickable: { control: "boolean" },
		buttonText: { control: "text" },
		iconName: {
			name: "icon",
			control: { type: "select" },
			options: Object.keys(icons),
			description: "Select an icon to display.",
			table: {
				category: "Slots"
			}
		},
		onIconClick: { action: "icon-clicked" }
	},
	render: args => ({
		components: { PawsInput, ArrowIcon },
		setup() {
			const { iconName, ...props } = args;
			const selectedIcon = icons[iconName || "None"];
			const isComponent =
				typeof selectedIcon !== "string" && selectedIcon !== null;
			return { props, selectedIcon, isComponent };
		},
		template: `
      <PawsInput v-bind="props">
        <template #icon v-if="selectedIcon">
          <div v-if="!isComponent" v-html="selectedIcon"></div>
          <component v-else :is="selectedIcon" />
        </template>
      </PawsInput>
    `
	}),
	args: {
		modelValue: "",
		placeholder: "",
		disabled: false,
		isIconClickable: false,
		buttonText: "",
		iconName: "None"
	}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: "Enter text here..."
	}
};

export const WithTitle: Story = {
	args: {
		...Default.args,
		title: "Title"
	}
};

export const AdornedWithIcon: Story = {
	args: {
		placeholder: "Path to folder...",
		iconName: "Folder"
	}
};

export const WithButton: Story = {
	args: {
		placeholder: "Path to file...",
		iconName: "Folder",
		isIconClickable: true,
		buttonText: "Browse"
	}
};

export const Disabled: Story = {
	args: {
		placeholder: "Disabled",
		modelValue: "some value",
		disabled: true,
		iconName: "Folder",
		isIconClickable: true,
		buttonText: "Browse"
	}
};
