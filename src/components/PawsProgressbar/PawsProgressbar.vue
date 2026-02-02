<script lang="ts">
export interface PawsProgressbarProps {
	/**
	 * Progress percentage (0-100)
	 */
	progress?: number;
}
</script>

<script setup lang="ts">
import { computed } from "vue";

import styles from "./PawsProgressbar.module.css";

const props = withDefaults(defineProps<PawsProgressbarProps>(), {
	progress: 0
});

const progressStyle = computed(() => {
	const p = Math.max(0, Math.min(100, props.progress));
	return { width: `${p}%` };
});
</script>

<template>
	<div :class="styles.progressbar" data-paws-ui="PawsProgressbar">
		<div :class="styles.fill" :style="progressStyle" />
	</div>
</template>
