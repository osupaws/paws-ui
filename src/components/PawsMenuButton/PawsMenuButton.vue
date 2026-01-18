<script setup lang="ts">
import { vPawsTooltip } from "../../directives/vTooltip";
import styles from "./PawsMenuButton.module.css";

interface Props {
	active?: boolean;
	disabled?: boolean;
	width?: string;
	tooltip?: string;
}

withDefaults(defineProps<Props>(), {
	width: "auto",
	tooltip: ""
});
</script>

<template>
	<button
		v-paws-tooltip="tooltip"
		:class="[styles.pawsMenuButton, { [styles.active]: active }]"
		:disabled="disabled"
		:style="{ width: width }"
	>
		<div v-if="$slots.default" :class="styles.label">
			<slot />
		</div>
		<div v-if="$slots.icon" :class="styles.icon">
			<slot name="icon" />
		</div>
	</button>
</template>
