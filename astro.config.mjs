// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	output: 'static',
	integrations: [
		starlight({
			title: 'Worldly Behind',
			description: 'Team documentation for tools, prompts, workflows, and lessons learned.',
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Home', slug: '' },
				{ label: 'Getting Started', items: [{ autogenerate: { directory: 'getting-started' } }] },
				{ label: 'Fundamentals', items: [{ autogenerate: { directory: 'fundamentals' } }] },
				{ label: 'Webflow', items: [{ autogenerate: { directory: 'webflow' } }] },
				{ label: 'Framer', items: [{ autogenerate: { directory: 'framer' } }] },
				{ label: 'Shopify', items: [{ autogenerate: { directory: 'shopify' } }] },
				{ label: 'Pug', items: [{ autogenerate: { directory: 'pug' } }] },
				{ label: 'MCP', items: [{ autogenerate: { directory: 'mcp' } }] },
				{ label: 'Prompts', items: [{ autogenerate: { directory: 'prompts' } }] },
				{ label: 'Workflows', items: [{ autogenerate: { directory: 'workflows' } }] },
				{ label: 'Case Studies', items: [{ autogenerate: { directory: 'case-studies' } }] },
			],
		}),
	],
});
