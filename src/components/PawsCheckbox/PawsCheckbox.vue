<script setup lang="ts">
import { vPawsTooltip } from "../../directives/vTooltip";
import styles from "./PawsCheckbox.module.css";

export interface PawsCheckboxProps {
	label: string;
	tooltip?: string;
	disabled?: boolean;
}

const model = defineModel<boolean>({
	default: false
});

withDefaults(defineProps<PawsCheckboxProps>(), {
	tooltip: "",
	disabled: false
});
</script>

<template>
	<label
		v-paws-tooltip="tooltip"
		:class="[
			styles.pawsCheckbox,
			{ [styles.checked]: model, [styles.disabled]: disabled }
		]"
		data-paws-ui="PawsCheckbox"
	>
		<input
			v-model="model"
			type="checkbox"
			:class="styles.input"
			:disabled="disabled"
		/>
		<div :class="styles.square" data-paws-part="square" />
		<span :class="styles.label" data-paws-part="label">{{ label }}</span>
	</label>
</template>
