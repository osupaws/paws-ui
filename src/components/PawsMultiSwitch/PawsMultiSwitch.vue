<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";

import { vPawsTooltip } from "../../directives/vTooltip";
import styles from "./PawsMultiSwitch.module.css";

interface MultiSwitchProps {
	options: string[];
	modelValue: string;
	tooltip?: string;
}

const props = withDefaults(defineProps<MultiSwitchProps>(), {
	tooltip: ""
});

const emit = defineEmits<{
	(e: "update:modelValue", value: string): void;
}>();

const switchRef = ref<HTMLDivElement | null>(null);
const optionRefs = reactive<Record<string, HTMLButtonElement | null>>({});

const highlighterStyle = ref<{
	width?: string;
	height?: string;
	transform?: string;
}>({});

const selectOption = (option: string): void => {
	emit("update:modelValue", option);
};

const updateHighlighter = (): void => {
	if (!switchRef.value || !props.modelValue || !optionRefs[props.modelValue]) {
		highlighterStyle.value = { width: "0", transform: "scaleX(0)" };
		return;
	}

	const switchRect = switchRef.value.getBoundingClientRect();
	const activeOptionEl = optionRefs[props.modelValue];

	if (activeOptionEl) {
		const optionRect = activeOptionEl.getBoundingClientRect();
		const relativeLeft = optionRect.left - switchRect.left;

		highlighterStyle.value = {
			width: `${optionRect.width}px`,
			height: `${optionRect.height}px`,
			transform: `translateX(${relativeLeft}px)`
		};
	}
};

watch(
	() => [props.modelValue, props.options],
	() => {
		// Small delay to let DOM update if options changed
		setTimeout(updateHighlighter, 0);
	},
	{ flush: "post", deep: true }
);

onMounted(() => {
	if (props.options.length > 0 && !props.options.includes(props.modelValue)) {
		selectOption(props.options[0]);
	} else {
		updateHighlighter();
	}
});
</script>

<template>
	<div
		ref="switchRef"
		v-paws-tooltip="tooltip"
		:class="styles.pawsMultiSwitch"
		data-paws-ui="PawsMultiSwitch"
	>
		<div
			:class="styles.highlighter"
			:style="highlighterStyle"
			data-paws-part="highlighter"
		/>

		<button
			v-for="option in options"
			:key="option"
			:ref="el => (optionRefs[option] = el as HTMLButtonElement)"
			:class="[styles.option, { [styles.active]: modelValue === option }]"
			type="button"
			data-paws-part="option"
			@click="selectOption(option)"
		>
			<span :class="styles.text">
				<!-- Default slot or dynamic slot based on option value -->
				<slot :name="option">
					{{ option }}
				</slot>
			</span>
		</button>
	</div>
</template>
