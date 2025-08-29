import { GLOBALS_UPDATED } from "@storybook/core-events";
import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";

// Set the initial theme
addons.setConfig({
	theme: themes.light
});

const channel = addons.getChannel();

// Listen for the official event when globals are updated
channel.on(GLOBALS_UPDATED, event => {
	const { theme } = event.globals;
	if (theme) {
		// Update the Storybook UI theme
		addons.setConfig({
			theme: theme === "dark" ? themes.dark : themes.light
		});
	}
});
