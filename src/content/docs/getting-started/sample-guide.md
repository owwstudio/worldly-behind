---
title: "Sample guide: Add a documentation page"
description: An example guide demonstrating the team's documentation contribution workflow.
sidebar:
  order: 1
  badge: Sample
---

> **Sample guide.** This example demonstrates the guide format and uses a temporary
> page. It is not a record of a completed team project.

## Goal

Create a Markdown page that appears in the Workflows category and verify that
the site builds successfully.

## Prerequisites

- The repository is installed locally using `npm ci`.
- You have a working branch for your documentation change.
- You have chosen a topic and know how to verify its instructions.

## Steps

### 1. Copy the guide template

From the repository root:

```sh
cp templates/guide.md src/content/docs/workflows/my-first-guide.md
```

### 2. Write the page

Replace the template's title, description, and bracketed placeholders. Describe
the goal, prerequisites, steps, expected result, and troubleshooting. Remove
`draft: true` when it is ready to appear on the site.

### 3. Preview the result

```sh
npm run dev
```

Open the address reported by `npm run dev:status`, then navigate to Workflows
and select your page. Check headings, code blocks, and links.

### 4. Verify and request review

```sh
npm run check
npm run build
```

Open a pull request with the page's purpose and verification results. Stop the
background server with `npm run dev:stop` when finished.

## Expected result

The page appears under Workflows and at `/workflows/my-first-guide/`. The checks
pass, and a production build includes the page in Starlight's search index.

## Troubleshooting

- **Page missing:** confirm the file is under `src/content/docs/workflows/`, ends
  in `.md`, and no longer has `draft: true`.
- **Build fails:** read the reported file and error; check frontmatter indentation
  and required `title` before trying again.

## Cleanup

If you followed this guide only to test the workflow, delete
`src/content/docs/workflows/my-first-guide.md` before opening your pull request.
