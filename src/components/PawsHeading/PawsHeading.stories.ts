import type { Meta, StoryObj } from "@storybook/vue3";

import PawsHeading from "@/components/PawsHeading/PawsHeading.vue";

const meta = {
	title: "Paws UI/Heading",
	component: PawsHeading,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "lg", "xl"]
		},
		fontWeight: {
			control: "text"
		},
		align: {
			control: "select",
			options: ["left", "center"]
		}
	},
	args: {
		size: "sm",
		fontWeight: "500",
		align: "left"
	},
	render: args => ({
		components: { PawsHeading },
		setup() {
			return {
				args
			};
		},
		template: `
      <PawsHeading :size="args.size" :font-weight="args.fontWeight">
        {{ args.default }}
      </PawsHeading>
    `
	})
} satisfies Meta<typeof PawsHeading>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
	args: {
		default: "heading"
	}
};

export const SizeSm: Story = {
	name: "size: sm",
	args: {
		default: "heading"
	}
};

export const SizeLg: Story = {
	name: "size: lg",
	args: {
		default: "heading",
		size: "lg"
	}
};

export const SizeXl: Story = {
	name: "size: xl",
	args: {
		default: "heading",
		size: "xl"
	}
};

export const fontWeightMedium: Story = {
	name: "font weight: medium",
	args: {
		default: "heading",
		fontWeight: "500"
	}
};

export const fontWeightSemibold: Story = {
	name: "font weight: semibold",
	args: {
		default: "heading",
		fontWeight: "600"
	}
};

export const fontWeightBold: Story = {
	name: "font weight: bold",
	args: {
		default: "heading",
		fontWeight: "700"
	}
};
