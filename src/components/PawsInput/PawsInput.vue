<!-- src/components/PawsInput/PawsInput.vue -->
<template>
  <div :class="styles.inputWrapper">
    <span v-if="hasIconSlot" :class="styles.iconAdornment">
      <slot name="icon"></slot>
    </span>
    <input
      v-model="model"
      type="text"
      :class="[styles.pawsInput, inputClasses]"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";

// Import the CSS module. Vite will process this and provide a 'styles' object.
import styles from "./PawsInput.module.css";

// The logic remains the same, only the class application changes.
const model = defineModel<string>();

defineProps<{
  placeholder?: string;
  disabled?: boolean;
}>();

const slots = useSlots();
const hasIconSlot = computed(() => !!slots.icon);

// Create a computed object for dynamic classes, just like in the PawsButton example.
const inputClasses = computed(() => {
  return {
    [styles.withIcon]: hasIconSlot.value,
  };
});
</script>
