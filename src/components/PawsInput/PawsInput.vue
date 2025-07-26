<script setup lang="ts">
import { computed, ref, useSlots } from "vue";

import styles from "./PawsInput.module.css";
import PawsHeading from "../PawsHeading/PawsHeading.vue";

const model = defineModel<string>();

const props = defineProps<{
	placeholder?: string;
	disabled?: boolean;
	isIconClickable?: boolean;
	buttonText?: string;
  title?: string;
}>();

const emit = defineEmits<{ (e: "icon-click"): void }>();

const slots = useSlots();
const hasIconSlot = computed(() => !!slots.icon);

const isFocused = ref(false);

const onIconClick = (): void => {
	if (props.isIconClickable) {
		emit("icon-click");
	}
};
</script>

<template>
  <div :class="styles.wrapper">
    <PawsHeading v-if="title" size="sm" :class="styles.title">{{ title }}</PawsHeading>
	  <div
		  :class="[
			  styles.inputWrapper,
			  { [styles.disabled]: disabled, [styles.focused]: isFocused },
		  ]"
	  >
		  <button
			  v-if="hasIconSlot"
			  :class="[
				  styles.adornmentButton,
				  { [styles.nonClickable]: !isIconClickable },
			  ]"
			  :disabled="disabled"
			  @click="onIconClick"
		  >
			  <slot name="icon"></slot>

			  <span v-if="buttonText" :class="styles.buttonText">
				  {{ buttonText }}
			  </span>
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
  </div>
</template>
