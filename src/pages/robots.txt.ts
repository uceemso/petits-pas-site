import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const projectBase = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL(`${projectBase}sitemap.xml`, site).href}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
