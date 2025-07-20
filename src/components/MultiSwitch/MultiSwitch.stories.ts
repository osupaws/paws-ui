import type { Meta, StoryObj } from "@storybook/vue3";
import { ref, watch } from "vue";

import MultiSwitch from "./MultiSwitch.vue";

const meta = {
	title: "Components/MultiSwitch",
	component: MultiSwitch,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: { type: "radio" },
			options: ["small", "large"]
		}
	},
	render: (args, { argTypes }) => ({
		components: { MultiSwitch },
		setup() {
			const selectedOption = ref(args.modelValue);

			watch(
				() => args.modelValue,
				newValue => {
					selectedOption.value = newValue;
				}
			);
			watch(
				() => args.options,
				newOptions => {
					if (argTypes.modelValue.options) {
						argTypes.modelValue.options = newOptions;
					}
					if (!newOptions.includes(selectedOption.value)) {
						selectedOption.value = newOptions[0];
					}
				},
				{ immediate: true, deep: true }
			);

			return { args, selectedOption };
		},
		template: '<MultiSwitch :options="args.options" :size="args.size" v-model="selectedOption" />'
	})
} satisfies Meta<typeof MultiSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
	args: {
		options: ["settings", "window"],
		modelValue: "window",
		size: "small"
	}
};

export const Large: Story = {
	args: {
		...Small.args,
		size: "large"
	}
};
