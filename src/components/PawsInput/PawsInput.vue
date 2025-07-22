<template>
  <div :class="styles.inputWrapper">
    <span
      v-if="hasIconSlot"
      :class="[styles.iconAdornment, { [styles.clickable]: isIconClickable }]"
      @click="onIconClick"
    >
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

import styles from "./PawsInput.module.css";

const model = defineModel<string>();

const props = defineProps<{
  placeholder?: string;
  disabled?: boolean;
  isIconClickable?: boolean;
}>();

const emit = defineEmits<{ (e: "icon-click"): void }>();

const slots = useSlots();
const hasIconSlot = computed(() => !!slots.icon);

const inputClasses = computed(() => {
  return {
    [styles.withIcon]: hasIconSlot.value,
  };
});

const onIconClick = () => {
  if (props.isIconClickable) {
    emit("icon-click");
  }
};
</script>
