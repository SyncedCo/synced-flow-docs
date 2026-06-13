---
title: "Vite"
description: "Use Synced Flow in a Vite React or Vite frontend project."
---

Use the Vite preset for React/Vite apps, lightweight SPAs, and static frontend projects that build through Vite.

## Setup

```bash
pnpm add @syncedco/flow
pnpm exec synced-flow init --preset vite --agents
pnpm flow:build
pnpm flow:check
```

The Vite preset scans `src` and common component folders, then writes a generated CSS file that is imported by the Synced Flow CSS entry.

## Import

Import the CSS entry once from the app entry or global CSS file.

```tsx
import './synced-flow.css'
```

Typical project shape:

```text
src/
  main.tsx
  App.tsx
  synced-flow.css
  synced-flow.generated.css
synced-flow.config.mjs
```

## React Markup

For React-oriented examples, request React or Next framework output:

```bash
pnpm exec synced-flow recipe saas-dashboard --framework react --markup
pnpm exec synced-flow pattern native-dialog-react --framework react --markup
```

## Verify

```bash
pnpm flow:build
pnpm flow:check
pnpm exec synced-flow lint --json
pnpm flow:doctor
```
