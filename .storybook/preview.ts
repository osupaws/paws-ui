import "../src/css/fonts.css";
import "../src/css/themes/paws-light.css";
import "../src/css/themes/paws-dark.css";

import type { Preview } from "@storybook/vue3-vite";

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
			disable: true // Disable default backgrounds to avoid conflict with our theme system
		}
	},
	decorators: [
		(_, context) => {
			const theme = context.globals.theme || "light";
			return {
				template: `
          <div class="paws--${theme}-theme" style="padding: 2.5rem; min-height: 100vh; background-color: var(--paws-color-bg-dark); color: var(--paws-color-fg-primary);">
            <story/>
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
