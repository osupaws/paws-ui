<script setup lang="ts">
import { computed } from "vue";

import { tooltipState } from "../../services/TooltipService";
import styles from "./PawsTooltip.module.css";

const tooltipStyle = computed(() => ({
	left: `${tooltipState.x}px`,
	top: `${tooltipState.y}px`
}));

const themeClass = computed(() => `paws--${tooltipState.theme}-theme`);
const positionClass = computed(() =>
	(tooltipState as any).position === "top" ? styles.top : styles.bottom
);
</script>

<template>
	<Teleport to="body">
		<div :class="themeClass">
			<Transition name="paws-tooltip">
				<div
					v-if="tooltipState.visible && tooltipState.text"
					:class="[styles.tooltip, positionClass]"
					:style="tooltipStyle"
					data-paws-ui="PawsTooltip"
				>
					{{ tooltipState.text }}
				</div>
			</Transition>
		</div>
	</Teleport>
</template>

<style scoped>
.paws-tooltip-enter-active,
.paws-tooltip-leave-active {
	transition: opacity 0.15s ease;
}

.paws-tooltip-enter-from,
.paws-tooltip-leave-to {
	opacity: 0;
}
</style>
