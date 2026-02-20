<script setup lang="ts">
import { ref } from "vue";

import ArrowIcon from "@/components/Icon/ArrowIcon.vue";

import styles from "./PawsSpoilerCard.module.css";

export interface PawsSpoilerCardProps {
	/**
	 * Initial expanded state
	 */
	isExpanded?: boolean;
}

const props = withDefaults(defineProps<PawsSpoilerCardProps>(), {
	isExpanded: false
});

const emit = defineEmits<{
	(e: "update:isExpanded", value: boolean): void;
	(e: "toggle", value: boolean): void;
}>();

const expanded = ref(props.isExpanded);

const toggle = () => {
	expanded.value = !expanded.value;
	emit("update:isExpanded", expanded.value);
	emit("toggle", expanded.value);
};
</script>

<template>
	<div :class="styles.spoilerCard" data-paws-ui="PawsSpoilerCard">
		<div :class="styles.header" data-paws-part="header" @click="toggle">
			<div :class="styles.headerContent">
				<slot name="header"> spoiler card </slot>
			</div>
			<div :class="[styles.arrow, { [styles.rotate]: !expanded }]">
				<ArrowIcon width="18px" height="18px" />
			</div>
		</div>

		<div
			:class="[styles.contentWrapper, { [styles.expandedWrapper]: expanded }]"
		>
			<div :class="styles.contentInner">
				<div :class="styles.content" data-paws-part="content">
					<slot> spoiler content </slot>
				</div>
			</div>
		</div>
	</div>
</template>
