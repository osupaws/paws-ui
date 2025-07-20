<template>
  <button :class="[styles.pawsButton, buttonClass]">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

import styles from "./PawsButton.module.css";
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "primary",
  },
});
const buttonClass = computed(() => {
  return {
    [styles.primary]: props.variant === "primary",
    [styles.secondary]: props.variant === "secondary",
  };
});
</script>

<style scoped></style>
