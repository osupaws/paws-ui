import type { Meta, StoryObj } from "@storybook/vue3";

import PawsSpoilerCard from "./PawsSpoilerCard.vue";

const meta = {
	title: "Paws UI/Spoiler Card",
	component: PawsSpoilerCard,
	tags: ["autodocs"],
	argTypes: {},
	args: {
		isExpanded: false
	}
} satisfies Meta<typeof PawsSpoilerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: args => ({
		components: { PawsSpoilerCard },
		setup() {
			return { args };
		},
		template: `
			<PawsSpoilerCard v-bind="args">
				<template #header>
					spoiler card
				</template>
				spoiler content
			</PawsSpoilerCard>
		`
	})
};

export const Expanded: Story = {
	args: {
		isExpanded: true
	},
	render: args => ({
		components: { PawsSpoilerCard },
		setup() {
			return { args };
		},
		template: `
			<PawsSpoilerCard v-bind="args">
				<template #header>
					expanded spoiler card
				</template>
				<div style="color: var(--paws-color-text-secondary); font-size: 14px;">
					this is the expanded content of the spoiler card.
					it can contain any elements.
				</div>
			</PawsSpoilerCard>
		`
	})
};
