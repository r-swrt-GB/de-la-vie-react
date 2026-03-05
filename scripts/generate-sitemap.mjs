import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SITE_URL = (process.env.VITE_SITE_URL || "https://delavietruffles.co.za").replace(/\/$/, "");

const routes = ["/", "/about", "/truffles", "/products", "/visit", "/contact"];
const lastmod = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const path = route === "/" ? route : route.replace(/\/$/, "");
    const loc = `${SITE_URL}${path}`;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${route === "/" ? "1.0" : "0.8"}</priority>\n  </url>`;
  })
  .join("\n")}
</urlset>
`;

writeFileSync(resolve(process.cwd(), "public/sitemap.xml"), xml, "utf8");
console.log(`Generated sitemap.xml for ${routes.length} routes`);
