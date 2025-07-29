<script setup lang="ts">
import styles from "./PawsCheckbox.module.css";

const model = defineModel<boolean>();

defineProps<{
	label: string;
}>();
</script>

<template>
	<label :class="styles.pawsCheckbox">
		<input type="checkbox" v-model="model" :class="styles.input" />
		<span :class="styles.checkbox"></span>
		<span :class="styles.label">{{ label }}</span>
	</label>
</template>
