# kundankunal.com

Personal site — work, writing and ideas. Built with Next.js 16 (App Router,
Cache Components) and React 19.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Layout

```
src/
  app/
    layout.tsx              root metadata, fonts, Person JSON-LD
    page.tsx                home (Server Component)
    about/                  /about
    writing/                /writing and /writing/[slug]
    opengraph-image.tsx     generated 1200x630 social card
    robots.ts  sitemap.ts   generated from src/content
    error.tsx  not-found.tsx
    globals.css             the entire stylesheet, numbered by section
  components/               Hero, SiteHeader, SiteFooter, Reveal, ...
  content/
    site.ts                 name, nav, interests, URL
    writing.ts              posts
  assets/                   statically imported images
```

## Adding a post

Append an object to `posts` in [`src/content/writing.ts`](src/content/writing.ts).
The route, metadata, sitemap entry and topic grouping follow automatically.

## Before deploying

Set `NEXT_PUBLIC_SITE_URL` to the real origin (e.g. `https://kundankunal.com`).
It feeds `metadataBase`, canonical URLs, `robots.txt` and `sitemap.xml`; without
it they fall back to `localhost:3000`.

## Conventions worth knowing

- **Styling is plain CSS**, not Tailwind. Design tokens are the custom
  properties at the top of `globals.css`.
- **Only `SiteHeader`, `Reveal` and `error.tsx` are Client Components.**
  Keep new work on the server unless it genuinely needs state.
- **Don't read the clock while rendering.** `new Date()` is a request-time API
  under Cache Components and will opt a page out of prerendering.
- **Images go in `src/assets/`** and are statically imported, so Next can infer
  dimensions and generate a blur placeholder.
