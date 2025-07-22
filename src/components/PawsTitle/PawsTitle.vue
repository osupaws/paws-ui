<template>
  <h1 :class="[styles.pawsTitle, titleClass]">
    {{ label }}
  </h1>
</template>

<script setup lang="ts">
import { computed } from "vue";
import styles from "./PawsTitle.module.css";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "title",
  },
});

const titleClass = computed(() => {
  return {
    [styles.subtitle]: props.variant === "subtitle",
  };
});
</script>
