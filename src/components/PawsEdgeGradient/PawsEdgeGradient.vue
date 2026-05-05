<script setup lang="ts">
import styles from "./PawsEdgeGradient.module.css";

export interface PawsEdgeGradientProps {
	/**
	 * Which side(s) to show the gradient on.
	 * @default "both"
	 */
	side?: "top" | "bottom" | "both";
}

withDefaults(defineProps<PawsEdgeGradientProps>(), {
	side: "both"
});
</script>

<template>
	<div :class="styles.edgeGradientContainer" data-paws-ui="PawsEdgeGradient">
		<!-- Top Gradient -->
		<div v-if="side === 'top' || side === 'both'" :class="styles.topMask">
			<div :class="styles.shield"></div>
			<div :class="styles.gradient"></div>
		</div>

		<!-- Bottom Gradient -->
		<div v-if="side === 'bottom' || side === 'both'" :class="styles.bottomMask">
			<div :class="styles.gradient"></div>
			<div :class="styles.shield"></div>
		</div>
	</div>
</template>
