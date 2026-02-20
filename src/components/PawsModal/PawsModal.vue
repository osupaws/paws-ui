<script setup lang="ts">
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
			<div :class="styles.maskWrapper">
				<div :class="styles.topShield"></div>
				<div :class="styles.topGradient"></div>
			</div>
			<div :class="styles.contentArea">
				<slot></slot>
			</div>
			<div :class="styles.bottomMaskWrapper">
				<div :class="styles.bottomGradient"></div>
				<div :class="styles.bottomShield"></div>
			</div>
		</div>
	</div>
</template>
