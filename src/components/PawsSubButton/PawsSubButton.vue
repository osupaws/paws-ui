<template>
	<button
		:class="[
			styles.subButton,
			{
				[styles.large]: size === 'large',
				[styles.medium]: size === 'medium'
			}
		]"
		data-paws-ui="PawsSubButton"
	>
		<div :class="styles.iconContainer">
			<slot name="icon"></slot>
		</div>
	</button>
</template>

<script setup lang="ts">
import styles from "./PawsSubButton.module.css";

interface Props {
	size?: "large" | "medium";
}

withDefaults(defineProps<Props>(), {
	size: "large"
});
</script>

<style scoped></style>
