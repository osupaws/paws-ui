# Theming and Configuration

Paws UI uses a variable-driven approach that integrates with CSS Cascade Layers and the host application's theme.

## CSS Layers

The library styles are defined within the `paws` layer. It is compatible with projects using a structured cascade:

```css
@layer base, paws, custom;
```

Base colors and transitions are typically provided by the host environment (e.g., `paws-theme-base.css`).

## Configuration Synchronization

Use `setPawsUiConfig` to manage the library's behavior and ensure portals have enough context to render correctly.

```typescript
import { setPawsUiConfig } from "@osupaws/paws-ui";

// Update behavior dynamically
setPawsUiConfig({
	theme: "dark", // Context for portal-based elements (Tooltip, Overlay)
	showTooltips: true // Global toggle for hints
});
```

The `theme` property allows teleported components to apply the correct styles even when rendered outside your application's CSS scope.

## Transitions and Animations

Visual feedback (colors, opacities) is designed to be smooth. If your host application supports theme transitioning, ensure the `.paws-theme-transitioning` class is applied to the `body` during theme shifts for the best experience.

## Standard CSS Variables

The library consumes the following global tokens:

- `--paws-color-bg-darkest`: Deep background (tooltips, overlays).
- `--paws-color-bg-dark`: Secondary background.
- `--paws-color-bg-lighter`: Standard background for interactive items.
- `--paws-color-bg-hover`: Interaction hover state.
- `--paws-color-bg-active`: Interaction active/pressed state.
- `--paws-color-text-primary`: Primary text.
- `--paws-color-text-secondary`: Muted text.

## Overrides

To customize components, simply redefine the variables at the desired level:

```css
.danger-zone {
	--paws-color-bg-lighter: #3d141e;
	--paws-color-bg-hover: #4e1a26;
}
```
