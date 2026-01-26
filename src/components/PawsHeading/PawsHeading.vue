<script setup lang="ts">
import { computed } from "vue";

import styles from "./PawsHeading.module.css";

export interface PawsHeadingProps {
	size?: "sm" | "lg" | "xl";
	fontWeight?: "light" | "normal" | "medium" | "bold";
	align?: "left" | "center";
}

const props = withDefaults(defineProps<PawsHeadingProps>(), {
	size: "sm",
	fontWeight: "medium",
	align: "left"
});

const sizeClasses = computed(() => ({
	[styles.sizeSm]: props.size === "sm",
	[styles.sizeLg]: props.size === "lg",
	[styles.sizeXl]: props.size === "xl"
}));

const alignClasses = computed(() => ({
	[styles.alignLeft]: props.align === "left",
	[styles.alignCenter]: props.align === "center"
}));

const fontWeightStyle = computed(() => {
	const map: Record<string, string> = {
		light: "var(--paws-font-weight-light)",
		normal: "var(--paws-font-weight-normal)",
		medium: "var(--paws-font-weight-medium)",
		bold: "var(--paws-font-weight-bold)"
	};
	// We can trust props.fontWeight is a valid key or undefined because of strict typing,
	// checking map just in case to be safe, but fallback is no longer arbitrary string
	return (
		map[props.fontWeight as keyof typeof map] ||
		"var(--paws-font-weight-medium)"
	);
});
</script>

<template>
	<h2
		:style="{ '--paws-heading--font-weight': fontWeightStyle }"
		:class="[styles.heading, sizeClasses, alignClasses]"
		data-paws-ui="PawsHeading"
	>
		<slot />
	</h2>
</template>
