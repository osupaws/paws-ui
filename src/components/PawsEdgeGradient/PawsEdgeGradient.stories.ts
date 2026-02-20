import type { Meta, StoryObj } from "@storybook/vue3";

import PawsEdgeGradient from "./PawsEdgeGradient.vue";

const meta = {
	title: "Paws UI/Edge Gradient",
	component: PawsEdgeGradient,
	tags: ["autodocs"],
	argTypes: {
		side: {
			control: "select",
			options: ["top", "bottom", "both"]
		},
		color: {
			control: "text"
		}
	},
	args: {
		side: "both"
	}
} satisfies Meta<typeof PawsEdgeGradient>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: args => ({
		components: { PawsEdgeGradient },
		setup() {
			return { args };
		},
		template: `
			<div style="
				position: relative;
				width: 300px;
				height: 200px;
				background: var(--paws-color-bg-secondary);
				border: 1px solid #444;
				border-radius: 8px;
				overflow: hidden;
			">
				<!-- Using secondary color since container is secondary -->
				<PawsEdgeGradient
					v-bind="args"
					:color="args.color || 'var(--paws-color-bg-secondary)'"
				/>

				<div style="
					height: 100%;
					overflow-y: auto;
					padding: 0 16px;
					color: white;
				">
					<div style="height: 10px;"></div> <!-- top spacer simulation -->
					<p v-for="i in 20" :key="i" style="margin: 10px 0;">
						Scrollable item {{ i }}
						<button @click="console.log('Clicked', i)" style="pointer-events: auto;">Click Test</button>
					</p>
					<div style="height: 20px;"></div> <!-- bottom spacer simulation -->
				</div>
			</div>
		`
	})
};
