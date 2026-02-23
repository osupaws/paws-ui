import type { Meta, StoryObj } from "@storybook/vue3";

import PawsCard from "@/components/PawsCard/PawsCard.vue";
import PawsHeading from "@/components/PawsHeading/PawsHeading.vue";

import PawsPluginShell from "./PawsPluginShell.vue";

const meta = {
	title: "Paws Core/Plugin Shell",
	component: PawsPluginShell,
	tags: ["autodocs"],
	argTypes: {
		padded: { control: "boolean" }
	},
	args: {
		padded: true
	},
	parameters: {
		layout: "fullscreen"
	}
} satisfies Meta<typeof PawsPluginShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: args => ({
		components: { PawsPluginShell, PawsCard, PawsHeading },
		setup() {
			return { args };
		},
		template: `
			<div style="height: 500px; width: 800px; border: 1px dashed var(--paws-color-interactive-primary);">
				<!-- Simulating an iframe or window boundary with the div above -->
				<PawsPluginShell v-bind="args">
					<PawsCard mode="titled" style="width: 100%; height: 100%;">
						<template #heading>
							<PawsHeading size="lg">plugin root</PawsHeading>
						</template>
						<div style="color: var(--paws-color-text-secondary);">
							<p>This is standard plugin content.</p>
							<p>The PawsPluginShell wrapper automatically applies 100vw/vh and padding if enabled.</p>
							<p>Resize the window to see how it flexes.</p>
						</div>
					</PawsCard>
				</PawsPluginShell>
			</div>
		`
	})
};
