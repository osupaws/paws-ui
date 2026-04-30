<script setup lang="ts">
import { onMounted, onUnmounted, watch } from "vue";

import CloseIcon from "../Icon/CloseIcon.vue";
import PawsEdgeGradient from "../PawsEdgeGradient/PawsEdgeGradient.vue";
import PawsHeading from "../PawsHeading/PawsHeading.vue";
import PawsSubButton from "../PawsSubButton/PawsSubButton.vue";
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
	/** Standard title for the modal. Used if 'heading' slot is not provided. */
	title?: string;
	/** Whether to show a default close button. Default: true. */
	showCloseButton?: boolean;
}

const props = withDefaults(defineProps<PawsModalProps>(), {
	isOpen: false,
	overlayColor: "#00000040",
	closeOnOverlayClick: true,
	closeOnEsc: true,
	teleportTo: "body",
	title: "",
	showCloseButton: true
});

const emit = defineEmits<{ (e: "close"): void }>();

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

const handleGlobalClose = () => {
	emit("close");
};

onMounted(() => {
	console.log("[PawsModal] Mounted. isOpen:", props.isOpen);
	window.addEventListener("keydown", handleEscape);
	window.addEventListener("paws:close-modals", handleGlobalClose);
});

watch(
	() => props.isOpen,
	val => {
		console.log("[PawsModal] isOpen changed:", val);
	}
);

onUnmounted(() => {
	window.removeEventListener("keydown", handleEscape);
	window.removeEventListener("paws:close-modals", handleGlobalClose);
});
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
				:class="styles.backdrop"
				:style="{ backgroundColor: overlayColor }"
				@click.self="handleBackdropClick"
			>
				<div :class="styles.modal" data-paws-ui="PawsModal">
					<div :class="styles.header">
						<div :class="styles.headingWrapper">
							<slot name="heading">
								<PawsHeading v-if="title" size="lg">
									{{ title }}
								</PawsHeading>
							</slot>
						</div>
						<div :class="styles.actions">
							<slot name="actions">
								<PawsSubButton
									v-if="showCloseButton"
									size="medium"
									text="close"
									@click="emit('close')"
								>
									<template #icon>
										<CloseIcon />
									</template>
								</PawsSubButton>
							</slot>
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
