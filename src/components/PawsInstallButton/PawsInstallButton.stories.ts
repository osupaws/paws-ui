import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";

import PawsInstallButton from "./PawsInstallButton.vue";

const meta = {
	title: "Paws UI/Install Button",
	component: PawsInstallButton,
	tags: ["autodocs"],
	argTypes: {
		state: {
			control: "select",
			options: ["idle", "working"]
		},
		progress: {
			control: { type: "range", min: 0, max: 100 }
		}
	},
	args: {
		label: "install",
		workingLabel: "installing...",
		state: "idle",
		progress: 0
	}
} satisfies Meta<typeof PawsInstallButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		state: "idle"
	}
};

export const Working: Story = {
	args: {
		state: "working",
		progress: 45
	}
};

export const InteractiveDemo: Story = {
	render: args => ({
		components: { PawsInstallButton },
		setup() {
			const state = ref<"idle" | "working">("idle");
			const progress = ref(0);

			const startInstall = () => {
				state.value = "working";
				progress.value = 0;
				const interval = setInterval(() => {
					progress.value += 5;
					if (progress.value >= 100) {
						clearInterval(interval);
						setTimeout(() => {
							state.value = "idle";
							progress.value = 0;
						}, 500);
					}
				}, 100);
			};

			return { args, state, progress, startInstall };
		},
		template: `
			<PawsInstallButton
				v-bind="args"
				:state="state"
				:progress="progress"
				@click="startInstall"
			/>
		`
	})
};
