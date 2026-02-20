<script setup lang="ts">
import styles from "./PawsCard.module.css";

export interface PawsCardProps {
	mode?: "empty" | "simple" | "titled"; // Structural layout
}

withDefaults(defineProps<PawsCardProps>(), {
	mode: "simple"
});
</script>

<template>
	<div :class="styles.card" data-paws-ui="PawsCard">
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
