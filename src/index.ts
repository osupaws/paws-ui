import type { App } from "vue";

// Icons
import ArrowIcon from "@/components/Icon/ArrowIcon.vue";
import CleanIcon from "@/components/Icon/CleanIcon.vue";
import CloseIcon from "@/components/Icon/CloseIcon.vue";
import CollectionsIcon from "@/components/Icon/CollectionsIcon.vue";
import DarkModeIcon from "@/components/Icon/DarkModeIcon.vue";
import DownloadIcon from "@/components/Icon/DownloadIcon.vue";
import EditIcon from "@/components/Icon/EditIcon.vue";
import FolderIcon from "@/components/Icon/FolderIcon.vue";
import LightModeIcon from "@/components/Icon/LightModeIcon.vue";
import MigrateIcon from "@/components/Icon/MigrateIcon.vue";
import MinimizeIcon from "@/components/Icon/MinimizeIcon.vue";
import PluginIcon from "@/components/Icon/PluginIcon.vue";
import SettingsIcon from "@/components/Icon/SettingsIcon.vue";
import ThemeIcon from "@/components/Icon/ThemeIcon.vue";
// Components
import PawsButton from "@/components/PawsButton/PawsButton.vue";
import PawsCard from "@/components/PawsCard/PawsCard.vue";
import PawsCheckbox from "@/components/PawsCheckbox/PawsCheckbox.vue";
import PawsDropdown from "@/components/PawsDropdown/PawsDropdown.vue";
import PawsField from "@/components/PawsField/PawsField.vue";
import PawsHeading from "@/components/PawsHeading/PawsHeading.vue";
import PawsInput from "@/components/PawsInput/PawsInput.vue";
import PawsInstallButton from "@/components/PawsInstallButton/PawsInstallButton.vue";
import PawsMenuButton from "@/components/PawsMenuButton/PawsMenuButton.vue";
import PawsMultiSwitch from "@/components/PawsMultiSwitch/PawsMultiSwitch.vue";
import PawsTooltip from "@/components/PawsTooltip/PawsTooltip.vue";

// Utils
import { vPawsTooltip } from "./directives/vTooltip";
import { setPawsUiConfig } from "./services/TooltipService";

const install = (app: App): void => {
	// Components
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
	app.component("PawsInstallButton", PawsInstallButton);

	// Icons
	app.component("ArrowIcon", ArrowIcon);
	app.component("CleanIcon", CleanIcon);
	app.component("CloseIcon", CloseIcon);
	app.component("CollectionsIcon", CollectionsIcon);
	app.component("DarkModeIcon", DarkModeIcon);
	app.component("DownloadIcon", DownloadIcon);
	app.component("EditIcon", EditIcon);
	app.component("FolderIcon", FolderIcon);
	app.component("LightModeIcon", LightModeIcon);
	app.component("MigrateIcon", MigrateIcon);
	app.component("MinimizeIcon", MinimizeIcon);
	app.component("PluginIcon", PluginIcon);
	app.component("SettingsIcon", SettingsIcon);
	app.component("ThemeIcon", ThemeIcon);

	// Directives
	app.directive("paws-tooltip", vPawsTooltip);
};

export default install;

export {
	// Icons
	ArrowIcon,
	CleanIcon,
	CloseIcon,
	CollectionsIcon,
	DarkModeIcon,
	DownloadIcon,
	EditIcon,
	FolderIcon,
	LightModeIcon,
	MigrateIcon,
	MinimizeIcon,
	// Components
	PawsButton,
	PawsCard,
	PawsCheckbox,
	PawsDropdown,
	PawsField,
	PawsHeading,
	PawsInput,
	PawsInstallButton,
	PawsMenuButton,
	PawsMultiSwitch,
	PawsTooltip,
	PluginIcon,
	// Utils
	setPawsUiConfig,
	SettingsIcon,
	ThemeIcon,
	vPawsTooltip
};
