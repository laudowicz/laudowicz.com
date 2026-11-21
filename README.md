# laudowicz.com

The live site. Plain HTML, no build step.

- `public/` — everything that gets served: `index.html` (the whole site, hash-routed),
  `404.html`, `img/`, `logos/`, `fonts/` (self-hosted), `og.jpg`, icons,
  `robots.txt`, `sitemap.xml`, `_headers`.
- `wrangler.jsonc` — Cloudflare config. Static assets only, no Worker code.

## Deploying

Pushing to `main` deploys automatically through Cloudflare Workers Builds.

- Deploy command: `npx wrangler deploy`
- Preview (non-production branches): `npx wrangler versions upload`

Nothing is compiled or minified. What is in `public/` is exactly what visitors get.
