<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";

import PawsEdgeGradient from "../PawsEdgeGradient/PawsEdgeGradient.vue";
import styles from "./PawsModal.module.css";

export interface PawsModalProps {
	/** Controls visibility of the modal */
	isOpen?: boolean;
	/** Backdrop color. Default: rgba(0,0,0,0.4) */
	overlayColor?: string;
	/** Close on backdrop click */
	closeOnOverlayClick?: boolean;
	/** Close on Escape key */
	closeOnEsc?: boolean;
	/** Teleport destination */
	teleportTo?: string;
	/** Explicit theme override ('light' | 'dark'). If not provided, tries to detect from environment. */
	theme?: "light" | "dark";
}

const props = withDefaults(defineProps<PawsModalProps>(), {
	isOpen: false,
	overlayColor: "#00000040",
	closeOnOverlayClick: true,
	closeOnEsc: true,
	teleportTo: "body",
	theme: undefined
});

const emit = defineEmits<{ (e: "close"): void }>();

// Simple theme detection for teleported content
const currentTheme = ref<"light" | "dark">("dark");

const updateTheme = () => {
	if (props.theme) {
		currentTheme.value = props.theme;
		return;
	}
	const html = document.documentElement;
	const { body } = document;
	// Check root levels first, then a broad check for Storybook compatibility
	const isLight =
		html.classList.contains("paws--light-theme") ||
		body.classList.contains("paws--light-theme") ||
		document.querySelector(".paws--light-theme") !== null;

	currentTheme.value = isLight ? "light" : "dark";
};

const handleBackdropClick = (event: MouseEvent) => {
	if (props.closeOnOverlayClick && event.target === event.currentTarget) {
		emit("close");
	}
};

const handleEscape = (event: KeyboardEvent) => {
	if (props.isOpen && props.closeOnEsc && event.key === "Escape") {
		event.stopPropagation();
		emit("close");
	}
};

onMounted(() => {
	window.addEventListener("keydown", handleEscape);
	updateTheme();

	// Create an observer to track theme changes on html/body if needed
	const observer = new MutationObserver(updateTheme);
	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["class"]
	});
	onUnmounted(() => observer.disconnect());
});

onUnmounted(() => {
	window.removeEventListener("keydown", handleEscape);
});

watch(
	() => props.isOpen,
	newValue => {
		if (newValue) {
			document.body.style.overflow = "hidden";
			updateTheme();
		} else {
			document.body.style.overflow = "";
		}
	}
);
</script>

<template>
	<Teleport :to="teleportTo">
		<Transition
			:enter-from-class="styles['modalFade-enter-from']"
			:enter-active-class="styles['modalFade-enter-active']"
			:enter-to-class="styles['modalFade-enter-to']"
			:leave-from-class="styles['modalFade-leave-from']"
			:leave-active-class="styles['modalFade-leave-active']"
			:leave-to-class="styles['modalFade-leave-to']"
		>
			<div
				v-if="isOpen"
				:class="[`paws--${currentTheme}-theme`, styles.backdrop]"
				:style="{ backgroundColor: overlayColor }"
				@click.self="handleBackdropClick"
			>
				<div :class="styles.modal" data-paws-ui="PawsModal">
					<div :class="styles.header">
						<div :class="styles.headingWrapper">
							<slot name="heading"></slot>
						</div>
						<div v-if="$slots.actions" :class="styles.actions">
							<slot name="actions"></slot>
						</div>
					</div>

					<div :class="styles.contentAreaWrapper">
						<PawsEdgeGradient
							side="both"
							color="var(--paws-color-bg-primary)"
						/>
						<div :class="styles.contentArea">
							<slot></slot>
						</div>
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>
