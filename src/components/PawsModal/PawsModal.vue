<script setup lang="ts">
import PawsEdgeGradient from "../PawsEdgeGradient/PawsEdgeGradient.vue";
import styles from "./PawsModal.module.css";

export interface PawsModalProps {}

withDefaults(defineProps<PawsModalProps>(), {});
</script>

<template>
	<div :class="styles.modal" data-paws-ui="PawsModal">
		<!-- Header with Title and Actions -->
		<div :class="styles.header">
			<div :class="styles.headingWrapper">
				<slot name="heading"></slot>
			</div>
			<div v-if="$slots.actions" :class="styles.actions">
				<slot name="actions"></slot>
			</div>
		</div>

		<!-- Scrollable Content Area -->
		<div :class="styles.contentAreaWrapper">
			<PawsEdgeGradient side="both" color="var(--paws-color-bg-primary)" />
			<div :class="styles.contentArea">
				<slot></slot>
			</div>
		</div>
	</div>
</template>
