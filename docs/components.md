# Components Reference

Every component in Paws UI follows strict visual standards to ensure interface consistency, specifically designed for a compact 24px height vertical rhythm.

## Visual Standards

### Interactive States

All interactive components provide the following automatic states:

- **Hover**: Visual change on mouse over.
- **Active**: Immediate feedback on press.
- **Disabled**: Transparent rendering (0.5 opacity) and inhibited interactions.

### Geometry

- **Standard Height**: 24px for all primary controls.
- **Corner Radius**: 8px for containers, 6px for internal elements (pills, buttons).

---

## Core Components

### PawsMenuButton

Primary navigation and action element for sidebars and menus.

```html
<PawsMenuButton active width="100%" tooltip="Open Folder">
	Plugins
	<template #icon>
		<FolderIcon />
	</template>
</PawsMenuButton>
```

### PawsInput

Standard field for user input with an optional "adornment" area on the left.

```html
<!-- Simple input -->
<PawsInput v-model="text" placeholder="Enter text..." />

<!-- Input with clickable button on the left -->
<PawsInput
	v-model="path"
	buttonText="Browse"
	isIconClickable
	@icon-click="onBrowse"
>
	<template #icon><FolderIcon /></template>
</PawsInput>
```

### PawsCheckbox

A pill-style checkbox button with an integrated square indicator.

```html
<PawsCheckbox v-model="checked" label="Enabled" tooltip="Toggle state" />
```

### PawsDropdown

Compact select component with support for labels and icons in the selection area.

```html
<PawsDropdown
	v-model="selected"
	:options="['Option 1', 'Option 2']"
	label="Mode"
>
	<template #icon><ArrowIcon /></template>
</PawsDropdown>
```

### PawsMultiSwitch

A segmented control for switching between multiple options using dynamic slots.

```html
<PawsMultiSwitch v-model="view" :options="['list', 'grid']">
	<template #list><ListIcon /> List</template>
	<template #grid><GridIcon /> Grid</template>
</PawsMultiSwitch>
```

### PawsTooltip

A mandatory singleton manager for all hints. Place once in your root component.

```html
<PawsTooltip />
```

---

## Icons and Typography

### Font Family

The library assumes **"Wix Madefor Display"** is the primary font. It must be provided by the host environment or through the package's global styles.

### Using Internal Icons

The library exports standard SVG icons:

```javascript
import { FolderIcon, ArrowIcon } from "@osupaws/paws-ui";
```

They accept a `color` prop and follow a standard viewBox coordinate system.
