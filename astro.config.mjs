// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	output: 'static',
	redirects: {
		'/pug/verity-project-playbook/': '/pug/verity/project-playbook/',
		'/pug/verity-prompt-templates/': '/pug/verity/prompt-templates/',
		'/pug/verity-agents-template/': '/pug/verity/agents-template/',
	},
	// Rebuild optimized virtual modules so dev mode picks up theme/renderer changes.
	vite: { optimizeDeps: { force: true } },
	integrations: [
		starlight({
			title: 'Worldly Behind',
			description: 'Dokumentasi tim untuk tool, prompt, workflow, dan pelajaran dari project.',
			defaultLocale: 'root',
			locales: { root: { label: 'Bahasa Indonesia', lang: 'id' } },
			customCss: ['./src/styles/custom.css'],
			components: {
				PageFrame: './src/components/theme/DesktopFrame.astro',
				Header: './src/components/theme/WindowHeader.astro',
				Sidebar: './src/components/theme/ExplorerSidebar.astro',
				MobileMenuFooter: './src/components/theme/MobileMenuFooter.astro',
				MarkdownContent: './src/components/theme/ReadingContent.astro',
			},
			expressiveCode: {
				themes: ['github-light'],
				useStarlightDarkModeSwitch: false,
				useStarlightUiThemeColors: false,
				frames: { showCopyToClipboardButton: true },
				styleOverrides: {
					borderRadius: '0',
					codeBackground: '#ffffff',
					codeFontFamily: "'Courier New', monospace",
					codeFontSize: '0.875rem',
					codeLineHeight: '1.6',
				},
			},
			sidebar: [
				{ label: 'Beranda', slug: '' },
				{ label: 'Mulai di Sini', items: [{ autogenerate: { directory: 'getting-started' } }] },
				{ label: 'Dasar-Dasar', items: [{ autogenerate: { directory: 'fundamentals' } }] },
				{ label: 'Webflow', items: [{ autogenerate: { directory: 'webflow' } }] },
				{ label: 'Framer', items: [{ autogenerate: { directory: 'framer' } }] },
				{ label: 'Shopify', items: [{ autogenerate: { directory: 'shopify' } }] },
				{ label: 'Pug', items: [{ autogenerate: { directory: 'pug' } }] },
				{ label: 'MCP', items: [{ autogenerate: { directory: 'mcp' } }] },
				{ label: 'Prompt', items: [{ autogenerate: { directory: 'prompts' } }] },
				{ label: 'Workflow', items: [{ autogenerate: { directory: 'workflows' } }] },
				{ label: 'Studi Kasus', items: [{ autogenerate: { directory: 'case-studies' } }] },
			],
		}),
	],
});
