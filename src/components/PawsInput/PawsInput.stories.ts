import type { Meta, StoryObj } from "@storybook/vue3";

import ArrowIcon from "@/components/Icon/ArrowIcon.vue";
import FolderIcon from "@/components/Icon/FolderIcon.vue";
import PawsInput from "@/components/PawsInput/PawsInput.vue";

const icons = {
	None: null,
	Folder: FolderIcon,
	Arrow: ArrowIcon
};

type PawsInputStoryProps = {
	modelValue?: string;
	placeholder?: string;
	disabled?: boolean;
	isIconClickable?: boolean;
	buttonText?: string;
	iconName?: keyof typeof icons;
	title?: string;
	tooltip?: string;
};

const meta: Meta<PawsInputStoryProps> = {
	title: "Paws UI/Input",
	component: PawsInput,
	tags: ["autodocs"],
	argTypes: {
		modelValue: { control: "text" },
		placeholder: { control: "text" },
		disabled: { control: "boolean" },
		isIconClickable: { control: "boolean" },
		buttonText: { control: "text" },
		title: { control: "text" },
		tooltip: { control: "text" },
		iconName: {
			name: "icon",
			control: { type: "select" },
			options: Object.keys(icons),
			description: "Select an icon to display in the adornment.",
			table: { category: "Slots" }
		}
	},
	render: args => ({
		components: { PawsInput, ArrowIcon, FolderIcon },
		setup() {
			const { iconName, ...props } = args;
			const selectedIcon = icons[iconName || "None"];
			return { props, selectedIcon };
		},
		template: `
      <PawsInput v-bind="props">
        <template #icon v-if="selectedIcon">
          <component :is="selectedIcon" />
        </template>
      </PawsInput>
    `
	}),
	args: {
		modelValue: "",
		placeholder: "Enter text...",
		disabled: false,
		isIconClickable: false,
		buttonText: "",
		iconName: "None",
		title: "",
		tooltip: ""
	}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: "Enter something..."
	}
};

export const WithTitle: Story = {
	args: {
		title: "Username",
		placeholder: "e.g. abstractdildo"
	}
};

export const WithAdornment: Story = {
	args: {
		buttonText: "Browse",
		iconName: "Folder",
		placeholder: "Select path..."
	}
};

export const AsButton: Story = {
	args: {
		buttonText: "GO",
		iconName: "Arrow",
		isIconClickable: true,
		placeholder: "Execute command..."
	}
};

export const Disabled: Story = {
	args: {
		disabled: true,
		buttonText: "Fixed",
		modelValue: "Read only content"
	}
};
