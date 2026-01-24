import type { App } from "vue";

import ArrowIcon from "@/components/Icon/ArrowIcon.vue";
import FolderIcon from "@/components/Icon/FolderIcon.vue";
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
	app.component("FolderIcon", FolderIcon);
	app.component("ArrowIcon", ArrowIcon);

	app.directive("paws-tooltip", vPawsTooltip);
};

export default install;

export {
	ArrowIcon,
	FolderIcon,
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
