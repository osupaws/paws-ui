<script setup lang="ts">
import { computed, ref } from "vue";

import ArrowIcon from "@/components/Icon/ArrowIcon.vue";

import styles from "./PawsResizeButton.module.css";

const props = defineProps({
	initialState: {
		type: String,
		default: "compact"
	}
});

const buttonState = ref(props.initialState);

const toggleState = (): void => {
	buttonState.value = buttonState.value === "compact" ? "wide" : "compact";
};

const arrowClass = computed(() => ({
	[styles.arrow]: true,
	[styles.wide]: buttonState.value === "wide"
}));
</script>

<template>
	<button
		:class="[styles.resizeButton, styles[buttonState]]"
		@click="toggleState"
	>
		<ArrowIcon :class="arrowClass" />
	</button>
</template>
