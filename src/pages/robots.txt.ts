import type { APIRoute } from 'astro'

export const GET: APIRoute = ({ site }) => {
  // Astro sets BASE_URL from the `base` config option.
  // Ensure it ends with a slash before appending the sitemap filename.
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/')
  const sitemapUrl = new URL(`${base}sitemap-index.xml`, site).href

  return new Response(
    [`User-agent: *`, `Allow: /`, ``, `Sitemap: ${sitemapUrl}`].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  )
}
