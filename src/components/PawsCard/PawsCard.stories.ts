import type { Meta, StoryObj } from "@storybook/vue3";

import SettingsIcon from "@/components/Icon/SettingsIcon.vue";
import PawsHeading from "@/components/PawsHeading/PawsHeading.vue";
import PawsSubButton from "@/components/PawsSubButton/PawsSubButton.vue";

import PawsCard from "./PawsCard.vue";

const meta = {
	title: "Paws UI/Card",
	component: PawsCard,
	tags: ["autodocs"],
	argTypes: {
		mode: {
			control: "select",
			options: ["empty", "simple", "titled"]
		}
	},
	args: {
		mode: "simple"
	}
} satisfies Meta<typeof PawsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
	render: args => ({
		components: { PawsCard },
		setup() {
			return { args };
		},
		template: `
			<PawsCard v-bind="args">
				simple content with default 20px padding (4px horizontal outer + 16px inner)
			</PawsCard>
		`
	})
};

export const Titled: Story = {
	render: args => ({
		components: { PawsCard, PawsHeading },
		setup() {
			return { args };
		},
		template: `
			<PawsCard v-bind="args">
				<template #heading>
					<PawsHeading size="lg" font-weight="semibold">
						card title (lg)
					</PawsHeading>
				</template>
				titled content with header (30px high, 4px from top) and content block.
			</PawsCard>
		`
	}),
	args: {
		mode: "titled"
	}
};

export const WithButton: Story = {
	render: args => ({
		components: { PawsCard, PawsHeading, PawsSubButton, SettingsIcon },
		setup() {
			return { args };
		},
		template: `
			<PawsCard v-bind="args">
				<template #heading>
					<PawsHeading size="lg" font-weight="semibold">
						with action
					</PawsHeading>
				</template>
				<template #actions>
					<PawsSubButton size="medium">
						<template #icon>
							<SettingsIcon />
						</template>
					</PawsSubButton>
				</template>
				this card has a medium sub-button in the header, correctly positioned 4px from the right edge.
			</PawsCard>
		`
	}),
	args: {
		mode: "titled"
	}
};

export const Empty: Story = {
	render: args => ({
		components: { PawsCard },
		setup() {
			return { args };
		},
		template: `
			<PawsCard v-bind="args">
				empty card with only 4px horizontal padding.
			</PawsCard>
		`
	}),
	args: {
		mode: "empty"
	}
};
