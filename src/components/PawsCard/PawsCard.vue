<script setup lang="ts">
import { computed, useSlots } from "vue";

import styles from "./PawsCard.module.css";

export interface PawsCardProps {
	appearance?: "dark" | "light";
}

const props = withDefaults(defineProps<PawsCardProps>(), {
	appearance: "dark",
	headingAlign: "left",
});

const slots = useSlots();

const hasHeading = !!slots.heading;

const appearance = computed(() => ({
	[styles.appearanceDark]: props.appearance === "dark",
	[styles.appearanceLight]: props.appearance === "light",
}));
</script>

<template>
	<div :class="[styles.card, appearance]">
		<slot name="heading" />

		<div
			:class="[
				styles.cardContent,
				{ [styles.cardContentNoHeading]: !hasHeading },
			]"
		>
			<slot />
		</div>
	</div>
</template>
