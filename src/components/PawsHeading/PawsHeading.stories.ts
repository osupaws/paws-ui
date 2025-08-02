import type { Meta, StoryObj } from "@storybook/vue3";

import PawsHeading from "@/components/PawsHeading/PawsHeading.vue";

const meta = {
	title: "Paws UI Kit/Heading",
	component: PawsHeading,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "lg", "xl"],
		},
		fontWeight: {
			control: "text",
		},
		align: {
			control: "select",
			options: ["left", "center"],
		},
	},
	args: {
		size: "sm",
		fontWeight: "500",
		align: "left",
	},
	render: (args) => ({
		components: { PawsHeading },
		setup() {
			return {
				args,
			};
		},
		template: `
      <PawsHeading :size="args.size" :font-weight="args.fontWeight">
        {{ args.default }}
      </PawsHeading>
    `,
	}),
} satisfies Meta<typeof PawsHeading>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
	args: {
		default: "Heading",
	},
};

export const SizeSm: Story = {
	name: "Size: sm",
	args: {
		default: "Heading",
	},
};

export const SizeLg: Story = {
	name: "Size: lg",
	args: {
		default: "Heading",
		size: "lg",
	},
};

export const SizeXl: Story = {
	name: "Size: xl",
	args: {
		default: "Heading",
		size: "xl",
	},
};

export const fontWeightMedium: Story = {
	name: "Font Weight: medium",
	args: {
		default: "Heading",
		fontWeight: "500",
	},
};

export const fontWeightSemibold: Story = {
	name: "Font Weight: semibold",
	args: {
		default: "Heading",
		fontWeight: "600",
	},
};

export const fontWeightBold: Story = {
	name: "Font Weight: bold",
	args: {
		default: "Heading",
		fontWeight: "700",
	},
};
