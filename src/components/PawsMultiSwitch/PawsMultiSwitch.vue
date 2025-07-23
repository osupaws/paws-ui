<template>
	<div ref="switchRef" :class="[styles.pawsMultiSwitch, switchClass]">
		<div :class="styles.highlighter" :style="highlighterStyle" />

		<button
			v-for="option in options"
			:key="option"
			:ref="(el) => (optionRefs[option] = el as HTMLButtonElement)"
			:class="[styles.option, { [styles.active]: modelValue === option }]"
			type="button"
			@click="selectOption(option)"
		>
			{{ option }}
		</button>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";

import styles from "./PawsMultiSwitch.module.css";

interface MultiSwitchProps {
	options: string[];
	modelValue: string;
	size?: "small" | "large";
}

const props = withDefaults(defineProps<MultiSwitchProps>(), {
	size: "small",
});

export type { MultiSwitchProps };

const emit = defineEmits<{
	(e: "update:modelValue", value: string): void;
}>();

const switchClass = computed(() => {
	return {
		[styles.small]: props.size === "small",
		[styles.large]: props.size === "large",
	};
});

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
			transform: `translateX(${relativeLeft}px)`,
		};
	}
};

watch(
	() => props.modelValue,
	() => {
		updateHighlighter();
	},
	{ flush: "post" },
);

onMounted(() => {
	if (!props.options.includes(props.modelValue)) {
		console.warn(
			`[MultiSwitch] Initial modelValue "${props.modelValue}" is not in the options array. Defaulting to the first option.`,
		);
		if (props.options.length > 0) {
			selectOption(props.options[0]);
		}
	} else {
		updateHighlighter();
	}
});
</script>
