<script setup lang="ts">
import { computed } from "vue";

import styles from "./PawsCheckbox.module.css";

export interface PawsCheckboxProps {
	label: string;
	labelFontSize?: "xs" | "sm" | "md" | "lg" | "xl";
}

const model = defineModel<boolean>({
	default: false
});

const { labelFontSize } = defineProps<PawsCheckboxProps>();

const labelFontSizeComputed = computed(() => ({
	[styles.labelFontSizeMd]: labelFontSize === undefined,
	[styles.labelFontSizeXs]: labelFontSize === "xs",
	[styles.labelFontSizeSm]: labelFontSize === "sm",
	[styles.labelFontSizeMd]: labelFontSize === "md",
	[styles.labelFontSizeLg]: labelFontSize === "lg",
	[styles.labelFontSizeXl]: labelFontSize === "xl"
}));
</script>

<template>
	<label :class="styles.pawsCheckbox">
		<input :checked="model" type="checkbox" :class="styles.input" />

		<span :class="styles.checkbox" />
		<span :class="[styles.label, labelFontSizeComputed]">{{ label }}</span>
	</label>
</template>
