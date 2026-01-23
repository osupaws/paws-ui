import "./storybook-fonts.css";
import "./themes/paws-light-base.css";
import "./themes/paws-dark-base.css";

import { setup } from "@storybook/vue3";
import type { Preview } from "@storybook/vue3-vite";

import PawsTooltip from "../src/components/PawsTooltip/PawsTooltip.vue";
import { vPawsTooltip } from "../src/directives/vTooltip";
import { setPawsUiConfig } from "../src/services/TooltipService";

// Register global components and directives for Storybook
setup(app => {
	app.component("PawsTooltip", PawsTooltip);
	app.directive("paws-tooltip", vPawsTooltip);
});

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		a11y: {
			test: "todo"
		},
		backgrounds: {
			disable: true
		}
	},
	decorators: [
		(_, context) => {
			const theme = context.globals.theme || "light";
			setPawsUiConfig({ theme: theme as "light" | "dark" });
			return {
				template: `
          <div class="paws--${theme}-theme" style="padding: 2.5rem; min-height: 200px; display: flex; align-items: flex-start; justify-content: center; background-color: var(--paws-color-bg-primary); color: var(--paws-color-text-primary);">
            <div style="width: 100%; max-width: 600px;">
              <story/>
            </div>
            <PawsTooltip />
          </div>
        `
			};
		}
	],
	globalTypes: {
		theme: {
			name: "Theme",
			description: "Global theme for components",
			defaultValue: "light",
			toolbar: {
				icon: "mirror",
				items: [
					{ value: "light", left: "☀️", title: "Light" },
					{ value: "dark", left: "🌙", title: "Dark" }
				],
				showName: true,
				dynamicTitle: true
			}
		}
	}
};

export default preview;
