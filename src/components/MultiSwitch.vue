<template>
  <div ref="switchRef" :class="switchClass" class="multi-switch">
    <!-- Highlighter Element -->
    <div class="multi-switch__highlighter" :style="highlighterStyle" />

    <!-- Option Buttons -->
    <button
      v-for="option in options"
      :key="option"
      :ref="(el) => (optionRefs[option] = el as HTMLButtonElement)"
      class="multi-switch__option"
      :class="{ 'multi-switch__option--active': modelValue === option }"
      type="button"
      @click="selectOption(option)"
    >
      {{ option }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted, computed } from 'vue'

// --- THE FIX: PART 1 ---
// Define the props using a TypeScript interface for full type safety.
interface MultiSwitchProps {
  options: string[]
  modelValue: string
  size?: 'small' | 'large' // Use a union type for strictness, make it optional
}

// Use `withDefaults` to provide default values for the type-based props.
const props = withDefaults(defineProps<MultiSwitchProps>(), {
  size: 'small',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

// --- THE FIX: PART 2 ---
// This computed property will now work correctly because `props.size` is properly typed as a string.
const switchClass = computed(() => {
  return {
    '--small': props.size === 'small',
    '--large': props.size === 'large',
  }
})

// Refs for DOM elements
const switchRef = ref<HTMLDivElement | null>(null)
const optionRefs = reactive<Record<string, HTMLButtonElement | null>>({})

// Reactive style for the highlighter
const highlighterStyle = ref<{
  width?: string
  height?: string
  transform?: string
}>({})

const selectOption = (option: string) => {
  emit('update:modelValue', option)
}

// The rest of the script requires NO CHANGES.
const updateHighlighter = () => {
  if (!switchRef.value || !props.modelValue || !optionRefs[props.modelValue]) {
    highlighterStyle.value = { width: '0', transform: 'scaleX(0)' }
    return
  }

  const switchRect = switchRef.value.getBoundingClientRect()
  const activeOptionEl = optionRefs[props.modelValue]

  if (activeOptionEl) {
    const optionRect = activeOptionEl.getBoundingClientRect()
    const relativeLeft = optionRect.left - switchRect.left

    highlighterStyle.value = {
      width: `${optionRect.width}px`,
      height: `${optionRect.height}px`,
      transform: `translateX(${relativeLeft}px)`,
    }
  }
}

watch(
  () => props.modelValue,
  () => {
    updateHighlighter()
  },
  { flush: 'post' },
)

onMounted(() => {
  if (!props.options.includes(props.modelValue)) {
    console.warn(
      `[MultiSwitch] Initial modelValue "${props.modelValue}" is not in the options array. Defaulting to the first option.`,
    )
    if (props.options.length > 0) {
      selectOption(props.options[0])
    }
  } else {
    updateHighlighter()
  }
})
</script>

<style scoped>
/* --- BASE STYLES (shared by all sizes) --- */
.multi-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  user-select: none;
}

.multi-switch__highlighter {
  position: absolute;
  /* left: 0; */
  background-color: var(--paws-color-accent-primary);
  box-sizing: border-box;
  transition:
    transform 0.3s ease-in-out,
    width 0.3s ease-in-out;
}

.multi-switch__option {
  appearance: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: var(--paws-color-text-primary);
  white-space: nowrap;
  position: relative;
  z-index: 1;
  outline: none;
}

/* --- SMALL VARIANT (24px height) --- */
.multi-switch.--small {
  height: 24px;
  background-color: var(--paws-color-bg-lighter);
  border-radius: 4px;
  padding: 2px;
}
.multi-switch.--small .multi-switch__highlighter {
  top: 2px;
  border-radius: 3px;
}
.multi-switch.--small .multi-switch__option {
  height: 20px;
  padding: 0 4px;
  font-size: 14px;
  line-height: 20px;
  transform: translateY(-1px);
}

/* --- LARGE VARIANT (48px height) --- */
.multi-switch.--large {
  height: 48px;
  background-color: var(--paws-color-bg-lighter);
  border-radius: 6px;
  padding: 4px;
}
.multi-switch.--large .multi-switch__highlighter {
  top: 4px;
  border-radius: 5px;
}
.multi-switch.--large .multi-switch__option {
  height: 40px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 40px;
}
</style>
