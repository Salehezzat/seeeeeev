# SEVCONT GLOBAL — Corporate Website

A premium corporate website for SEVCONT GLOBAL CO., LIMITED — global industrial
sourcing and engineering solutions across Hong Kong, China, Saudi Arabia,
Egypt, and Rwanda.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling, **Shadcn/UI**-style primitives in `src/components/ui`
- **Framer Motion** for scroll reveals and micro-interactions
- **React Three Fiber / Three.js** for the hero's animated globe (procedural — no external texture assets)
- **Lenis** for smooth scrolling
- **React Hook Form + Zod** for the RFQ and Contact forms
- **TanStack Query** provider (wired up, ready for client-side data fetching)
- **Sanity CMS** schemas + client, for future editable content (see below)
- **Lucide** icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project Structure

```
src/
  app/
    (site)/          # all marketing pages — share Header/Footer via this route group
    api/              # rfq + contact form handlers (validated, ready for email/CRM wiring)
    layout.tsx         # root layout (fonts, providers, JSON-LD)
    sitemap.ts, robots.ts, opengraph-image.tsx
  components/
    home/              # homepage sections (hero, solutions, why-sevcont, etc.)
    layout/             # header, footer, page hero
    three/               # the R3F globe scene
    ui/                   # shared primitives (button, card, section heading, reveal)
  content/             # typed local content (services, projects, articles, ...)
  lib/                  # site config, nav, utils, zod validation schemas
  sanity/                # Sanity schema types + client (see below)
```

## Content

Pages currently read from typed local content modules in `src/content/*.ts`.
This keeps the site fully functional without any external services configured.
The shapes of this content mirror the Sanity schemas 1:1, so swapping a page
over to live Sanity data later is a matter of replacing the import with a
`client.fetch(...)` call — no redesign needed.

## Sanity CMS

Schema definitions for Services, Industries, Projects, Countries, Articles,
Testimonials, Suppliers, and Downloads live in `src/sanity/schemaTypes/`, with
the client in `src/sanity/lib/client.ts`.

To connect a real project:

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage).
2. Copy `.env.example` to `.env.local` and fill in
   `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET`.
3. Run Sanity Studio **standalone** (not embedded in the Next.js app):
   ```bash
   npm run studio        # local Studio at http://localhost:3333
   npm run studio:deploy # host it at your-project.sanity.studio
   ```
   Studio is intentionally kept separate from the Next.js build — embedding
   it in the App Router added a fragile RSC/bundling failure in testing, and
   a standalone Studio is also the safer pairing with a Cloudflare Pages
   deployment target.
4. Update the relevant page(s) to fetch from `client` instead of
   `src/content/*.ts` once content is populated.

## Forms

`/rfq` and `/contact` submit to `src/app/api/rfq/route.ts` and
`src/app/api/contact/route.ts`. Both validate input with Zod and currently
log the submission — they're stubbed pending a real delivery integration
(e.g. Resend, SendGrid, or a CRM webhook), since that requires credentials
this environment doesn't have. Wire up delivery in those two route handlers.

## Deployment (Cloudflare Pages)

This app uses API routes and an edge-rendered OG image route, so it needs
Cloudflare's Next.js adapter rather than a static export:

1. Push this repo to GitHub.
2. In the Cloudflare dashboard, create a **Pages** project connected to the
   repo (Pages → Create → Connect to Git). Every push to `main` then deploys
   automatically; PRs get preview deployments.
3. Framework preset: **Next.js**. Cloudflare will build via
   `@cloudflare/next-on-pages` (or the newer OpenNext Cloudflare adapter)
   automatically — no extra config files are required for the default
   setup. If you deploy manually instead, the standard commands are:
   ```bash
   npx @cloudflare/next-on-pages@1
   # output directory: .vercel/output/static
   ```
4. Enable the `nodejs_compat` compatibility flag in the Pages project
   settings (required by some dependencies).
5. Add any environment variables (Sanity, email/CRM keys) in the Pages
   project's Settings → Environment Variables.

## SEO

- Per-page `metadata` exports (title templates, descriptions, canonical URLs)
- `sitemap.ts` / `robots.ts` (App Router native)
- JSON-LD structured data: `Organization` sitewide, `Service` list on
  `/services`, `Article` on each insight
- Dynamic OG image generation via `opengraph-image.tsx` (`next/og`)
- `next/image` configured for AVIF/WebP with Sanity's CDN allow-listed
