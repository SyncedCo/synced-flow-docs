---
title: "Interaction Patterns"
description: "Copy-ready Synced Flow interaction patterns for native website UI."
---

Synced Flow patterns are copy-ready HTML/CSS-native building blocks for common website interactions. They are not JavaScript component libraries.

Use patterns before hand-rolling tricky interaction markup. Use recipes for full-page composition and patterns for native interaction details inside those pages.

## Commands

```bash
pnpm exec synced-flow pattern --list
pnpm exec synced-flow pattern mobile-nav-drawer --framework next --markup
pnpm exec synced-flow pattern scroll-viewport-sections --json
```

## Pattern IDs

### `mobile-nav-drawer`

Mobile burger, popover drawer, close button, and vertical nav list.

Use when a site needs a small-screen navigation menu without bringing in a component framework.

### `scroll-viewport-sections`

Sticky section navigation plus full-height scroll-snap panels.

Use for portfolio, case-study, or product-story pages that need page sections to feel intentionally stepped.

### `scroll-viewport-with-spy`

Scroll-snap panels with optional `IntersectionObserver` active-state notes.

Use when the UI needs to reflect the currently visible section in the nav.

### `native-dialog-react`

Native `<dialog>` markup plus React/Next fallback shape.

Use for settings, confirmation, onboarding, and focused modal workflows. Preserve native focus and Escape behaviour where supported.

### `popover-drawer-layout`

Popover-backed drawer or filter panel with `sf-drawer--stack`.

Use for filters, secondary navigation, command palettes, and contextual panels.

## Pattern JSON Shape

Pattern JSON includes:

- `classes`: public Synced Flow classes used by the pattern.
- `requiresJs`: whether CSS/HTML alone is enough.
- `requiresJsNotes`: when tiny project JavaScript is required.
- `a11y`: accessibility requirements to preserve when editing.
- `gotchas`: browser or markup details agents commonly miss.
- `markup`: framework-specific starter markup where useful.

## Agent Rules

When an AI agent uses a pattern:

1. Run `synced-flow pattern --list` before choosing an id.
2. Request markup for the target framework.
3. Preserve semantic elements and ARIA attributes.
4. Keep class names complete in source.
5. Run `synced-flow lint --json` and `synced-flow doctor` before finishing.

## Related Pages

- [Native components](/build/native-components/)
- [Recipes](/build/recipes/)
- [CLI reference](/reference/cli-reference/)
