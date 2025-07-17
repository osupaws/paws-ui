<!-- src/components/PawsButton.vue -->
<template>
  <button :class="buttonClass" class="paws-button">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// This defines the "props" that can be passed to our component from the outside.
const props = defineProps({
  // The text to display on the button.
  label: {
    type: String,
    required: true,
  },
  // The style variant of the button.
  variant: {
    type: String,
    default: 'primary', // 'primary' or 'secondary'
  },
})

// This is a computed property that generates the correct CSS class based on the variant prop.
const buttonClass = computed(() => {
  return {
    '--primary': props.variant === 'primary',
    '--secondary': props.variant === 'secondary',
  }
})
</script>

<style scoped>
/* "scoped" means these styles ONLY apply to this component. */
.paws-button {
  font-family: 'Wix Madefor Display', sans-serif;
  border: none;
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: filter 0.2s;
}
.paws-button:hover {
  filter: brightness(1.15);
}
/* Style for the primary variant */
.paws-button.--primary {
  background-color: #9f3a55; /* Your accent color */
  font-weight: bold;
}
/* Style for the secondary variant */
.paws-button.--secondary {
  background-color: #5a4f66;
}
</style>
