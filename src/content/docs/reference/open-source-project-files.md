---
title: "Open Source Project Files"
description: "Support, security, contributing, licence, and trademark files shipped with Synced Flow."
---

Synced Flow is an open-source package, so the docs should point developers to the repository files that govern contribution, support, security, and brand use.

## Repository Files

### `LICENSE`

Synced Flow core is released under the MIT licence.

The licence covers the software. It does not grant rights to use Synced, SyncedCo, or Synced Flow branding in a way that implies official endorsement.

### `CONTRIBUTING.md`

Contribution guidance for the CSS library, CLI, WordPress preset, examples, and documentation.

Use it before proposing changes to public CSS classes, CLI behaviour, examples, or docs structure.

### `CODE_OF_CONDUCT.md`

Community behaviour expectations for contributors and maintainers.

### `SECURITY.md`

Security reporting guidance.

Reports may include issues in:

- CLI behaviour
- generated CSS output
- package distribution
- examples
- WordPress integration guidance

Security reports should include the affected package version or commit, affected command/file/integration, reproduction steps, and expected vs actual impact.

### `SUPPORT.md`

Support guidance for general usage, styling issues, and feature requests.

Commercial and team support can cover implementation, design-system audits, WordPress/theme integration, training, workshops, and team support.

### `TRADEMARKS.md`

Brand and trademark usage guidance.

Names such as Synced, SyncedCo, and Synced Flow may be used to truthfully refer to this project, compatibility, forks, or integrations. They should not be used in a way that implies endorsement or official status where none exists.

## Package Metadata

The package is published as `@syncedco/flow` and exposes:

- package entry: `@syncedco/flow`
- config helper: `@syncedco/flow/config`
- theme presets: `@syncedco/flow/presets`
- token module: `@syncedco/flow/tokens`
- CSS layers: `tokens.css`, `reset.css`, `base.css`, `defaults.css`, `layout.css`, `components.css`, `utilities.css`, and `styles.css`
- CLI binary: `synced-flow`

## Maintainer Checks

Before changing public files, run:

```bash
pnpm build
pnpm check
pnpm test
```

For release readiness, also run the package-specific CLI checks in [Release readiness](/reference/release-readiness/).

## Related Pages

- [Release readiness](/reference/release-readiness/)
- [CLI reference](/reference/cli-reference/)
- [Config reference](/reference/config-reference/)
- [CSS API contract](/concepts/api-contract/)
