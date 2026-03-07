# SEO Verification Steps

## 1) Install and Run Locally
```sh
npm install
npm run dev
```
Open `http://localhost:8080`.

## 2) Validate Metadata
In browser devtools on the home page, confirm:
- `<title>` is `De La Vie Truffles | South African Bianchetto White Truffles`
- `<meta name="description">` is present
- `<link rel="canonical" href="https://delavietruffles.co.za/">`
- OG and Twitter tags are present (`og:*`, `twitter:*`)

## 3) Validate Structured Data (JSON-LD)
Run in console:
```js
[...document.querySelectorAll('script[type="application/ld+json"]')].map(s => JSON.parse(s.textContent))
```
Expected types:
- `WebSite`
- `Organization`
- `LocalBusiness`
- `BreadcrumbList`

## 4) Validate Crawl Files
- Open `/robots.txt` and confirm sitemap line exists.
- Open `/sitemap.xml` and confirm home URL is listed.

## 5) Validate Build
```sh
npm run build
```
Expected:
- `prebuild` runs sitemap generation (`npm run seo:sitemap`)
- Vite build succeeds

## 6) Lighthouse Quick Check
Run Lighthouse in Chrome DevTools on home page and verify:
- SEO score high (titles/meta/canonical/structured data)
- Accessibility has landmarks and heading structure
- Performance improved by stable image dimensions and non-blocking font loading

## 7) Production Domain Override
If canonical domain differs, build with:
```sh
VITE_SITE_URL=https://your-domain.tld npm run build
```
