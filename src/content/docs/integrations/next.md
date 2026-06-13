---
title: "Next.js"
description: "Use Synced Flow in a Next.js app or pages project."
---

Use the Next.js preset when Synced Flow is powering an App Router or Pages Router project.

## Setup

```bash
pnpm add @syncedco/flow
pnpm exec synced-flow init --preset next --agents
pnpm flow:build
pnpm flow:check
```

The Next.js preset creates a project CSS entry, configures source scanning for common app folders, and keeps the generated CSS file inside the project so it can be imported from the root layout or global stylesheet.

## Import

Import the Synced Flow CSS entry once from your root layout, app entry, or global CSS file.

```ts
import './synced-flow.css'
```

Typical App Router shape:

```text
app/
  layout.tsx
  page.tsx
  synced-flow.css
  synced-flow.generated.css
synced-flow.config.mjs
```

## Agent Notes

Before creating UI, run:

```bash
pnpm exec synced-flow catalog --json
pnpm exec synced-flow pattern --list
```

Prefer recipes and primitives before custom component CSS. Keep class names complete in source files so the scanner can emit the right generated CSS.

## Verify

```bash
pnpm flow:build
pnpm flow:check
pnpm exec synced-flow lint --json
pnpm flow:doctor
```
