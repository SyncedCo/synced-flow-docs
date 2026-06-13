---
title: "AI Documentation Roadmap"
description: "The documentation updates needed to make Synced Flow easy for developers and AI coding agents to use correctly."
---

This page tracks what the documentation should cover so Synced Flow becomes a practical developer and AI-agent resource, not just a static docs site.

## Target Reader

Synced Flow needs to serve three readers:

1. **Developers** who want a predictable CSS system with copy-ready patterns.
2. **Design-minded builders** who need to translate brand direction into reusable tokens.
3. **AI coding agents** that need explicit rules, stable APIs, examples, and verification commands.

## What To Add Next

### 1. A Better Installation Matrix

Add framework-specific install pages for:

- Astro
- Next.js
- Vite
- WordPress
- Plain HTML/CSS

Each page should include:

- install command
- generated file paths
- import location
- build/check command
- expected output
- common failure modes

### 2. Copy-Ready Agent Prompts

Create prompt pages for common tasks:

- initialise Synced Flow in an existing project
- create a theme from a brand brief
- build a marketing landing page
- add native dialog/drawer/tabs patterns
- audit an implementation for unsupported classes
- migrate from Tailwind-style utility usage

Each prompt should tell the agent to:

- inspect the project first
- run `synced-flow catalog --json`
- prefer primitives and recipes before custom CSS
- keep class names complete in source
- run `synced-flow lint --json` and `synced-flow doctor`

### 3. Machine-Readable Entry Points

Add public files that AI tools can ingest quickly:

- `/llms.txt` — short site map and usage rules.
- `/llms-full.txt` — fuller combined reference once docs stabilise.
- `/agents/synced-flow-skill/` — rendered version of the agent skill.
- JSON examples for tokens, catalogue output, patterns, and recipes.

### 4. API Stability Tables

Document the supported public surface in a stable format:

- token names
- layout primitives
- component classes
- utility helpers
- CLI commands
- config keys
- generated file conventions

Every item should include status:

- stable
- experimental
- internal
- deprecated

### 5. More Complete Examples

Add small, complete examples that agents can copy without guessing:

- SaaS hero + social proof
- pricing section
- contact form
- dashboard shell
- blog/article layout
- native dialog
- disclosure FAQ
- popover menu
- WordPress enqueue example

Each example should include:

- final markup
- required imports
- accessibility notes
- verification command

### 6. Troubleshooting Pages

Add pages for predictable failures:

- generated CSS is stale
- dynamic class names were not detected
- duplicate imports created bloated CSS
- links/lists changed after adding `defaults.css`
- focus styles are missing or overridden
- responsive variants were enabled unnecessarily

### 7. Human-Friendly Authoring Standards

Every documentation page should follow this shape:

1. What this page helps you do.
2. When to use it.
3. Minimal working example.
4. Configuration or API reference.
5. Pitfalls.
6. Verification commands.
7. Related pages.

## Current Gaps

The first-pass docs already cover installation, concepts, primitives, patterns, recipes, WordPress, and AI usage. The biggest gaps are:

- framework-specific examples are too thin
- prompts are not yet copy-ready enough
- references are mostly prose instead of structured tables/lists
- there is no generated `llms-full.txt`
- examples need expected command output and troubleshooting notes

## Done Means

The docs are developer/AI friendly when a new reader or coding agent can:

1. install Synced Flow in the right framework
2. create a theme from a brand brief
3. build one complete page from recipes and primitives
4. verify the implementation with CLI checks
5. recover from the most common mistakes without asking a maintainer
