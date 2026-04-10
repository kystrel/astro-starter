# Project

Personal starter template for building and customizing websites. Stack: **Astro 6**, **Tailwind CSS 4**, **DaisyUI 5**, **TypeScript**, **Biome** (lint + format), **pnpm**.

## Source Layout

```
src/
  pages/       # File-based routes (.astro, .ts)
  components/  # Reusable Astro/UI components
  layouts/     # Page layout wrappers
  config/      # Site-wide configuration (branding.config.ts — primary entry point for customization)
  styles/      # Global CSS (Tailwind + DaisyUI imports)
  assets/      # Images and SVGs processed by Astro — use <Image /> from astro:assets
public/        # Static files copied as-is (favicon.ico, favicon.svg)
```

# Commands

```sh
pnpm install       # Install dependencies
pnpm dev           # Start dev server with HMR
pnpm build         # Production build → dist/
pnpm preview       # Serve production build locally
pnpm lint          # Lint (Biome CI mode, no writes)
pnpm lint:fix      # Lint + auto-fix
pnpm format        # Auto-format entire repo
pnpm check         # TypeScript + Astro diagnostics
pnpm astro sync    # Regenerate .astro TS types
```

# Configuration

`src/config/branding.config.ts` is the single source of truth for all site-level data. Edit this first when customizing a site:

- **Site metadata**: `name`, `tagline`, `description`, `ogImage`, `siteUrl`, `logo`
- **Navigation**: `nav` (header links), `footerGroups` (footer link columns)
- **Social**: `social` array of `{ platform, href }` — rendered in the footer
- **Business info** (optional): `phone`, `email`, `address`, `hours`, `coordinates`
- **Copyright**: `copyright` — company name used in the footer copyright line
- **Form target** (optional): `formAction` — URL for contact form POST submissions

`astro.config.mjs` reads `brandingConfig.site.siteUrl` for the `site` field. Keep them in sync.

# Components

Two content patterns are in use:

- **Props-driven** — `Hero.astro` accepts all copy and image as explicit props. Content is passed from `index.astro` at the call site.
- **Hardcoded content** — `Offerings.astro`, `Story.astro`, `Reviews.astro`, `Contact.astro` have inline placeholder copy (castle-themed demo). Edit these component files directly when customizing a site.

`Layout.astro` wraps every page with `BaseHead` + `Header` + `<slot>` + `Footer`. `BaseHead.astro` accepts optional prop overrides and falls back to `brandingConfig` defaults. `Layout.astro` also exposes `<slot name="head" />` inside `<head>` for per-page `<link>` or `<script>` injection.

# Icons

`@lucide/astro` is the icon library. Import named icons directly from the package:

```ts
import { ChessKnight, Menu, Crown, Swords, Trophy, Star } from '@lucide/astro'
```

Browse available icons at https://lucide.dev/icons/

# Style Guide

Follow the conventions and patterns you detect in surrounding code. Formatting rules are defined in [biome.json](./biome.json) and enforced by Biome.

- Always prefer DaisyUI component classes over raw Tailwind classes when a DaisyUI equivalent exists.
- Use DaisyUI semantic color names (`primary`, `secondary`, `base-100`, etc.) over raw Tailwind or hex colors.
- Images in `src/assets/` must use `<Image />` from `astro:assets` — never a plain `<img>` tag.

# Collaboration

- The user is a software engineer. You are a speed tool, not a decision-maker. Write code he would have written himself.
- Match existing conventions exactly. Never introduce a new pattern without calling it out explicitly.
- Only do what was asked. Do not refactor surrounding code, add comments, or clean up anything outside the stated task scope. If you notice something worth improving, mention it as a separate suggestion — never just do it.
- Before finalizing any implementation, surface trade-offs, alternatives, or concerns proactively.
- Flag security implications (XSS, injection, auth issues, etc.) even when not asked.
- Flag performance anti-patterns even when not asked.
- If a requested approach has a clearly better alternative, say so with reasoning — don't silently implement the suboptimal path.

# Do Not

- Do not use `npm` or `yarn` — this repo uses `pnpm` exclusively.
- Do not start alternative web servers (`python -m http.server`, `npx serve`, etc.) — use `pnpm dev` or `pnpm preview`.
- Do not use raw hex colors or hardcoded Tailwind color classes when a DaisyUI semantic token covers the use case.
- Do not install packages without confirming with the user first.

# Reference Docs

- Astro (LLM-optimized): https://docs.astro.build/llms.txt
- Astro (full): https://docs.astro.build/
- DaisyUI (LLM-optimized): https://daisyui.com/llms.txt
- DaisyUI (full): https://daisyui.com/docs/
