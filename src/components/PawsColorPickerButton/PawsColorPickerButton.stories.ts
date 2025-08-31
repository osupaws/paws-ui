import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";

import PawsColorPickerButton from "@/components/PawsColorPickerButton/PawsColorPickerButton.vue";

const meta = {
	title: "Paws UI/Color Picker Button",
	component: PawsColorPickerButton,
	tags: ["autodocs"],
	argTypes: {
		color: {
			control: "text"
		},
		active: {
			control: "boolean"
		},
		onClick: {
			action: "clicked"
		}
	},
	args: {
		color: "#ffa4c1",
		active: false
	}
} satisfies Meta<typeof PawsColorPickerButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MultipleButtonsExample: Story = {
	render: args => ({
		components: { PawsColorPickerButton },
		setup() {
			// Define the list of colors
			const colors = [
				"#FFA4C1",
				"#BA37D4",
				"#535FDF",
				"#50CAC4",
				"#44975A",
				"#B69435",
				"#A93D3D",
				"#252525",
				"#D4D4D4"
			];

			const activeIndex = ref(-1);

			const setActive = (index: number) => {
				activeIndex.value = activeIndex.value === index ? -1 : index;
			};

			return { args, colors, activeIndex, setActive };
		},
		template: `
			<div style="display: flex; gap: 8px;">
				<PawsColorPickerButton
					v-for="(color, index) in colors"
					:key="index"
					:color="color"
					:active="activeIndex === index"
					@click="setActive(index)"
				/>
			</div>
		`
	}),
	args: {
		color: "#ffa4c1",
		active: false
	}
};
