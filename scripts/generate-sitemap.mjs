import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SITE_URL = (process.env.VITE_SITE_URL || "https://delavietruffles.co.za").replace(/\/$/, "");
const lastmod = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

writeFileSync(resolve(process.cwd(), "public/sitemap.xml"), xml, "utf8");
console.log("Generated sitemap.xml");
