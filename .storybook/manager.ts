import { GLOBALS_UPDATED } from "storybook/internal/core-events";
import { addons } from "storybook/manager-api";
import { themes } from "storybook/theming";

// Устанавливаем начальную тему интерфейса
addons.setConfig({
	theme: themes.light
});

const channel = addons.getChannel();

// Слушаем событие изменения глобальных параметров (темы)
channel.on(GLOBALS_UPDATED, (event: { globals: { theme?: string } }) => {
	const { theme } = event.globals;
	if (theme) {
		addons.setConfig({
			theme: theme === "dark" ? themes.dark : themes.light
		});
	}
});
