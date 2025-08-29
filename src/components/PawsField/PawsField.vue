<script setup lang="ts">
import styles from "./PawsField.module.css";
</script>

<template>
	<div :class="styles.field">
		<slot />
	</div>
</template>
