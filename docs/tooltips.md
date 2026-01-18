# Tooltip System

The Paws UI hint system is optimized for fixed-form applications and handles complex positioning automatically.

## Quick Integration

1.  **Register Directive**: Already included if using `app.use(PawsUI)`.
2.  **Add Container**: Place `<PawsTooltip />` in your root component.

## Usage Methods

### Attribute Directive

Apply `v-paws-tooltip` to any element. It takes a string value.

```html
<div v-paws-tooltip="'Settings'">...</div>
```

### Component Property

Standard controls like `PawsMenuButton` or `PawsInput` expose a `tooltip` prop.

```html
<PawsInput tooltip="Enter your username" />
```

## Behavior Specification

- **Threshold**: Appears after **800ms** of continuous hover.
- **Auto-Flip**: If the element is near the bottom of the viewport, the tooltip renders above the element to prevent occlusion.
- **Dismissal**: Automatically hides on mouse out or on mouse down (click).
- **Settings**: Can be toggled via `setPawsUiConfig({ showTooltips: false })`.
