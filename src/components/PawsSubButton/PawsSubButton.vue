<template>
	<button
		:class="[
			styles.subButton,
			{
				[styles.large]: size === 'large',
				[styles.medium]: size === 'medium',
				[styles.hasText]: !!text
			}
		]"
		data-paws-ui="PawsSubButton"
	>
		<span v-if="text" :class="styles.text">{{ text }}</span>
		<div v-if="$slots.icon" :class="styles.iconContainer">
			<slot name="icon"></slot>
		</div>
	</button>
</template>

<script setup lang="ts">
import styles from "./PawsSubButton.module.css";

interface Props {
	size?: "large" | "medium";
	text?: string;
}

withDefaults(defineProps<Props>(), {
	size: "large",
	text: ""
});
</script>

<style scoped></style>
