<script setup lang="ts">
import { computed, useSlots } from "vue";

import styles from "./PawsCard.module.css";

export interface PawsCardProps {
	appearance?: "dark" | "light";
	variant?: "default" | "compact";
}

const props = withDefaults(defineProps<PawsCardProps>(), {
	appearance: "dark",
	variant: "default"
});

const slots = useSlots();

const hasHeading = !!slots.heading;

const appearance = computed(() => ({
	[styles.appearanceDark]: props.appearance === "dark",
	[styles.appearanceLight]: props.appearance === "light"
}));
</script>

<template>
	<div
		:class="[
			styles.card,
			appearance,
			{ [styles.compact]: variant === 'compact' }
		]"
		data-paws-ui="PawsCard"
	>
		<slot name="heading" />

		<div
			:class="[
				styles.cardContent,
				{ [styles.cardContentNoHeading]: !hasHeading }
			]"
			data-paws-part="content"
		>
			<slot />
		</div>
	</div>
</template>
