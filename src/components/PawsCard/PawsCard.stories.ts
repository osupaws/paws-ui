import type { Meta, StoryObj } from "@storybook/vue3";

import PawsCard from "@/components/PawsCard/PawsCard.vue";
import PawsHeading from "@/components/PawsHeading/PawsHeading.vue";

const meta = {
	title: "Paws UI/Card",
	component: PawsCard,
	tags: ["autodocs"],
	argTypes: {
		appearance: {
			control: "select",
			options: ["dark", "light"]
		}
	},
	args: {
		appearance: "dark"
	},
	render: args => ({
		components: { PawsCard, PawsHeading },
		setup() {
			return {
				args
			};
		},
		template: `
			<div style="max-width: 420px">
				<PawsCard v-bind="args">
					<template #heading v-if="args.variant !== 'compact'">
						<PawsHeading size="xl" font-weight="semibold">
							card
						</PawsHeading>
					</template>

					{{ args.default }}
				</PawsCard>
			</div>
		`
	})
} satisfies Meta<typeof PawsCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		default: "card content",
		appearance: "dark"
	}
};

export const Compact: Story = {
	args: {
		default: "compact card content (4px padding, no heading)",
		appearance: "dark",
		variant: "compact"
	}
};
