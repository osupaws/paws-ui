<script setup lang="ts">
import { computed, ref, useSlots } from "vue";

import { vPawsTooltip } from "../../directives/vTooltip";
import styles from "./PawsInput.module.css";

interface Props {
	placeholder?: string;
	disabled?: boolean;
	isIconClickable?: boolean; // If true, the adornment acts as a button
	buttonText?: string;
	title?: string;
	tooltip?: string;
}

const model = defineModel<string>();

const props = withDefaults(defineProps<Props>(), {
	placeholder: "",
	disabled: false,
	isIconClickable: false,
	buttonText: "",
	title: "",
	tooltip: ""
});

const emit = defineEmits<{ (e: "icon-click"): void }>();

const slots = useSlots();
const hasIconSlot = computed(() => !!slots.icon);
const hasAdornment = computed(() => hasIconSlot.value || !!props.buttonText);

const isFocused = ref(false);

const onIconClick = (): void => {
	if (props.isIconClickable && !props.disabled) {
		emit("icon-click");
	}
};
</script>

<template>
	<div :class="styles.wrapper" data-paws-ui="PawsInput">
		<span v-if="title" :class="styles.title">
			{{ title }}
		</span>
		<div
			v-paws-tooltip="tooltip"
			:class="[
				styles.inputWrapper,
				{ [styles.disabled]: disabled, [styles.focused]: isFocused }
			]"
		>
			<!-- Adornment area (Icon + Text) -->
			<component
				:is="isIconClickable ? 'button' : 'div'"
				v-if="hasAdornment"
				:class="styles.adornment"
				:disabled="disabled"
				type="button"
				data-paws-part="adornment"
				@click="onIconClick"
			>
				<slot name="icon" />
				<span v-if="buttonText" :class="styles.adornmentText">
					{{ buttonText }}
				</span>
			</component>

			<input
				v-model="model"
				type="text"
				:class="styles.pawsInput"
				:placeholder="placeholder"
				:disabled="disabled"
				data-paws-part="input"
				@focus="isFocused = true"
				@blur="isFocused = false"
			/>
		</div>
	</div>
</template>
