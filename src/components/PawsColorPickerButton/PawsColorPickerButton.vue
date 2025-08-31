<script setup lang="ts">
import { computed } from "vue";

import styles from "./PawsColorPickerButton.module.css";

export interface PawsColorPickerButtonProps {
	color: string;
	active?: boolean;
	onClick?: () => void;
}

const { color } = defineProps<PawsColorPickerButtonProps>();

/**
 * Computes an adjusted color for an active border based on the input color.
 * The color is validated as a hex code, converted to RGB,
 *   then to HSL for manipulation.
 * The lightness is adjusted based on the luminance
 *   to create a contrasting active border color
 *   (darkening light colors or lightening dark colors),
 *   and the result is converted back to a hex color.
 *
 * @returns {string} A hex color string (e.g., "#RRGGBB")
 *   representing the adjusted active border color.
 *   Returns "#000000" if the input color is invalid.
 */
const activeColor = computed(() => {
	// Ensure the color is a valid hex
	let hex = color.startsWith("#") ? color.slice(1) : color;
	if (hex.length === 3)
		hex = hex
			.split("")
			.map(c => c + c)
			.join("");

	if (!/^[0-9A-Fa-f]{6}$/.test(hex)) return "#000000"; // Fallback color

	const r = parseInt(hex.slice(0, 2), 16);
	const g = parseInt(hex.slice(2, 4), 16);
	const b = parseInt(hex.slice(4, 6), 16);

	// Calculate relative luminance to determine if the color is light or dark
	// Using WCAG luminance formula: (0.299 * R + 0.587 * G + 0.114 * B)
	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

	// Convert RGB to HSL for easier manipulation
	const rNorm = r / 255;
	const gNorm = g / 255;
	const bNorm = b / 255;

	const max = Math.max(rNorm, gNorm, bNorm);
	const min = Math.min(rNorm, gNorm, bNorm);

	let h = 0;
	let s = 0;
	const l = (max + min) / 2;

	if (max !== min) {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case rNorm:
				h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
				break;
			case gNorm:
				h = (bNorm - rNorm) / d + 2;
				break;
			case bNorm:
				h = (rNorm - gNorm) / d + 4;
				break;
		}
		h /= 6;
	}

	// Adjust lightness for the active border color
	// If the color is light (luminance > 0.5), darken it; if dark, lighten it
	const lAdjust = luminance > 0.5 ? l - 0.2 : l + 0.2;
	const newLightness = Math.max(0, Math.min(1, lAdjust));

	// Convert HSL back to RGB
	const hue2rgb = (p: number, q: number, t: number) => {
		if (t < 0) t += 1;
		if (t > 1) t -= 1;
		if (t < 1 / 6) return p + (q - p) * 6 * t;
		if (t < 1 / 2) return q;
		if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
		return p;
	};

	const q =
		newLightness < 0.5
			? newLightness * (1 + s)
			: newLightness + s - newLightness * s;
	const p = 2 * newLightness - q;
	const rNew = Math.round(hue2rgb(p, q, h + 1 / 3) * 255);
	const gNew = Math.round(hue2rgb(p, q, h) * 255);
	const bNew = Math.round(hue2rgb(p, q, h - 1 / 3) * 255);

	// Convert back to hex
	return `#${((1 << 24) + (rNew << 16) + (gNew << 8) + bNew).toString(16).slice(1).padStart(6, "0")}`;
});
</script>

<template>
	<button
		:style="{
			'--paws-color-picker-button--color': color,
			'--paws-color-picker-button--active-color': activeColor
		}"
		:class="[styles.pawsColorPickerButton, { [styles.active]: active }]"
		@click="onClick"
	></button>
</template>
