// @ts-check

import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, fontProviders } from 'astro/config'
import { brandingConfig } from './src/config/branding.config.ts'

// https://astro.build/config
export default defineConfig({
  site: brandingConfig.site.siteUrl,
  base: '/astro-starter',
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['100 900'],
      styles: ['normal'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
