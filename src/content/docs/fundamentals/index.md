---
title: Fundamentals
description: The stack, content boundaries, and writing conventions for Worldly Behind.
sidebar:
  label: Overview
  order: 0
---

## Stack

Worldly Behind uses Astro and Starlight with strict TypeScript. Starlight supplies
the sidebar, responsive navigation, search, table of contents, syntax highlighting,
and previous/next page links. The site builds to static files for Vercel.

## Content and code

- Write documentation in Markdown under `src/content/docs/`.
- Use MDX only when a page requires an interactive component.
- Keep reusable UI components under `src/components/` and import them into MDX.
- Keep small vanilla JavaScript interaction modules under `src/scripts/`.
  JavaScript is type checked; use JSDoc when types need to be explicit.
- Put custom CSS in `src/styles/custom.css`. The Windows 95 theme is planned;
  the foundation keeps Starlight's default appearance.
- Keep authoring templates in the root `templates/` directory so they are not
  published or indexed by search.

## Writing conventions

Give each page a descriptive title and summary. Use headings to make the page
easy to scan, include prerequisites before instructions, and describe how to
verify the result. Distinguish sample content from approved team procedures.

Never include credentials, private client details, or unsupported outcome claims.
Record the source and date when documenting version-specific behavior.

## Templates

Use `templates/guide.md` for instructions, `templates/prompt.md` for reusable
prompts, and `templates/case-study.md` for project retrospectives. Replace every
placeholder and remove the draft flag before publishing.
