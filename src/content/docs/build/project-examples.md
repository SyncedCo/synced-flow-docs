---
title: "Project Examples"
description: "Example projects and templates included with Synced Flow."
---

The Synced Flow repository includes examples that show the intended starting point for new projects. Each example uses `synced-flow.config.mjs`, imports a single CSS entry file, and keeps `responsiveVariants` off unless a migration explicitly needs it.

## Framework Examples

### Next.js

Path: `examples/next`

Shows a Next.js App Router setup with:

- `app/layout.tsx`
- `app/page.tsx`
- `app/synced-flow.css`
- `app/synced-flow.generated.css`
- `synced-flow.config.mjs`

Use this as the reference shape for App Router projects.

### Astro

Path: `examples/astro`

Shows an Astro content/marketing site setup with:

- `src/pages/index.astro`
- `src/styles/synced-flow.css`
- `src/styles/synced-flow.generated.css`
- `synced-flow.config.mjs`

Use this when Synced Flow is powering an Astro marketing site, content site, or static app shell.

### Vite

Path: `examples/vite`

Shows a Vite React setup with:

- `src/main.jsx`
- `src/synced-flow.css`
- `src/synced-flow.generated.css`
- `synced-flow.config.mjs`

Use this as the reference shape for React/Vite apps.

### Plain HTML

Path: `examples/plain-html`

Shows a no-framework project with a complete website demo using Synced Flow primitives for:

- header
- hero
- content sections
- cards
- forms
- notices
- footer

Use this when the consuming project is static HTML or a simple prototype.

### WordPress

Path: `examples/wordpress`

Shows a lean block-theme-style setup with:

- `functions.php`
- `theme.json`
- `synced-flow.config.mjs`
- `assets/css/synced-flow.css`
- template parts
- block templates
- PHP patterns
- enqueue code

Use this when creating a theme or plugin that needs one enqueue-ready CSS output.

## Copy-Ready Templates

Path: `examples/templates`

The templates folder contains full-page HTML starting points for:

- `saas-landing.html`
- `saas-dashboard.html`
- `portfolio-scroll.html`
- `blog-index.html`
- `coming-soon.html`

These templates should stay aligned with the recipe catalogue. If a template exists, there should be a matching recipe or documented equivalent.

## Verification

From the package repository, run:

```bash
pnpm build
pnpm check
pnpm test
node bin/synced-flow.mjs doctor --cwd examples/plain-html
```

If a browser-visible example changes, inspect it at mobile and desktop widths before calling it ready.

## Related Pages

- [Next.js integration](/integrations/next/)
- [Astro integration](/integrations/astro/)
- [Vite integration](/integrations/vite/)
- [Plain HTML integration](/integrations/plain-html/)
- [WordPress integration](/integrations/wordpress/)
- [Recipes](/build/recipes/)
