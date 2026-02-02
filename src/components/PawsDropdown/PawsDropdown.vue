<script setup lang="ts">
import { computed, ref, useSlots } from "vue";

import ArrowIcon from "@/components/Icon/ArrowIcon.vue";

import { vPawsTooltip } from "../../directives/vTooltip";
import styles from "./PawsDropdown.module.css";

interface Props {
	placeholder?: string;
	disabled?: boolean;
	options?: string[];
	tooltip?: string;
	label?: string; // Information/Label shown in the darkened area on the left
	size?: "normal" | "compact";
}

const model = defineModel<string>();

const props = withDefaults(defineProps<Props>(), {
	placeholder: "select...",
	disabled: false,
	options: () => [],
	tooltip: "",
	label: "",
	size: "normal"
});

const slots = useSlots();
const hasIconSlot = computed(() => !!slots.icon);
const hasLeftContent = computed(() => hasIconSlot.value || !!props.label);

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
		v-paws-tooltip="tooltip"
		:class="[
			styles.dropdownWrapper,
			{
				[styles.disabled]: disabled,
				[styles.open]: isOpen,
				[styles.compact]: size === 'compact'
			}
		]"
		data-paws-ui="PawsDropdown"
	>
		<button
			:class="styles.dropdownButton"
			:disabled="disabled"
			type="button"
			data-paws-part="button"
			@click="toggleDropdown"
		>
			<div
				v-if="hasLeftContent"
				:class="styles.iconWrapper"
				data-paws-part="label-area"
			>
				<slot name="icon" />
				<span v-if="label" :class="styles.labelText">{{ label }}</span>
			</div>
			<span :class="styles.selectedOption">{{ model || placeholder }}</span>
			<ArrowIcon :class="[styles.arrow, { [styles.rotate]: isOpen }]" />
		</button>

		<div
			:class="[styles.optionsWrapper, { [styles.open]: isOpen }]"
			data-paws-part="options"
		>
			<div
				v-for="option in options"
				:key="option"
				:class="styles.option"
				@click="selectOption(option)"
			>
				{{ option }}
			</div>
		</div>
	</div>
</template>
