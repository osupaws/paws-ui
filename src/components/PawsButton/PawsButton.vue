<template>
	<button :class="[styles.pawsButton, buttonClass]" data-paws-ui="PawsButton">
		{{ label }}
	</button>
</template>

<script setup lang="ts">
import { computed } from "vue";

import styles from "./PawsButton.module.css";
const props = defineProps({
	label: {
		type: String,
		required: true
	},
	variant: {
		type: String,
		default: "primary"
	},
	size: {
		type: String,
		default: "normal"
	}
});
const buttonClass = computed(() => {
	return {
		[styles.primary]: props.variant === "primary",
		[styles.secondary]: props.variant === "secondary",
		[styles.small]: props.size === "small"
	};
});
</script>

<style scoped></style>
