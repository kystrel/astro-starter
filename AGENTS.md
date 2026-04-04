# Project

Astro starter template. Stack: **Astro 6**, **Tailwind CSS 4**, **DaisyUI 5**, **TypeScript**, **Biome** (lint + format), **pnpm**.

## Source Layout

```
src/
  pages/       # File-based routes (.astro, .md, .ts)
  components/  # Reusable Astro/UI components
  layouts/     # Page layout wrappers
  styles/      # Global CSS
  assets/      # Static assets processed by Astro
public/        # Unprocessed static files (copied as-is)
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
pnpm exec astro check   # TypeScript + diagnostics
pnpm exec astro sync    # Regenerate TS types
```

# Style Guide

Follow the conventions and patterns you detect in surrounding code. Formatting rules are defined in [biome.json](./biome.json) and enforced by Biome.

- Always prefer daisyUI component classes over raw Tailwind classes when a daisyUI equivalent exists.
- Use daisyUI semantic color names (`primary`, `secondary`, `base-100`, etc.) over raw Tailwind or hex colors.

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
- Do not use raw hex colors or hardcoded Tailwind color classes when a daisyUI semantic token covers the use case.
- Do not install packages without confirming with the user first.

# Reference Docs

- Astro (LLM-optimized): https://docs.astro.build/llms.txt
- Astro (full): https://docs.astro.build/
- DaisyUI (LLM-optimized): https://daisyui.com/llms.txt
- DaisyUI (full): https://daisyui.com/docs/
