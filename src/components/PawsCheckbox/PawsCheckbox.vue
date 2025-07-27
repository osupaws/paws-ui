<script setup lang="ts">
import styles from "./PawsCheckbox.module.css";

export interface PawsCheckboxProps {
	label: string;
	checked?: boolean;
}

withDefaults(defineProps<PawsCheckboxProps>(), {
	checked: false,
});
</script>

<template>
	<label :class="styles.checkbox">
		<input type="checkbox" checked="checked" />
		<span :class="styles.checkmark"></span>
		<span>{{ label }}</span>
	</label>
</template>
