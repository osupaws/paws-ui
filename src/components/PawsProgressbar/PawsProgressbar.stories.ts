import type { Meta, StoryObj } from "@storybook/vue3";
import { onUnmounted, ref } from "vue";

import PawsProgressbar from "./PawsProgressbar.vue";

const meta = {
	title: "Paws UI/Progressbar",
	component: PawsProgressbar,
	tags: ["autodocs"],
	argTypes: {
		progress: {
			control: { type: "range", min: 0, max: 100 }
		}
	},
	args: {
		progress: 50
	}
} satisfies Meta<typeof PawsProgressbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
	args: {
		progress: 0
	}
};

export const Full: Story = {
	args: {
		progress: 100
	}
};

export const Animated: Story = {
	render: () => ({
		components: { PawsProgressbar },
		setup() {
			const progress = ref(0);
			const interval = setInterval(() => {
				progress.value = (progress.value + 1) % 101;
			}, 50);

			onUnmounted(() => clearInterval(interval));

			return { progress };
		},
		template: `<PawsProgressbar :progress="progress" />`
	})
};
