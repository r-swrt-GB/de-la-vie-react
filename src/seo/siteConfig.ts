export const DEFAULT_SITE_URL = "https://delavietruffles.co.za";

export const siteConfig = {
  name: "De La Vie Truffles",
  shortName: "De La Vie",
  description:
    "Bianchetto white truffles cultivated in South Africa. Explore our farm story, products, and visitor experiences.",
  siteUrl: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
    DEFAULT_SITE_URL,
  locale: "en_ZA",
  twitterHandle: "@delavietruffles",
  defaultOgImagePath: "/og-default.svg",
} as const;

export const getCanonicalUrl = (path: string): string => {
  const normalizedPath = path === "/" ? "/" : path.replace(/\/$/, "");
  return `${siteConfig.siteUrl}${normalizedPath}`;
};

export const getAbsoluteAssetUrl = (path: string): string => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
};
