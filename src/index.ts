import "./css/fonts.css";
import "./css/themes/paws-light.css";
import "./css/themes/paws-dark.css";

import type { App } from "vue";

import PawsButton from "@/components/PawsButton/PawsButton.vue";
import PawsCard from "@/components/PawsCard/PawsCard.vue";
import PawsDropdown from "@/components/PawsDropdown/PawsDropdown.vue";
import PawsHeading from "@/components/PawsHeading/PawsHeading.vue";
import PawsInput from "@/components/PawsInput/PawsInput.vue";
import PawsMultiSwitch from "@/components/PawsMultiSwitch/PawsMultiSwitch.vue";
import PawsPluginButton from "@/components/PawsPluginButton/PawsPluginButton.vue";
import PawsResizeButton from "@/components/PawsResizeButton/PawsResizeButton.vue";

const install = (app: App): void => {
	app.component("PawsButton", PawsButton);
	app.component("PawsCard", PawsCard);
	app.component("PawsDropdown", PawsDropdown);
	app.component("PawsHeading", PawsHeading);
	app.component("PawsInput", PawsInput);
	app.component("PawsMultiSwitch", PawsMultiSwitch);
	app.component("PawsPluginButton", PawsPluginButton);
	app.component("PawsResizeButton", PawsResizeButton);
};

export default install;

export {
	PawsButton,
	PawsCard,
	PawsDropdown,
	PawsHeading,
	PawsInput,
	PawsMultiSwitch,
	PawsPluginButton,
	PawsResizeButton,
};
