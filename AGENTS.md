# Worldly Behind development rules

## Actual stack

- Astro 7 with Starlight 0.42; static output for Vercel.
- Strict TypeScript using `astro/tsconfigs/strict`; JavaScript is also type checked.
- Markdown for documentation; MDX only when interactive components are needed.
- Custom CSS, with a Windows 95 theme planned but not implemented yet.
- Small vanilla JavaScript modules for interactions; no UI framework integration.
- npm with the committed `package-lock.json`.

## Project boundaries

- Inspect the existing project and relevant files before editing.
- Put documentation in `src/content/docs/<category>/`. Keep UI implementation out
  of content: components belong in `src/components/`, interactions in
  `src/scripts/`, and custom styles in `src/styles/custom.css`.
- Use the existing Starlight navigation, Pagefind search, table of contents,
  responsive layout, code blocks, and pagination. Do not recreate these features.
- Preserve `docsLoader()` and `docsSchema()` in `src/content.config.ts`.
- Categories are Getting Started, Fundamentals, Webflow, Framer, Shopify, Pug,
  MCP, Prompts, Workflows, and Case Studies. Their sidebar groups autogenerate
  links from the matching content directories.
- Keep authoring templates in root `templates/`, outside the published collection.
  Replace placeholders and remove `draft: true` before publishing copied content.
- Label sample content and placeholders clearly. Do not invent team procedures,
  project outcomes, or source claims. Never commit secrets or private client data.
- Avoid adding frameworks or dependencies for interactions that a small vanilla
  JavaScript module can handle. Use accessible controls and progressive enhancement.
- The CSS entry point is registered, but the full Windows 95 theme is deferred.
  Preserve Starlight's accessibility and responsive behavior in future theme work.
- Keep deployment static. No server adapter is required; do not add server-only
  routes or runtime infrastructure without a concrete requirement.

## Development

Use Node.js 22.12.0 or newer and npm 9.6.5 or newer. Install with `npm ci`.

When starting the dev server, use background mode:

```sh
npm run dev
# Runs: astro dev --background
```

Manage it with `npm run dev:stop`, `npm run dev:status`, and `npm run dev:logs`
(equivalent to `astro dev stop`, `astro dev status`, and `astro dev logs`).
Do not leave a foreground dev server running.

Before completing a change, run:

```sh
npm run check
npm run build
```

For content changes, also review the rendered page and links. For interactive or
CSS changes, check keyboard access, narrow screens, and both color modes.
Report files changed and verification results. Commit dependency lockfile changes
alongside dependency changes; do not commit generated `dist/` or `.astro/` files.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
- [Starlight configuration](https://starlight.astro.build/reference/configuration/)
- [Starlight Markdown authoring](https://starlight.astro.build/guides/authoring-content/)
