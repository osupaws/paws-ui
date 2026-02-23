<script lang="ts">
export * from "./context";
</script>

<script setup lang="ts">
import { onMounted, onUnmounted, provide, ref } from "vue";

import { type PawsShellState, PawsShellStateKey } from "./context";
import styles from "./PawsPluginShell.module.css";

export interface PawsPluginShellProps {
	/**
	 * Apply outer padding. Defaults to true.
	 */
	padded?: boolean;
}

withDefaults(defineProps<PawsPluginShellProps>(), {
	padded: true
});

const shellState = ref<PawsShellState>({
	theme: "dark",
	mode: "unknown",
	isFocused: true
});

provide(PawsShellStateKey, shellState);

let unsubscribeTheme: (() => void) | void;
let unsubscribeMode: (() => void) | void;
let unsubscribeLifecycle: (() => void) | void;

onMounted(() => {
	// Notify parent that the plugin UI is ready
	window.paws?.notifyParent?.("paws:client-ready");

	// Subscribe to system events
	if (window.paws?.on) {
		unsubscribeTheme = window.paws.on(
			"theme-changed",
			(theme: "light" | "dark") => {
				shellState.value.theme = theme;
			}
		);

		unsubscribeMode = window.paws.on(
			"mode-changed",
			(mode: "lazer" | "stable") => {
				shellState.value.mode = mode;
			}
		);

		unsubscribeLifecycle = window.paws.on(
			"lifecycle",
			(event: { type: string }) => {
				if (event.type === "focus") {
					shellState.value.isFocused = true;
				} else if (event.type === "blur") {
					shellState.value.isFocused = false;
				}
			}
		);
	}
});

onUnmounted(() => {
	if (typeof unsubscribeTheme === "function") unsubscribeTheme();
	if (typeof unsubscribeMode === "function") unsubscribeMode();
	if (typeof unsubscribeLifecycle === "function") unsubscribeLifecycle();
});
</script>

<template>
	<div
		:class="[styles.pluginShell, { [styles.padded]: padded }]"
		data-paws-ui="PawsPluginShell"
	>
		<slot />
	</div>
</template>
