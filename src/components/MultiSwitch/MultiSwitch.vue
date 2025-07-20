<template>
	<div ref="switchRef" :class="[styles.multiSwitch, switchClass]">
		<!-- Highlighter Element -->
		<div :class="styles.highlighter" :style="highlighterStyle" />

		<!-- Option Buttons -->
		<button
			v-for="option in options"
			:key="option"
			:ref="el => (optionRefs[option] = el as HTMLButtonElement)"
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

import styles from "./MultiSwitch.module.css";

// --- THE FIX: PART 1 ---
// Define the props using a TypeScript interface for full type safety.
interface MultiSwitchProps {
	options: string[];
	modelValue: string;
	size?: "small" | "large"; // Use a union type for strictness, make it optional
}

// Use `withDefaults` to provide default values for the type-based props.
const props = withDefaults(defineProps<MultiSwitchProps>(), {
	size: "small"
});

const emit = defineEmits<{
	(e: "update:modelValue", value: string): void;
}>();

// --- THE FIX: PART 2 ---
// This computed property will now work correctly because `props.size` is properly typed as a string.
const switchClass = computed(() => {
	return {
		[styles.small]: props.size === "small",
		[styles.large]: props.size === "large"
	};
});

// Refs for DOM elements
const switchRef = ref<HTMLDivElement | null>(null);
const optionRefs = reactive<Record<string, HTMLButtonElement | null>>({});

// Reactive style for the highlighter
const highlighterStyle = ref<{
	width?: string;
	height?: string;
	transform?: string;
}>({});

const selectOption = (option: string): void => {
	emit("update:modelValue", option);
};

// The rest of the script requires NO CHANGES.
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
	() => props.modelValue,
	() => {
		updateHighlighter();
	},
	{ flush: "post" }
);

onMounted(() => {
	if (!props.options.includes(props.modelValue)) {
		console.warn(
			`[MultiSwitch] Initial modelValue "${props.modelValue}" is not in the options array. Defaulting to the first option.`
		);
		if (props.options.length > 0) {
			selectOption(props.options[0]);
		}
	} else {
		updateHighlighter();
	}
});
</script>
