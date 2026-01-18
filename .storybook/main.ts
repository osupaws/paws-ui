import type { StorybookConfig } from "@storybook/vue3-vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { fileURLToPath } from "url";
import { mergeConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
	stories: [
		"../src/**/*.mdx",
		"../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
	],
	addons: [
		"@chromatic-com/storybook",
		"@storybook/addon-vitest",
		"@storybook/addon-a11y",
		"@storybook/addon-docs"
	],
	framework: {
		name: "@storybook/vue3-vite",
		options: {}
	},
	viteFinal: async config => {
		return mergeConfig(config, {
			plugins: [vue()],
			resolve: {
				alias: {
					"@": path.resolve(__dirname, "../src")
				}
			}
		});
	}
};
export default config;
