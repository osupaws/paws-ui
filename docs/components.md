# Components Reference

Every component in Paws UI follows strict visual standards to ensure interface consistency.

## Visual Standards

### Interactive States

All interactive components provide the following automatic states:

- **Hover**: Visual change on mouse over.
- **Active**: Immediate feedback on press.
- **Disabled**: Transparent rendering and inhibited interactions.

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

Standard field for user input.

```html
<PawsInput
	v-model="searchValue"
	placeholder="Filter..."
	tooltip="Regular expression supported"
/>
```

### PawsTooltip

A mandatory singleton manager for all hints.

```html
<!-- Place once in App.vue -->
<PawsTooltip />
```

## Icons and Typography

### Font Family

The library assumes **"Wix Madefor Display"** is the primary font. It is expected to be provided by the host environment or loaded via CSS.

### Using Internal Icons

The library exports a set of standard SVG icons:

```javascript
import { FolderIcon, ArrowIcon } from "@osupaws/paws-ui";
```

They accept a `color` prop and follow a standard 16px viewbox.
