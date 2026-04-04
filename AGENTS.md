# Style Guide

- Not defined here. For now, follow the same conventions and patterns that you detect in the surrounding code.
- Keep formatting consistent. Our rules are defined in our [biome.json](./biome.json) file, enforced by Biome.
- Run `pnpm format` to auto-format the entire repo.
- Run `pnpm lint` to lint the entire repo.

# Astro Quick Reference

- Use `astro dev` to start the local dev server with HMR. Do not use other web servers (`python -m http.server`, etc.).
- Use `astro build` to create a production build in `dist/`, by default.
- Use `astro preview` to serve the production build locally. Do not use other web servers (`python -m http.server`, etc.).
- Use `astro check` to run type checking and diagnostics.
- Use `astro sync` to generate and update TypeScript types.
- Use `astro add` to install and configure an official integration.
- Fetch **LLM-optimized** docs at https://docs.astro.build/llms.txt.
- Fetch **Full docs** at https://docs.astro.build/ (primary source, use when llms.txt lacks info).
