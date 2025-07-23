<template>
	<button
		:class="[styles.pawsPluginButton, stateClass]"
		:disabled="state === 'disabled'"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
import { computed } from "vue";

import styles from "./PawsPluginButton.module.css";

const props = withDefaults(
	defineProps<{ state?: "default" | "active" | "disabled" | "processing" }>(),
	{
		state: "default",
	},
);

const stateClass = computed(() => {
	return {
		[styles.active]: props.state === "active",
		[styles.disabled]: props.state === "disabled",
		[styles.processing]: props.state === "processing",
	};
});
</script>
