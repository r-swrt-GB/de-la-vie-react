import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SITE_URL = (process.env.VITE_SITE_URL || "https://delavietruffles.co.za").replace(/\/$/, "");
const distDir = resolve(process.cwd(), "dist");
const indexPath = resolve(distDir, "index.html");

if (!existsSync(indexPath)) {
  console.warn("Skipping prerender step because dist/index.html was not found.");
  process.exit(0);
}

const routes = [
  {
    path: "/about",
    title: "About De La Vie Truffles | Our Farm Story",
    description:
      "Learn how De La Vie Truffles has cultivated Bianchetto white truffles in South Africa since 2019 using sustainable farming practices.",
    heading: "About De La Vie Truffles",
    intro: "Discover our farm story and sustainable truffle cultivation in South Africa.",
  },
  {
    path: "/truffles",
    title: "Bianchetto White Truffles | De La Vie Truffles",
    description:
      "Understand what Bianchetto white truffles are, how they grow, and why South Africa is ideal for truffle cultivation.",
    heading: "Bianchetto White Truffles",
    intro: "Learn what makes Bianchetto truffles a prized culinary ingredient.",
  },
  {
    path: "/products",
    title: "Truffle Products | Fresh Truffles, Oils, and Experiences",
    description:
      "Explore seasonal fresh Bianchetto truffles, upcoming truffle oil, and guided farm experiences from De La Vie Truffles.",
    heading: "Our Products",
    intro: "Browse seasonal truffle products and farm experiences.",
  },
  {
    path: "/visit",
    title: "Visit De La Vie Truffles | Farm Tours and Truffle Hunts",
    description:
      "Plan your visit to De La Vie Truffles. Book farm tours, truffle hunt experiences, and learn about our winter harvest season.",
    heading: "Visit Us",
    intro: "Book an appointment to visit the De La Vie Truffles farm.",
  },
  {
    path: "/contact",
    title: "Contact De La Vie Truffles",
    description:
      "Contact De La Vie Truffles by phone, WhatsApp, email, or Facebook to book visits and ask about truffle availability.",
    heading: "Contact De La Vie Truffles",
    intro: "Reach us by phone, WhatsApp, email, or Facebook.",
  },
];

const baseTemplate = readFileSync(indexPath, "utf8");

for (const route of routes) {
  const canonical = `${SITE_URL}${route.path}`;
  const routeHtml = baseTemplate
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content="[\s\S]*?"\s*\/?>/, `<meta name="description" content="${route.description}" />`)
    .replace(/<meta property="og:url" content="[\s\S]*?"\s*\/?>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:title" content="[\s\S]*?"\s*\/?>/, `<meta property="og:title" content="${route.title}" />`)
    .replace(/<meta property="og:description" content="[\s\S]*?"\s*\/?>/, `<meta property="og:description" content="${route.description}" />`)
    .replace(/<meta name="twitter:title" content="[\s\S]*?"\s*\/?>/, `<meta name="twitter:title" content="${route.title}" />`)
    .replace(/<meta name="twitter:description" content="[\s\S]*?"\s*\/?>/, `<meta name="twitter:description" content="${route.description}" />`)
    .replace(/<link rel="canonical" href="[\s\S]*?"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(
      /<div id="root" aria-live="polite"><\/div>/,
      `<div id="root" aria-live="polite"><main><h1>${route.heading}</h1><p>${route.intro}</p></main></div>`,
    );

  const outputDir = resolve(distDir, route.path.slice(1));
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(resolve(outputDir, "index.html"), routeHtml, "utf8");
}

console.log(`Prerendered static HTML for ${routes.length} routes in dist/`);
