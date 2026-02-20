<script setup lang="ts">
import { computed } from "vue";

import styles from "./PawsCardNew.module.css";

export interface PawsCardNewProps {
	appearance?: "dark" | "light"; // Visual style
	mode?: "empty" | "simple" | "titled"; // Structural layout
}

const props = withDefaults(defineProps<PawsCardNewProps>(), {
	appearance: "dark",
	mode: "simple"
});

const appearanceClass = computed(() => {
	switch (props.appearance) {
		case "light":
			return styles.appearanceLight;
		case "dark":
		default:
			return styles.appearanceDark;
	}
});
</script>

<template>
	<div :class="[styles.card, appearanceClass]" data-paws-ui="PawsCardNew">
		<!-- Titled Mode -->
		<template v-if="mode === 'titled'">
			<div :class="styles.header">
				<div :class="styles.headingWrapper">
					<slot name="heading"></slot>
				</div>
				<div v-if="$slots.actions" :class="styles.actions">
					<slot name="actions"></slot>
				</div>
			</div>
			<div :class="styles.contentTitled">
				<slot></slot>
			</div>
		</template>

		<!-- Simple Mode (Default) -->
		<template v-else-if="mode === 'simple'">
			<div :class="styles.contentSimple">
				<slot></slot>
			</div>
		</template>

		<!-- Empty Mode -->
		<template v-else>
			<slot></slot>
		</template>
	</div>
</template>
