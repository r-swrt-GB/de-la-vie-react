# SEO Audit (Fresh Scan)

## Project Type Identified
- Runtime/framework: Vite + React 18 + TypeScript
- Routing: `react-router-dom` (`BrowserRouter` with static routes)
- Rendering model: Client-side rendered SPA (no SSR server runtime)

## Findings Before Changes
- Metadata was mostly static in `index.html` only.
- No reusable per-route SEO system.
- No canonical URL management per route.
- No route-specific robots handling for 404.
- No structured data JSON-LD implementation.
- `robots.txt` existed but had no sitemap reference.
- No sitemap generation workflow.
- Internal links included plain `<a href>` for internal routes in places.
- Route components were eagerly loaded (no route-level code splitting).
- Image dimensions were not declared on several images (CLS risk).
- Google Fonts loaded via CSS `@import` (less optimal than head preconnect + stylesheet).

## Changes Implemented
- Added typed reusable SEO component:
  - `src/components/SEO.tsx`
  - supports title, description, canonical, robots, OG, Twitter, optional JSON-LD.
- Added central site/route SEO config:
  - `src/seo/siteConfig.ts`
  - `src/seo/routeSeo.ts`
- Wired unique SEO metadata on all main routes:
  - `/`, `/about`, `/truffles`, `/products`, `/visit`, `/contact`, and `404` (`noindex, nofollow`).
- Added structured data:
  - `Organization` + `WebSite` on home.
  - `BreadcrumbList` on all main routes.
- Improved crawlability/indexability artifacts:
  - Updated `public/robots.txt` with sitemap pointer.
  - Added `scripts/generate-sitemap.mjs` and generated `public/sitemap.xml`.
- Added SPA prerender-lite output step:
  - `scripts/prerender-static-routes.mjs`
  - generates static route HTML in `dist/<route>/index.html` after build with route-specific metadata and fallback HTML content.
- Enforced canonical strategy (no trailing slash except root) through SEO helpers.
- Improved performance/accessibility signals:
  - Route-level code splitting via `React.lazy` + `Suspense` in `src/App.tsx`.
  - Added `width`/`height` + `decoding` on key images.
  - Kept hero image as LCP candidate with `fetchPriority="high"`.
  - Replaced internal `<a href>` with `<Link>` where needed.
  - Added skip link and explicit `header/nav/main/footer` landmarks.
  - Moved Google Fonts from CSS `@import` to head preconnect + stylesheet link.
- Added default social image:
  - `public/og-default.svg`
- Cleaned base HTML metadata defaults:
  - `index.html`

## Remaining Recommendations
- If deployment target supports SSR/SSG natively, migrate to framework-level SSR/SSG for stronger first-byte SEO guarantees.
- Replace default `VITE_SITE_URL`/hardcoded domain if production canonical domain differs.
- Consider converting large JPG assets to WebP/AVIF and serving responsive variants for better LCP.
- Add automated Lighthouse CI in CI/CD for regression detection.
