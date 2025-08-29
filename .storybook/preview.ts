import "../src/css/fonts.css";
import "../src/css/themes/paws-light.css";
import "../src/css/themes/paws-dark.css";

import type { Preview } from "@storybook/vue3-vite";

const preview: Preview = {
	decorators: [
		(_, context) => {
			// Use the 'theme' global to apply the correct class
			const theme = context.globals.theme || "light";
			return {
				template: `<div class="paws--${theme}-theme theme-root" style="padding: 20px; background-color: var(--paws-color-bg-dark)"><story/></div>`
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
				items: ["light", "dark"],
				showName: true
			}
		}
	}
};

export default preview;
