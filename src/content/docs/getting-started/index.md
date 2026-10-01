---
title: Getting Started
description: Set up Worldly Behind locally and contribute your first documentation page.
sidebar:
  label: Overview
  order: 0
---

## Local setup

Use Node.js 22.12.0 or newer and npm 9.6.5 or newer. From the project root:

```sh
npm ci
npm run dev
```

The development server starts in the background, normally at
`http://localhost:4321`. Use `npm run dev:status` to find its address,
`npm run dev:logs` to inspect logs, and `npm run dev:stop` to stop it.

## Add documentation

1. Choose the category that best fits the topic.
2. Copy a Markdown file from the root `templates/` directory into
   `src/content/docs/<category>/<descriptive-name>.md`.
3. Replace all placeholders, write a useful description, and remove `draft: true`
   when the page is ready to publish.
4. Preview the page, check its links, and run the verification commands below.
5. Open a pull request describing the change and how you verified it.

The sidebar automatically includes published pages in each category. Set
`sidebar.order` in frontmatter when the reading sequence matters.

## Verify changes

```sh
npm run check
npm run build
```

Type checking checks project code. The build validates documentation frontmatter
and produces the static site and search index in `dist/`.

See the [sample guide](/getting-started/sample-guide/) for a worked example and
[Fundamentals](/fundamentals/) for project conventions.
