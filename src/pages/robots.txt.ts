import type { APIRoute } from 'astro'

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/')
  if (!site) throw new Error('site must be set in astro.config.mjs')
  const sitemapUrl = new URL(`${base}sitemap-index.xml`, site).href

  return new Response(
    [`User-agent: *`, `Allow: /`, ``, `Sitemap: ${sitemapUrl}`].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  )
}
