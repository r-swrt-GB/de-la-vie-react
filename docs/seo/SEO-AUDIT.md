# SEO Audit (Fresh Scan)

## Stack Detected
- Build/runtime: Vite + React + TypeScript
- Rendering model: SPA client render
- Routing model: Single-page with in-page section anchors (no active route-level pages)

## Findings Before Re-Implementation
- No reusable typed SEO component.
- No JSON-LD structured data system.
- Robots file existed but no sitemap reference.
- No sitemap generation workflow.
- Index shell metadata was static and limited.
- Google font loading was CSS `@import` (less optimal than preconnect + stylesheet link).
- Hero/product images lacked explicit width/height on several elements (CLS risk).
- Navigation used JS buttons only (reduced crawl discoverability for internal section links).

## Changes Implemented
- Added typed reusable SEO component:
  - `src/components/SEO.tsx`
- Added centralized SEO config and structured data:
  - `src/seo/siteConfig.ts`
  - `src/seo/structuredData.ts`
- Applied SEO component on main page with:
  - title, description, canonical, robots
  - Open Graph + Twitter tags
  - JSON-LD: `WebSite`, `Organization`, `LocalBusiness`, `BreadcrumbList`
- Improved crawl/index signals:
  - Updated `public/robots.txt` with sitemap declaration
  - Added `public/sitemap.xml`
  - Added build-time sitemap script: `scripts/generate-sitemap.mjs`
  - Added scripts in `package.json`: `seo:sitemap`, `prebuild`
- Improved technical SEO/CWV/a11y:
  - Added image `width`/`height` and `decoding="async"` on key images
  - Added `fetchPriority="high"` for hero image
  - Converted navigation/button links to anchor links for section discoverability
  - Added skip link + explicit `header` and `main` landmarks
  - Moved Google Fonts loading from CSS `@import` to head `preconnect` + stylesheet
  - Added default social share image: `public/og-default.svg`
  - Added meaningful non-JS fallback HTML in `index.html`

## Remaining Recommendations
- If you re-introduce multi-route pages, extend sitemap + metadata per route.
- Consider WebP/AVIF variants for hero and product images.
- Add Lighthouse CI for continuous SEO/performance regression checks.
