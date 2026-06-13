---
title: "Plain HTML"
description: "Use Synced Flow in plain HTML and CSS projects without a framework."
---

Use the plain preset for static HTML, prototyping, simple marketing pages, or projects that do not have a framework-specific app entry.

## Setup

```bash
pnpm add @syncedco/flow
pnpm exec synced-flow init --preset plain --agents
pnpm flow:build
pnpm flow:check
```

The plain preset scans HTML, JS, CSS, Markdown, and common source folders, then writes a generated CSS file for direct linking.

## Link CSS

Link the Synced Flow CSS entry from your HTML.

```html
<link rel="stylesheet" href="./synced-flow.css">
```

Typical project shape:

```text
index.html
synced-flow.css
synced-flow.generated.css
synced-flow.config.mjs
```

## Build Markup

Use HTML framework output for copy-ready sections:

```bash
pnpm exec synced-flow recipe agency-home --framework html --markup
pnpm exec synced-flow pattern mobile-nav-drawer --framework html --markup
```

## Verify

```bash
pnpm flow:build
pnpm flow:check
pnpm exec synced-flow lint --json
pnpm flow:doctor
```
