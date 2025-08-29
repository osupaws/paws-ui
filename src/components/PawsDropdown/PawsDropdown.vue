<script setup lang="ts">
import { computed, ref, useSlots } from "vue";

import ArrowIcon from "@/components/Icon/ArrowIcon.vue";

import styles from "./PawsDropdown.module.css";

const model = defineModel<string>();

const props = defineProps<{
	placeholder?: string;
	disabled?: boolean;
	options?: string[];
}>();

const slots = useSlots();
const hasIconSlot = computed(() => !!slots.icon);

const isOpen = ref(false);

const toggleDropdown = () => {
	if (!props.disabled) {
		isOpen.value = !isOpen.value;
	}
};

const selectOption = (option: string) => {
	model.value = option;
	isOpen.value = false;
};
</script>

<template>
	<div
		:class="[
			styles.dropdownWrapper,
			{ [styles.disabled]: disabled, [styles.open]: isOpen }
		]"
	>
		<button
			:class="styles.dropdownButton"
			:disabled="disabled"
			@click="toggleDropdown"
		>
			<div v-if="hasIconSlot" :class="styles.iconWrapper">
				<slot name="icon" />
			</div>
			<span :class="styles.selectedOption">{{ model || placeholder }}</span>
			<ArrowIcon :class="[styles.arrow, { [styles.rotate]: isOpen }]" />
		</button>
		<div :class="[styles.optionsWrapper, { [styles.open]: isOpen }]">
			<div
				v-for="option in options"
				:key="option"
				class="paws-dropdown-option"
				@click="selectOption(option)"
			>
				{{ option }}
			</div>
		</div>
	</div>
</template>
