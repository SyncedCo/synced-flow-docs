---
title: "Astro"
description: "Use Synced Flow in an Astro content, marketing, or app site."
---

Use the Astro preset for content-heavy sites, marketing pages, docs-adjacent microsites, or Astro islands projects.

## Setup

```bash
pnpm add @syncedco/flow
pnpm exec synced-flow init --preset astro --agents
pnpm flow:build
pnpm flow:check
```

The Astro preset scans Astro components, Markdown/MDX content, and normal source files so recipe markup and generated utilities are picked up.

## Import

Import the CSS entry once from your layout or global stylesheet.

```astro
---
import '../synced-flow.css'
---
```

Typical project shape:

```text
src/
  layouts/Layout.astro
  pages/index.astro
  synced-flow.css
  synced-flow.generated.css
synced-flow.config.mjs
```

## Build Pages

Use recipe and pattern output with Astro-friendly markup:

```bash
pnpm exec synced-flow recipe saas-landing --framework astro --markup
pnpm exec synced-flow pattern popover-drawer-layout --framework astro --markup
```

## Verify

```bash
pnpm flow:build
pnpm flow:check
pnpm exec synced-flow lint --json
pnpm flow:doctor
```
