<template>
  <div :class="[styles.inputWrapper, { [styles.disabled]: disabled, [styles.focused]: isFocused }]">
    <button
      v-if="hasIconSlot"
      :class="[styles.adornmentButton, { [styles.nonClickable]: !isIconClickable }]"
      @click="onIconClick"
      :disabled="disabled"
    >
      <slot name="icon"></slot>
      <span v-if="buttonText" :class="styles.buttonText">{{ buttonText }}</span>
    </button>
    <input
      v-model="model"
      type="text"
      :class="styles.pawsInput"
      :placeholder="placeholder"
      :disabled="disabled"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, ref } from "vue";
import styles from "./PawsInput.module.css";

const model = defineModel<string>();

const props = defineProps<{
  placeholder?: string;
  disabled?: boolean;
  isIconClickable?: boolean;
  buttonText?: string;
}>();

const emit = defineEmits<{ (e: "icon-click"): void }>();

const slots = useSlots();
const hasIconSlot = computed(() => !!slots.icon);

const isFocused = ref(false);

const onIconClick = () => {
  if (props.isIconClickable) {
    emit("icon-click");
  }
};
</script>