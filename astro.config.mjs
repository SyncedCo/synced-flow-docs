// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.syncedflow.dev',
	integrations: [
		starlight({
			title: 'Synced Flow',
			description:
				'Public documentation for Synced Flow, the AI-friendly fluid CSS design system.',
			favicon: '/favicon.svg',
			logo: {
				src: './src/assets/synced-flow-mark.svg',
				alt: 'Synced Flow',
			},
			components: {
				SocialIcons: './src/components/SocialIcons.astro',
			},
			customCss: ['./src/styles/synced-flow-brand.css'],
			social: [
				{
					icon: 'external',
					label: 'Main website',
					href: 'https://syncedflow.dev',
				},
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/SyncedCo/synced-flow',
				},
			],
			head: [
				{ tag: 'meta', attrs: { name: 'robots', content: 'index, follow' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://docs.syncedflow.dev/og-image.svg' } },
				{ tag: 'meta', attrs: { property: 'og:image:type', content: 'image/svg+xml' } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { property: 'og:image:alt', content: 'Synced Flow documentation' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: 'https://docs.syncedflow.dev/og-image.svg' } },
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@graph': [
							{
								'@type': 'Organization',
								'@id': 'https://docs.syncedflow.dev/#organization',
								name: 'SyncedCo',
								url: 'https://syncedco.com',
							},
							{
								'@type': 'WebSite',
								'@id': 'https://docs.syncedflow.dev/#website',
								name: 'Synced Flow Documentation',
								url: 'https://docs.syncedflow.dev',
								publisher: { '@id': 'https://docs.syncedflow.dev/#organization' },
							},
							{
								'@type': 'SoftwareApplication',
								name: 'Synced Flow',
								softwareVersion: '0.3.1',
								applicationCategory: 'DeveloperApplication',
								operatingSystem: 'Any',
								url: 'https://docs.syncedflow.dev',
								creator: { '@id': 'https://docs.syncedflow.dev/#organization' },
								codeRepository: 'https://github.com/SyncedCo/synced-flow',
								license: 'https://github.com/SyncedCo/synced-flow/blob/main/LICENSE',
								description: 'AI-friendly fluid CSS design system for brand-consistent websites, agency builds, and modern frontend projects.',
							},
						],
					}),
				},
			],
			sidebar: [
				{
					label: 'Start',
					items: [
						{ label: 'Overview', slug: 'start/overview' },
						{ label: 'Quick start', slug: 'start/quick-start' },
					],
				},
				{
					label: 'Core concepts',
					items: [
						{ label: 'Why Synced Flow', slug: 'concepts/why-synced-flow' },
						{ label: 'Tokens', slug: 'concepts/tokens' },
						{ label: 'System primitives', slug: 'concepts/system-primitives' },
						{ label: 'Base styling decisions', slug: 'concepts/base-styling' },
						{ label: 'CSS API contract', slug: 'concepts/api-contract' },
					],
				},
				{
					label: 'Build with Synced Flow',
					items: [
						{ label: 'Build a site walkthrough', slug: 'build/build-a-site-walkthrough' },
						{ label: 'Website patterns', slug: 'build/website-patterns' },
						{ label: 'Native components', slug: 'build/native-components' },
						{ label: 'Interaction patterns', slug: 'build/interaction-patterns' },
						{ label: 'Recipes', slug: 'build/recipes' },
						{ label: 'Project examples', slug: 'build/project-examples' },
						{ label: 'Presets', slug: 'build/presets' },
					],
				},
				{
					label: 'Integrations',
					items: [
						{ label: 'Next.js', slug: 'integrations/next' },
						{ label: 'Astro', slug: 'integrations/astro' },
						{ label: 'Vite', slug: 'integrations/vite' },
						{ label: 'WordPress', slug: 'integrations/wordpress' },
						{ label: 'Plain HTML', slug: 'integrations/plain-html' },
					],
				},
				{
					label: 'AI agents',
					items: [
						{ label: 'AI usage', slug: 'agents/ai-usage' },
						{ label: 'AI documentation roadmap', slug: 'agents/ai-documentation-roadmap' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'CLI reference', slug: 'reference/cli-reference' },
						{ label: 'Config reference', slug: 'reference/config-reference' },
						{ label: 'CSS optimisation', slug: 'reference/css-optimisation' },
						{ label: 'Migration from Tailwind', slug: 'reference/migration-from-tailwind' },
						{ label: 'Tailwind comparison', slug: 'reference/tailwind-comparison' },
						{ label: 'Accessibility CSS', slug: 'reference/accessibility-css' },
						{ label: 'Release readiness', slug: 'reference/release-readiness' },
						{ label: 'Changelog', slug: 'reference/changelog' },
						{ label: 'Open source project files', slug: 'reference/open-source-project-files' },
					],
				},
			],
		}),
	],
});
