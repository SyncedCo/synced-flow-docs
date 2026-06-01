---
title: "Release Readiness"
description: "Checklist for validating Synced Flow before tagging or publishing."
---

Use this checklist before tagging, publishing, or declaring a Synced Flow release ready.

## Lean Package Checks

- `package.json` has no runtime dependencies.
- `styles.css` stays below the gzip budget in `scripts/guardrails.mjs`.
- `components.css`, `layout.css`, `utilities.css`, and `tokens.css` stay below their gzip budgets.
- New CSS uses existing tokens before introducing new variables.
- New classes are broad primitives or common website patterns, not project one-offs.

## CSS System Checks

- Type and spacing use Utopia-style `clamp()` tokens.
- Fixed dimensions use `rem`.
- Raw `px` appears only for allowed hairlines or forced-colors fallbacks.
- Reset, base, app, layout, components, and utilities remain separate layer files.
- `styles.css` is generated from the same layer sources and does not duplicate reset/base content.

## Accessibility Confidence Pass

Synced Flow does not run audits for consuming projects, but the package should keep CSS affordances in place.

- Keyboard focus is visible on links, buttons, form fields, summaries, and skip links.
- `aria-current`, `aria-expanded`, `aria-pressed`, `aria-selected`, `aria-disabled`, `aria-busy`, and `aria-invalid` have visible states where the system provides matching primitives.
- Native disabled, required, invalid, `details[open]`, and `:target` states are styled.
- Forced-colors fallbacks keep borders and focus outlines visible.
- `prefers-reduced-motion` is respected by the base styles.
- Examples use semantic landmarks, real buttons, real links, labels, help text, and native disclosure controls.

## Documentation Checks

- README points to the main docs.
- Quick start explains the import choices.
- System primitives lists current tokens/classes.
- CSS API contract explains public vs internal surfaces.
- Recipes show how to build common pages without one-off CSS.
- CSS optimisation docs include current measured sizes.
- Integration docs cover Next.js, Astro, Vite, WordPress, and plain HTML.
- AI docs cover `agents install`, `agents status`, `skill`, and `llms.txt`.

## Commands

```bash
pnpm build
pnpm check
pnpm test
node bin/synced-flow.mjs tokens --json
node bin/synced-flow.mjs catalog --json
node bin/synced-flow.mjs doctor --cwd examples/plain-html
```

If a browser-visible example changes, inspect it at mobile and desktop widths before calling the release ready.

## Related Pages

- [CSS optimisation](/reference/css-optimisation/)
- [CSS API contract](/concepts/api-contract/)
- [Project examples](/build/project-examples/)
- [Open source project files](/reference/open-source-project-files/)
