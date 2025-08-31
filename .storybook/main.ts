import type { StorybookConfig } from "@storybook/vue3-vite";
import vue from "@vitejs/plugin-vue";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
	stories: ["../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: ["@chromatic-com/storybook", "@storybook/addon-docs"],
	framework: {
		name: "@storybook/vue3-vite",
		options: {
			docgen: "vue-component-meta"
		}
	},
	core: {
		disableWhatsNewNotifications: true
	},
	viteFinal: config => {
		return mergeConfig(config, {
			plugins: [vue()],
			resolve: {
				alias: {
					"@": "/src"
				}
			}
		});
	}
};
export default config;
