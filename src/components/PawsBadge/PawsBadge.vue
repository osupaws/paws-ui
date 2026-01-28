<script lang="ts">
export interface PawsBadgeProps {
	/**
	 * Text content of the badge
	 */
	label?: string;
}
</script>

<script setup lang="ts">
import styles from "./PawsBadge.module.css";

defineProps<PawsBadgeProps>();
</script>

<template>
	<div :class="styles.badge" data-paws-ui="PawsBadge">
		<span :class="styles.label">
			<slot>{{ label }}</slot>
		</span>
	</div>
</template>
