import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
	stories: ["../src/components/**/*.mdx", "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

	addons: [
		"@chromatic-com/storybook",
		"@storybook/addon-docs",
		"@storybook/addon-a11y",
		"@storybook/addon-vitest"
	],

	framework: {
		name: "@storybook/vue3-vite",
		options: {}
	},

	core: {
		disableWhatsNewNotifications: true
	},
	staticDirs: ["../src/icons"]
};
export default config;
