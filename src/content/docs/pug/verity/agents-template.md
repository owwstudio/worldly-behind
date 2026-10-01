---
title: "Verity: AGENTS.md Template — Pug Project"
description: "Template AGENTS.md dari Verity untuk project Pug dengan aturan struktur, SCSS BEM, JavaScript, GSAP, Lenis, dan verifikasi."
sidebar:
  label: "AGENTS.md Template"
  order: 3
---

**Hasil website:** [Lihat website Verity](https://enterprise-protoype-site.vercel.app/).


> **Konteks Verity.** Dokumen ini berasal dari project Verity yang menggunakan
> MCP Figma dan Pug. Stack, path, perintah, dan aturan di bawah berlaku untuk
> project Pug yang didokumentasikan. Sumber: `PUG_AGENTS_TEMPLATE.md`.

Salin isi di bawah ke `AGENTS.md` pada root project baru, kemudian ganti seluruh
placeholder `<...>`.

```md
# <Project Name> Development Guide

## Branch safety

- Work only on the current feature/development branch.
- Do not switch to, merge into, or modify `main` unless the user explicitly
  requests it.
- Preserve unrelated existing changes in a dirty worktree.

## Stack

- Vite and Vituum
- Pug templates through `@vituum/vite-plugin-pug`
- Pug only; do not add Nunjucks
- SCSS with ITCSS ordering and strict BEM naming
- Vanilla JavaScript ES modules
- GSAP with ScrollTrigger
- One shared Lenis instance

## Pug conventions

- Pages live in `src/pages` and extend `src/templates/layouts/base.pug`.
- Use includes from `src/templates/sections` for static page-level sections.
- Use mixins in `src/templates/components` only for genuinely reusable markup.
- Keep nesting shallow and use semantic HTML with explicit accessibility
  attributes.
- Keep complex JavaScript expressions out of templates.
- Put structured content in `src/data`.

## SCSS conventions

- Follow the ITCSS order established in `src/styles/main.scss`.
- Add approved design tokens in `src/styles/settings`.
- Do not invent duplicate tokens.
- Every styling class must follow strict BEM:
  `.block`, `.block__element`, `.block--modifier`, or
  `.block__element--modifier`.
- Use attribute selectors for runtime state.
- Respect `prefers-reduced-motion` for every transition and animation.

## JavaScript conventions

- Use `data-*` attributes as JavaScript and GSAP selector hooks.
- Never use BEM styling classes as behavior hooks.
- Split behavior by component or section under the matching `src/scripts`
  directory.
- Keep GSAP plugin registration centralized in
  `src/scripts/core/motion.js`.
- Import the Lenis singleton from `src/scripts/core/lenis.js`.
- Never initialize another Lenis instance.
- Use `gsap.matchMedia()` for breakpoint-specific motion.
- Return cleanup functions for timelines, ScrollTriggers, matchMedia contexts,
  and event listeners.
- Prefer progressive enhancement: core content must remain available without
  animation.

## Responsive contract

- Mobile: below `48rem`
- Tablet: `48rem` through `69.999rem`
- Desktop: `70rem` and above
- Large desktop: above `90rem`
- CSS and JavaScript media queries must use identical boundaries.

## Assets

- Fonts: `src/assets/fonts`
- Icons: `src/assets/icons`
- Images: `src/assets/images`
- Video: `src/assets/video`
- Prefer lowercase kebab-case filenames without spaces.
- Use WebM first and MOV as the Safari fallback for video.
- Do not replace exact provided assets with approximations.

## Verification

- Run `npm run format` after editing supported files.
- Run `npm run lint` and `npm run build` before handoff.
- Run `git diff --check`.
- Verify affected layouts at mobile, tablet, desktop, and large desktop.
- Check console errors, horizontal overflow, reduced motion, keyboard access,
  scroll reversal, and the final sticky state.
- Resolve all in-scope build and lint errors before finishing.
```
