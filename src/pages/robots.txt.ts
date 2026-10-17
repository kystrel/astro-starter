import type { APIRoute } from 'astro'
import { homeUrl } from '../config/branding.config'

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error('site must be set in astro.config.mjs')
  const sitemapUrl = new URL(`${homeUrl}sitemap-index.xml`, site).href

  return new Response(
    [`User-agent: *`, `Allow: /`, ``, `Sitemap: ${sitemapUrl}`].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  )
}
