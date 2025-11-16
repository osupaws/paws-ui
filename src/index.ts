import "./css/fonts.css";
import "./css/themes/paws-light.css";
import "./css/themes/paws-dark.css";

import type { App } from "vue";

import PawsButton from "@/components/PawsButton/PawsButton.vue";
import PawsCard from "@/components/PawsCard/PawsCard.vue";
import PawsCheckbox from "@/components/PawsCheckbox/PawsCheckbox.vue";
import PawsColorPickerButton from "@/components/PawsColorPickerButton/PawsColorPickerButton.vue";
import PawsDropdown from "@/components/PawsDropdown/PawsDropdown.vue";
import PawsField from "@/components/PawsField/PawsField.vue";
import PawsHeading from "@/components/PawsHeading/PawsHeading.vue";
import PawsInput from "@/components/PawsInput/PawsInput.vue";
import PawsMultiSwitch from "@/components/PawsMultiSwitch/PawsMultiSwitch.vue";
import PawsPluginButton from "@/components/PawsPluginButton/PawsPluginButton.vue";
import PawsResizeButton from "@/components/PawsResizeButton/PawsResizeButton.vue";

const install = (app: App): void => {
	app.component("PawsButton", PawsButton);
	app.component("PawsCard", PawsCard);
	app.component("PawsCheckbox", PawsCheckbox);
	app.component("PawsColorPickerButton", PawsColorPickerButton);
	app.component("PawsDropdown", PawsDropdown);
	app.component("PawsField", PawsField);
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
	PawsCheckbox,
	PawsColorPickerButton,
	PawsDropdown,
	PawsField,
	PawsHeading,
	PawsInput,
	PawsMultiSwitch,
	PawsPluginButton,
	PawsResizeButton
};
