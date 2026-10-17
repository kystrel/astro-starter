# Astro Starter

[![CI](https://github.com/kystrel/astro-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/kystrel/astro-starter/actions/workflows/ci.yml)
[![Deploy](https://github.com/kystrel/astro-starter/actions/workflows/deploy.yml/badge.svg)](https://github.com/kystrel/astro-starter/actions/workflows/deploy.yml)

Personal starter for future Astro projects

## Stack

<table>
  <tr>
    <td align="center" width="130">
      <a href="https://astro.build">
        <img src="https://cdn.simpleicons.org/astro" width="80" alt="Astro" /><br>
        <b>Astro</b>
      </a>
    </td>
    <td align="center" width="130">
      <a href="https://tailwindcss.com">
        <img src="https://cdn.simpleicons.org/tailwindcss" width="80" alt="Tailwind CSS" /><br>
        <b>Tailwind CSS</b>
      </a>
    </td>
    <td align="center" width="130">
      <a href="https://daisyui.com">
        <img src="https://cdn.simpleicons.org/daisyui" width="80" alt="DaisyUI" /><br>
        <b>DaisyUI</b>
      </a>
    </td>
    <td align="center" width="130">
      <a href="https://www.typescriptlang.org">
        <img src="https://cdn.simpleicons.org/typescript" width="80" alt="TypeScript" /><br>
        <b>TypeScript</b>
      </a>
    </td>
    <td align="center" width="130">
      <a href="https://biomejs.dev">
        <img src="https://cdn.simpleicons.org/biome" width="80" alt="Biome" /><br>
        <b>Biome</b>
      </a>
    </td>
    <td align="center" width="130">
      <a href="https://pnpm.io">
        <img src="https://cdn.simpleicons.org/pnpm" width="80" alt="pnpm" /><br>
        <b>pnpm</b>
      </a>
    </td>
  </tr>
</table>

## Configuration

All site-wide settings (name, description, nav links, footer groups, social links, business info, OG image) live in [`src/config/branding.config.ts`](src/config/branding.config.ts). Edit that file to rebrand the starter.

Set `formAction` to your contact endpoint to enable the form. It sends `name`, `email`, and `message` in a standard HTML POST; the endpoint must validate submissions, handle spam, and provide success and error responses. Without an endpoint, the starter displays a disabled demo form.

Social links are empty until configured. Set `site.ogImage` to an absolute image URL or a public path that includes the configured base (for example, `/astro-starter/og-image.png`). Leave it empty to use a text-only preview.

## Deploy

The site deploys to GitHub Pages via the CI workflow on every push to `master`. The live demo is at [kystrel.github.io/astro-starter](https://kystrel.github.io/astro-starter).

## Project Structure

```text
/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── *.jpg
│   ├── components/
│   │   ├── BaseHead.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Offerings.astro
│   │   ├── Reviews.astro
│   │   └── Story.astro
│   ├── config/
│   │   └── branding.config.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── index.astro
│   │   └── robots.txt.ts
│   └── styles/
│       └── global.css
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `pnpm install`  | Installs dependencies                       |
| `pnpm dev`      | Starts local dev server at `localhost:4321` |
| `pnpm build`    | Build your production site to `./dist/`     |
| `pnpm preview`  | Preview your build locally                  |
| `pnpm check`    | Run TypeScript and Astro diagnostics        |
| `pnpm lint`     | Lint with Biome (read-only)                 |
| `pnpm lint:fix` | Lint and auto-fix with Biome                |
| `pnpm format`   | Auto-format entire repo with Biome          |
