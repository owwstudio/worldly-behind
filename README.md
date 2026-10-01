# Worldly Behind

A team documentation website built with Astro 7, Starlight, and strict TypeScript.
Documentation uses Markdown; MDX is reserved for pages that need interactive
components. Small vanilla JavaScript modules and custom CSS support future UI work.

Starlight provides navigation, Pagefind search, a table of contents, syntax
highlighting, and previous/next links. The Windows 95 theme is planned; this
foundation keeps the default appearance and registers a custom CSS entry point.

## Setup

Use Node.js **22.12.0 or newer** and npm **9.6.5 or newer**. From the repository root:

```sh
npm ci
npm run dev
```

The dev server runs in the background, normally at `http://localhost:4321`.
Check its actual address with `npm run dev:status`. Stop it when finished with
`npm run dev:stop`.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the locked dependency versions |
| `npm run dev` | Start `astro dev --background` |
| `npm start` | Alias for the background dev server |
| `npm run dev:status` | Show the background server's status and address |
| `npm run dev:logs` | Read background server logs |
| `npm run dev:stop` | Stop the background server |
| `npm run check` | Run Astro diagnostics and type checking, including JavaScript |
| `npm run build` | Build static pages and the Pagefind index into `dist/` |
| `npm run preview` | Serve the production build locally; stop with Ctrl+C |
| `npm run astro -- <command>` | Run an Astro CLI command, such as `sync` or `--help` |

Search uses the production Pagefind index. Run `npm run build` followed by
`npm run preview` to verify real search results; the dev server uses a placeholder.

## Project structure

```text
templates/                 Authoring templates, never published
public/                    Static assets
src/
  assets/                  Build-processed images and assets
  components/              Reusable UI components (reserved)
  content/docs/            Published Markdown and interactive MDX pages
  content.config.ts        Starlight docs loader and frontmatter schema
  scripts/                 Small vanilla JavaScript modules (reserved)
  styles/custom.css        Future Windows 95 theme entry point
astro.config.mjs           Static output, site identity, and sidebar configuration
tsconfig.json              Strict TypeScript and checked JavaScript
AGENTS.md                  Development rules for contributors and coding agents
```

## Documentation categories

| Category | Content directory |
| --- | --- |
| Getting Started | `src/content/docs/getting-started/` |
| Fundamentals | `src/content/docs/fundamentals/` |
| Webflow | `src/content/docs/webflow/` |
| Framer | `src/content/docs/framer/` |
| Shopify | `src/content/docs/shopify/` |
| Pug | `src/content/docs/pug/` |
| MCP | `src/content/docs/mcp/` |
| Prompts | `src/content/docs/prompts/` |
| Workflows | `src/content/docs/workflows/` |
| Case Studies | `src/content/docs/case-studies/` |

Each category has an overview. Categories awaiting real documentation are labelled
as planned content. The sample guide and sample prompt are clearly labelled in
their titles, page text, and sidebar badges.

## Contribution workflow

1. Read `AGENTS.md`, create a branch, and install dependencies with `npm ci`.
2. Choose a category and copy `templates/guide.md`, `templates/prompt.md`, or
   `templates/case-study.md` to a descriptive, kebab-case `.md` filename in it.
3. Replace every placeholder, set `title` and `description` in frontmatter, and
   remove `draft: true` when the page is ready to publish. Drafts remain unpublished
   and excluded from search in production.
4. Use headings for the table of contents. Set `sidebar.order` if a specific
   reading sequence is needed; the category sidebar includes pages automatically.
5. Keep content in the docs collection and UI code in the dedicated component and
   script directories. Use `.mdx` only when an interactive component is needed.
6. Preview the rendered page and check links, instructions, and sample labels.
7. Run `npm run check` and `npm run build`. For search checks, use the production
   preview. Stop any background dev server when finished.
8. Open a pull request explaining the change and verification results. Include
   screenshots for visual changes and commit `package-lock.json` with dependency
   updates. Do not commit generated output or confidential information.

Examples: `src/content/docs/getting-started/sample-guide.md` and
`src/content/docs/prompts/sample-prompt.md`. Templates live outside
`src/content/docs/` so placeholders never become documentation routes.

## Static deployment to Vercel

Import the repository into Vercel and use these project settings:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Install command | `npm ci` |
| Build command | `npm run check && npm run build` |
| Output directory | `dist` |

Select a supported Node.js version that meets the requirement above. The project
explicitly uses `output: 'static'`; no Vercel adapter or runtime environment
variables are needed. Deployment is not performed as part of local setup.

When the production domain is known, set Astro's `site` option to its canonical
URL before configuring canonical URLs or a sitemap.

## Reference documentation

- [Astro documentation](https://docs.astro.build/)
- [Starlight documentation](https://starlight.astro.build/)
- [Astro on Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
