import { getCanonicalUrl, siteConfig } from "@/seo/siteConfig";

export interface RouteSeoDefinition {
  pathname: string;
  title: string;
  description: string;
  type?: "website" | "article";
  image?: string;
  robots?: string;
}

export const routeSeo: Record<string, RouteSeoDefinition> = {
  "/": {
    pathname: "/",
    title: "De La Vie Truffles | South African Bianchetto White Truffles",
    description:
      "Premium Bianchetto white truffles grown in South Africa. Discover our farm, truffle cultivation, seasonal products, and farm visits.",
  },
  "/about": {
    pathname: "/about",
    title: "About De La Vie Truffles | Our Farm Story",
    description:
      "Learn how De La Vie Truffles has cultivated Bianchetto white truffles in South Africa since 2019 using sustainable farming practices.",
  },
  "/truffles": {
    pathname: "/truffles",
    title: "Bianchetto White Truffles | De La Vie Truffles",
    description:
      "Understand what Bianchetto white truffles are, how they grow, and why South Africa is ideal for truffle cultivation.",
  },
  "/products": {
    pathname: "/products",
    title: "Truffle Products | Fresh Truffles, Oils, and Experiences",
    description:
      "Explore seasonal fresh Bianchetto truffles, upcoming truffle oil, and guided farm experiences from De La Vie Truffles.",
  },
  "/visit": {
    pathname: "/visit",
    title: "Visit De La Vie Truffles | Farm Tours and Truffle Hunts",
    description:
      "Plan your visit to De La Vie Truffles. Book farm tours, truffle hunt experiences, and learn about our winter harvest season.",
  },
  "/contact": {
    pathname: "/contact",
    title: "Contact De La Vie Truffles",
    description:
      "Contact De La Vie Truffles by phone, WhatsApp, email, or Facebook to book visits and ask about truffle availability.",
  },
  "/404": {
    pathname: "/404",
    title: "Page Not Found | De La Vie Truffles",
    description: "The page you requested could not be found.",
    robots: "noindex, nofollow",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/og-default.svg`,
  sameAs: ["https://www.facebook.com/share/1EcbDSxHtg/"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+27 82 476 0809",
      contactType: "customer service",
      areaServed: "ZA",
      availableLanguage: ["en"],
    },
  ],
};

export const getBreadcrumbJsonLd = (items: Array<{ name: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: getCanonicalUrl(item.path),
  })),
});
