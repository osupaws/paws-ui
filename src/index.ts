import "./css/fonts.css";
import "./css/themes/paws-light.css";
import "./css/themes/paws-dark.css";

import type { App } from "vue";

import PawsButton from "@/components/PawsButton/PawsButton.vue";
import PawsCard from "@/components/PawsCard/PawsCard.vue";
import PawsCheckbox from "@/components/PawsCheckbox/PawsCheckbox.vue";
import PawsDropdown from "@/components/PawsDropdown/PawsDropdown.vue";
import PawsField from "@/components/PawsField/PawsField.vue";
import PawsHeading from "@/components/PawsHeading/PawsHeading.vue";
import PawsInput from "@/components/PawsInput/PawsInput.vue";
import PawsMenuButton from "@/components/PawsMenuButton/PawsMenuButton.vue";
import PawsMultiSwitch from "@/components/PawsMultiSwitch/PawsMultiSwitch.vue";
import PawsTooltip from "@/components/PawsTooltip/PawsTooltip.vue";

import { vPawsTooltip } from "./directives/vTooltip";
import { setPawsUiConfig } from "./services/TooltipService";

const install = (app: App): void => {
	app.component("PawsButton", PawsButton);
	app.component("PawsCard", PawsCard);
	app.component("PawsCheckbox", PawsCheckbox);
	app.component("PawsDropdown", PawsDropdown);
	app.component("PawsField", PawsField);
	app.component("PawsHeading", PawsHeading);
	app.component("PawsInput", PawsInput);
	app.component("PawsMenuButton", PawsMenuButton);
	app.component("PawsMultiSwitch", PawsMultiSwitch);
	app.component("PawsTooltip", PawsTooltip);

	app.directive("paws-tooltip", vPawsTooltip);
};

export default install;

export {
	PawsButton,
	PawsCard,
	PawsCheckbox,
	PawsDropdown,
	PawsField,
	PawsHeading,
	PawsInput,
	PawsMenuButton,
	PawsMultiSwitch,
	PawsTooltip,
	setPawsUiConfig,
	vPawsTooltip
};
