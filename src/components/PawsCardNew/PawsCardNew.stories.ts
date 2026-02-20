import type { Meta, StoryObj } from "@storybook/vue3";

import SettingsIcon from "@/components/Icon/SettingsIcon.vue";
import PawsHeading from "@/components/PawsHeading/PawsHeading.vue";
import PawsSubButton from "@/components/PawsSubButton/PawsSubButton.vue";

import PawsCardNew from "./PawsCardNew.vue";

const meta = {
	title: "Paws UI/CardNew",
	component: PawsCardNew,
	tags: ["autodocs"],
	argTypes: {
		appearance: {
			control: "select",
			options: ["dark", "light"]
		},
		mode: {
			control: "select",
			options: ["empty", "simple", "titled"]
		}
	},
	args: {
		mode: "simple",
		appearance: "dark"
	}
} satisfies Meta<typeof PawsCardNew>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
	render: args => ({
		components: { PawsCardNew },
		setup() {
			return { args };
		},
		template: `
			<PawsCardNew v-bind="args">
				simple content with default 20px padding (4px horizontal outer + 16px inner)
			</PawsCardNew>
		`
	})
};

export const Titled: Story = {
	render: args => ({
		components: { PawsCardNew, PawsHeading },
		setup() {
			return { args };
		},
		template: `
			<PawsCardNew v-bind="args">
				<template #heading>
					<PawsHeading size="lg" font-weight="semibold">
						card title (lg)
					</PawsHeading>
				</template>
				titled content with header (30px high, 4px from top) and content block.
			</PawsCardNew>
		`
	}),
	args: {
		mode: "titled"
	}
};

export const WithButton: Story = {
	render: args => ({
		components: { PawsCardNew, PawsHeading, PawsSubButton, SettingsIcon },
		setup() {
			return { args };
		},
		template: `
			<PawsCardNew v-bind="args">
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
			</PawsCardNew>
		`
	}),
	args: {
		mode: "titled"
	}
};

export const Empty: Story = {
	render: args => ({
		components: { PawsCardNew },
		setup() {
			return { args };
		},
		template: `
			<PawsCardNew v-bind="args">
				empty card with only 4px horizontal padding.
			</PawsCardNew>
		`
	}),
	args: {
		mode: "empty"
	}
};
