import type { Meta, StoryObj } from "@storybook/vue3";

import PawsField from "@/components/PawsField/PawsField.vue";

const meta = {
	title: "Paws UI Kit/Field",
	component: PawsField,
	tags: ["autodocs"],
	render: args => ({
		components: { PawsField },
		setup() {
			return {
				args
			};
		},
		template: `
			<div style="max-width: 420px">
				<PawsField>
					{{ args.default }}
				</PawsField>
			</div>
		`
	})
} satisfies Meta<typeof PawsField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		default: "Field Component"
	}
};

export const Multiple: Story = {
	args: {
		default: "Multiple Fields"
	},
	render: args => ({
		components: { PawsField },
		setup() {
			return {
				args
			};
		},
		template: `
			<div style="max-width: 420px">
				<PawsField>
					{{ args.default }}
				</PawsField>
				<PawsField>
					{{ args.default }}
				</PawsField>
				<PawsField>
					{{ args.default }}
				</PawsField>
			</div>
		`
	})
};
