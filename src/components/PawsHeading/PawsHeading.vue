<script setup lang="ts">
import { computed } from "vue";

import styles from "./PawsHeading.module.css";

export interface PawsHeadingProps {
	size?: "sm" | "lg" | "xl";
	fontWeight?: "500" | "600" | number | string;
	align?: "left" | "center";
}

const props = withDefaults(defineProps<PawsHeadingProps>(), {
	size: "sm",
	fontWeight: "medium",
	align: "left"
});

const size = computed(() => ({
	[styles.sizeSm]: props.size === "sm",
	[styles.sizeLg]: props.size === "lg",
	[styles.sizeXl]: props.size === "xl"
}));
const align = computed(() => ({
	[styles.alignLeft]: props.align === "left",
	[styles.alignCenter]: props.align === "center"
}));
</script>

<template>
	<h2
		:style="{ '--paws-heading--font-weight': props.fontWeight }"
		:class="[styles.heading, size, fontWeight, align]"
	>
		<slot />
	</h2>
</template>
