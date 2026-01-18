import { reactive } from "vue";

export interface TooltipState {
	text: string;
	visible: boolean;
	x: number;
	y: number;
	showTooltips: boolean;
	theme: "light" | "dark";
}

export const tooltipState = reactive<TooltipState>({
	text: "",
	visible: false,
	x: 0,
	y: 0,
	showTooltips: true,
	theme: "light"
});

export const setPawsUiConfig = (
	config: Partial<{ showTooltips: boolean; theme: "light" | "dark" }>
) => {
	if (config.showTooltips !== undefined) {
		tooltipState.showTooltips = config.showTooltips;
	}
	if (config.theme !== undefined) {
		tooltipState.theme = config.theme;
	}
};
