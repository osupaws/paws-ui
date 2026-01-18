# Getting Started

Paws UI is a library of Vue 3 components designed for building interfaces for the Paws ecosystem.

## Installation

Install the package via your preferred package manager:

```bash
pnpm add @osupaws/paws-ui
```

## Initial Setup

Register the library in your main entry file:

```typescript
import { createApp } from "vue";
import PawsUI from "@osupaws/paws-ui";
import "@osupaws/paws-ui/dist/index.css";

const app = createApp(App);
app.use(PawsUI);
app.mount("#app");
```

## Recommended App Skeleton

The library assumes that the host environment provides global CSS variables and base styles. Your `App.vue` should be as simple as possible:

```html
<template>
	<main class="plugin-wrapper">
		<!-- Your main content -->
		<PawsMenuButton tooltip="Home">Dashboard</PawsMenuButton>

		<!-- Required singleton for tooltips -->
		<PawsTooltip />
	</main>
</template>

<style>
	.plugin-wrapper {
		padding: 12px;
	}
</style>
```

### Important Integration Notes

1. **Global Styles**: The library relies on `@layer` cascade layers (`base`, `custom`). Ensure your project includes or inherits the base theme styles.
2. **Tooltip Sink**: You must include the `PawsTooltip` component once at the root of your application.
3. **Typography**: The library expects "Wix Madefor Display" to be available in the environment.
