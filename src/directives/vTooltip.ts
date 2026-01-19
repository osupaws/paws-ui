import type { Directive } from "vue";

import { tooltipState } from "../services/TooltipService";

let tooltipTimeout: number | null = null;

export const vPawsTooltip: Directive<HTMLElement, string | undefined> = {
	mounted(el, binding) {
		const handleMouseEnter = () => {
			if (!tooltipState.showTooltips || !binding.value) return;

			// Clear any existing timeout
			if (tooltipTimeout) clearTimeout(tooltipTimeout);

			tooltipTimeout = window.setTimeout(() => {
				const rect = el.getBoundingClientRect();
				const windowHeight = window.innerHeight;
				const tooltipGap = 8;

				tooltipState.text = binding.value || "";
				tooltipState.x = rect.left + rect.width / 2;

				// Smart positioning: if it doesn't fit below, show it above
				// We assume a max height for now or just check proximity to bottom
				const expectedHeight = 30; // Estimated height
				if (rect.bottom + expectedHeight + tooltipGap > windowHeight) {
					tooltipState.y = rect.top - tooltipGap;
					(tooltipState as any).position = "top";
				} else {
					tooltipState.y = rect.bottom + tooltipGap;
					(tooltipState as any).position = "bottom";
				}

				tooltipState.visible = true;
			}, 800); // 800ms delay
		};

		const handleMouseLeave = () => {
			if (tooltipTimeout) {
				clearTimeout(tooltipTimeout);
				tooltipTimeout = null;
			}
			tooltipState.visible = false;
		};

		el.addEventListener("mouseenter", handleMouseEnter);
		el.addEventListener("mouseleave", handleMouseLeave);
		el.addEventListener("mousedown", handleMouseLeave); // Hide on click

		// Store handlers for cleanup
		(el as any)._pawsTooltipHandlers = { handleMouseEnter, handleMouseLeave };
	},
	unmounted(el) {
		const handlers = (el as any)._pawsTooltipHandlers;
		if (handlers) {
			el.removeEventListener("mouseenter", handlers.handleMouseEnter);
			el.removeEventListener("mouseleave", handlers.handleMouseLeave);
			el.removeEventListener("mousedown", handlers.handleMouseLeave);
		}
	}
};
