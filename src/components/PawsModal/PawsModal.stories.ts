import type { Meta, StoryObj } from "@storybook/vue3";

import SettingsIcon from "@/components/Icon/SettingsIcon.vue";
import PawsHeading from "@/components/PawsHeading/PawsHeading.vue";
import PawsSubButton from "@/components/PawsSubButton/PawsSubButton.vue";

import PawsModal from "./PawsModal.vue";

const meta = {
	title: "Paws UI/Modal",
	component: PawsModal,
	tags: ["autodocs"],
	argTypes: {},
	args: {}
} satisfies Meta<typeof PawsModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: args => ({
		components: { PawsModal, PawsHeading, PawsSubButton, SettingsIcon },
		setup() {
			return { args };
		},
		template: `
			<PawsModal v-bind="args">
				<template #heading>
					<PawsHeading size="lg" font-weight="semibold">
						modal title
					</PawsHeading>
				</template>
				<template #actions>
					<PawsSubButton size="medium">
						<template #icon>
							<SettingsIcon />
						</template>
					</PawsSubButton>
				</template>
				<div style="color: var(--paws-color-text-primary); line-height: 1.5;">
					<p>this is a modal window with fixed dimensions 520x500.</p>
					<p>it supports scrolling if the content is too long.</p>
					<p v-for="i in 20" :key="i">scrollable content line {{ i }}</p>
					<p>at the very bottom, you will see the 20px margin-spacer.</p>
				</div>
			</PawsModal>
		`
	})
};
