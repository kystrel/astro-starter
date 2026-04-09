// @ts-check

import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { brandingConfig } from './src/config/branding.config.ts'

// https://astro.build/config
export default defineConfig({
  site: brandingConfig.site.siteUrl,
  base: '/astro-starter',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
