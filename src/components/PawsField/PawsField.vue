<script setup lang="ts">
import styles from "./PawsField.module.css";
</script>

<template>
	<div :class="styles.field" data-paws-ui="PawsField">
		<slot />
	</div>
</template>
