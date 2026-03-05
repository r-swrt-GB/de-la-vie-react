# SEO Changes Verification

## 1) Install + Run
```sh
npm install
npm run dev
```
- Open `http://localhost:8080`.
- Navigate each route: `/`, `/about`, `/truffles`, `/products`, `/visit`, `/contact`.

## 2) Validate Route Metadata
For each route, inspect document head in browser devtools:
- `<title>` is unique and route-specific.
- `<meta name="description">` is unique.
- `<link rel="canonical">` matches route URL and has no trailing slash (except `/`).
- OG/Twitter tags (`og:title`, `og:description`, `og:url`, `og:image`, `twitter:*`) are present.

## 3) Validate JSON-LD
In devtools console on each route:
```js
[...document.querySelectorAll('script[type="application/ld+json"]')].map(s => JSON.parse(s.textContent))
```
Expected:
- Home includes `WebSite` and `Organization`.
- Main routes include a `BreadcrumbList`.

## 4) Validate robots + sitemap
- Open `http://localhost:8080/robots.txt` and confirm sitemap reference exists.
- Open `http://localhost:8080/sitemap.xml` and confirm all key routes are listed.

## 5) Validate Build + Prerender Output
```sh
npm run build
```
Then check generated files:
- `dist/index.html`
- `dist/about/index.html`
- `dist/truffles/index.html`
- `dist/products/index.html`
- `dist/visit/index.html`
- `dist/contact/index.html`

Confirm each route HTML file has route-specific title, description, canonical, OG/Twitter values, and fallback HTML content inside `#root`.

## 6) Lighthouse / CWV Spot Check
Run Lighthouse (Chrome DevTools) on home page and verify:
- SEO: high score expected (metadata, crawlability, structured data).
- Accessibility: no missing landmark issues.
- Performance:
  - Route chunks are split.
  - Hero image has stable dimensions + high fetch priority.
  - Non-critical images lazy load.

## 7) Domain Configuration
If production domain is not `https://delavietruffles.co.za`, set:
```sh
VITE_SITE_URL=https://your-production-domain.tld
```
Then rebuild:
```sh
npm run build
```
This keeps canonical URLs and sitemap aligned with production.
