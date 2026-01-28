<script lang="ts">
export interface PawsInstallButtonProps {
	/**
	 * Main label text (e.g. "Install")
	 */
	label?: string;
	/**
	 * Label text during processing (e.g. "Installing...")
	 */
	workingLabel?: string;
	/**
	 * Current state of the button
	 */
	state?: "idle" | "working";
	/**
	 * Progress percentage (0-100)
	 */
	progress?: number;
}
</script>

<script setup lang="ts">
import { computed } from "vue";

import styles from "./PawsInstallButton.module.css";

const props = withDefaults(defineProps<PawsInstallButtonProps>(), {
	label: "install",
	workingLabel: "installing...",
	state: "idle",
	progress: 0
});

const emit = defineEmits<{
	(e: "click", payload: MouseEvent): void;
}>();

const isWorking = computed(() => props.state === "working");

const handleClick = (e: MouseEvent) => {
	if (!isWorking.value) {
		emit("click", e);
	}
};
</script>

<template>
	<button
		:class="[styles.installButton, { [styles.working]: isWorking }]"
		data-paws-ui="PawsInstallButton"
		@click="handleClick"
	>
		<div
			v-if="isWorking"
			:class="styles.progressBar"
			:style="{ width: `${progress}%` }"
		/>
		<span :class="styles.label">
			{{ isWorking ? workingLabel : label }}
		</span>
	</button>
</template>
