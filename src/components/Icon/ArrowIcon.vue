<script setup lang="ts">
import type { BaseIcon } from "@components/Icon/icon";

const {
	color = "currentColor",
	width = "20px",
	height = "20px",
} = defineProps<BaseIcon>();
</script>

<template>
	<svg
		:width="width"
		:height="height"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12.5 15L7.5 10L12.5 5"
			:stroke="color"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			fill="none"
		/>
	</svg>
</template>
