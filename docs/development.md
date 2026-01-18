# Development Guide

Information for developers contributing to or customizing the Paws UI library.

## Project Structure

- `src/components/`: Component source code (Logic, Styles, Stories).
- `src/directives/`: Shared logic (v-paws-tooltip).
- `src/services/`: Reactive state services.
- `config/`: Build configurations for Vite and TypeScript.

## Customizing and Forking

If you need to add custom elements (e.g., unique brand icons) into the core library for your own project:

### 1. Adding Internal Icons

Create a new `.vue` file in `src/components/Icon/`. Follow the existing pattern:

```vue
<script setup lang="ts">
import type { BaseIcon } from "./icon.ts";
defineProps<BaseIcon>();
</script>
<template>
	<svg ... :fill="color">...</svg>
</template>
```

Export your new icon from `src/index.ts`.

### 2. Local Building

To use your modified version of the library locally, you need to build the package:

```bash
pnpm build
```

The output will be in the `dist/` folder. You can then use `pnpm link` or copy the contents to your project's node_modules for testing.

## Building for Distribution

Current build pipeline:

1.  **Code Check**: `pnpm lint`
2.  **Type Generation**: `vue-tsc`
3.  **Bundling**: `vite build` (generates ESM/CJS bundles)

> **Note**: Full NPM packaging and CI/CD pipelines are currently under development. Use `pnpm build` to generate the distribution folder manually.

## Storybook

Storybook is used strictly for internal development and testing. It should not be distributed with the final package.

```bash
pnpm storybook
```

Ensure all new components have a corresponding `.stories.ts` file for quality assurance.
