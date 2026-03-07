import { getCanonicalUrl, getAbsoluteAssetUrl, siteConfig } from "@/seo/siteConfig";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  logo: getAbsoluteAssetUrl(siteConfig.defaultOgImagePath),
  sameAs: ["https://www.facebook.com/share/1EcbDSxHtg/"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+27 82 476 0809",
      contactType: "customer support",
      areaServed: "ZA",
      availableLanguage: ["en"],
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  image: getAbsoluteAssetUrl(siteConfig.defaultOgImagePath),
  url: siteConfig.siteUrl,
  telephone: "+27 82 476 0809",
  email: "fronemanlaubscher@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ZA",
  },
};

export const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: getCanonicalUrl("/"),
    },
  ],
};
