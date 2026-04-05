// @ts-check

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { siteConfig } from './src/config/site.ts'

// https://astro.build/config
export default defineConfig({
  site: siteConfig.siteUrl,
  base: '/astro-starter',
  vite: {
    plugins: [tailwindcss()],
  },
})
