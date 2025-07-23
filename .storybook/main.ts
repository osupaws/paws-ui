import type { StorybookConfig } from "@storybook/vue3-vite";
import vue from "@vitejs/plugin-vue";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
	stories: ["../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@chromatic-com/storybook",
		"@storybook/addon-docs",
		"@storybook/addon-a11y",
		"@storybook/addon-vitest",
	],
	framework: {
		name: "@storybook/vue3-vite",
		options: {},
	},
	core: {
		disableWhatsNewNotifications: true,
	},
	viteFinal: (config) => {
		return mergeConfig(config, {
			plugins: [vue()],
			resolve: {
				alias: {
					"@": "/src",
					"@components": "/src/components",
				},
			},
		});
	},
};
export default config;
