import PawsMultiSwitch, {
	type MultiSwitchProps,
} from "@components/PawsMultiSwitch/PawsMultiSwitch.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { ref, watch } from "vue";

const meta: Meta<MultiSwitchProps> = {
	title: "Paws UI Kit/Multi Switch",
	component: PawsMultiSwitch,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: { type: "radio" },
			options: ["small", "large"],
		},
	},
	render: (args, { argTypes }) => ({
		components: { PawsMultiSwitch },
		setup() {
			const selectedOption = ref(args.modelValue);

			watch(
				() => args.modelValue,
				(newValue) => {
					selectedOption.value = newValue;
				},
			);
			watch(
				() => args.options,
				(newOptions) => {
					if (argTypes.modelValue.options) {
						argTypes.modelValue.options = newOptions;
					}
					if (!newOptions.includes(selectedOption.value)) {
						selectedOption.value = newOptions[0];
					}
				},
				{ immediate: true, deep: true },
			);

			return { args, selectedOption };
		},
		template:
			'<PawsMultiSwitch :options="args.options" :size="args.size" v-model="selectedOption" />',
	}),
} satisfies Meta<typeof PawsMultiSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
	args: {
		options: ["settings", "window"],
		modelValue: "window",
		size: "small",
	},
};

export const Large: Story = {
	args: {
		...Small.args,
		size: "large",
	},
};
