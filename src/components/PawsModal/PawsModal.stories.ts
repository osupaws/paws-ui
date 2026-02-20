import type { Meta, StoryObj } from "@storybook/vue3";
import { ref, watch } from "vue";

import CloseIcon from "@/components/Icon/CloseIcon.vue";
import SettingsIcon from "@/components/Icon/SettingsIcon.vue";
import PawsButton from "@/components/PawsButton/PawsButton.vue";
import PawsHeading from "@/components/PawsHeading/PawsHeading.vue";
import PawsSubButton from "@/components/PawsSubButton/PawsSubButton.vue";

import PawsModal from "./PawsModal.vue";

const meta = {
	title: "Paws UI/Modal",
	component: PawsModal,
	tags: ["autodocs"],
	argTypes: {
		isOpen: { control: "boolean" },
		overlayColor: { control: "color" },
		closeOnOverlayClick: { control: "boolean" },
		closeOnEsc: { control: "boolean" },
		teleportTo: { control: "text" }
	},
	args: {
		isOpen: false,
		overlayColor: "#00000040",
		closeOnOverlayClick: true,
		closeOnEsc: true,
		teleportTo: "body"
	}
} satisfies Meta<typeof PawsModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: args => ({
		components: {
			PawsModal,
			PawsHeading,
			PawsSubButton,
			SettingsIcon,
			CloseIcon,
			PawsButton
		},
		setup() {
			const isModalOpen = ref(args.isOpen);

			// Sync storybook control with local state
			watch(
				() => args.isOpen,
				val => {
					isModalOpen.value = val;
				}
			);

			return { args, isModalOpen };
		},
		template: `
			<div>
				<PawsButton @click="isModalOpen = true">Open Modal</PawsButton>

				<PawsModal
					v-bind="args"
					:isOpen="isModalOpen"
					@close="isModalOpen = false"
				>
					<template #heading>
						<PawsHeading size="lg" font-weight="semibold">
							modal title
						</PawsHeading>
					</template>
					<template #actions>
						<PawsSubButton
							size="medium"
							text="close"
							@click="isModalOpen = false"
						>
							<template #icon>
								<CloseIcon />
							</template>
						</PawsSubButton>
					</template>
					<div style="color: var(--paws-color-text-primary); line-height: 1.5;">
						<p>this is a full modal window with its own backdrop and animations.</p>
						<p>it supports scrolling if the content is too long.</p>
						<p v-for="i in 20" :key="i">scrollable content line {{ i }}</p>
					</div>
				</PawsModal>
			</div>
		`
	})
};
