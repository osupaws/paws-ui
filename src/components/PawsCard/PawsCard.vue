<template>
  <div :class="styles.pawsCard">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import styles from "./PawsCard.module.css";
</script>
