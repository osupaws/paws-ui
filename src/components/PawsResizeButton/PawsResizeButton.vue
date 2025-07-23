<script setup lang="ts">
import { ref, computed } from 'vue'
import styles from './PawsResizeButton.module.css'
import ArrowIcon from '@/icons/ArrowIcon.vue'

const props = defineProps({
  initialState: {
    type: String,
    default: 'compact',
  },
})

const buttonState = ref(props.initialState)

const toggleState = () => {
  buttonState.value = buttonState.value === 'compact' ? 'wide' : 'compact'
}

const arrowClass = computed(() => ({
  [styles.arrow]: true,
  [styles.wide]: buttonState.value === 'wide',
}))
</script>

<template>
  <button :class="[styles.resizeButton, styles[buttonState]]" @click="toggleState">
    <ArrowIcon :class="arrowClass" />
  </button>
</template>
