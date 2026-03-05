import { useEffect } from "react";
import { getAbsoluteAssetUrl, getCanonicalUrl, siteConfig } from "@/seo/siteConfig";

type JsonLd = Record<string, unknown>;

interface SEOProps {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  type?: "website" | "article";
  robots?: string;
  jsonLd?: JsonLd | JsonLd[];
}

const ensureMeta = (attr: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attr}='${key}']`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const ensureLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel='${rel}']`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const removeManagedJsonLd = () => {
  document
    .head
    .querySelectorAll("script[type='application/ld+json'][data-seo-managed='true']")
    .forEach((node) => node.remove());
};

const appendJsonLd = (payload: JsonLd | JsonLd[]) => {
  const blocks = Array.isArray(payload) ? payload : [payload];

  blocks.forEach((block) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-managed", "true");
    script.textContent = JSON.stringify(block);
    document.head.appendChild(script);
  });
};

const SEO = ({
  title,
  description,
  pathname,
  image = siteConfig.defaultOgImagePath,
  type = "website",
  robots = "index, follow",
  jsonLd,
}: SEOProps) => {
  useEffect(() => {
    const canonical = getCanonicalUrl(pathname);
    const socialImage = image.startsWith("http") ? image : getAbsoluteAssetUrl(image);

    document.title = title;

    ensureMeta("name", "description", description);
    ensureMeta("name", "robots", robots);

    ensureMeta("property", "og:type", type);
    ensureMeta("property", "og:site_name", siteConfig.name);
    ensureMeta("property", "og:locale", siteConfig.locale);
    ensureMeta("property", "og:title", title);
    ensureMeta("property", "og:description", description);
    ensureMeta("property", "og:url", canonical);
    ensureMeta("property", "og:image", socialImage);

    ensureMeta("name", "twitter:card", "summary_large_image");
    ensureMeta("name", "twitter:title", title);
    ensureMeta("name", "twitter:description", description);
    ensureMeta("name", "twitter:image", socialImage);
    ensureMeta("name", "twitter:site", siteConfig.twitterHandle);

    ensureLink("canonical", canonical);

    removeManagedJsonLd();
    if (jsonLd) {
      appendJsonLd(jsonLd);
    }

    return () => {
      removeManagedJsonLd();
    };
  }, [description, image, jsonLd, pathname, robots, title, type]);

  return null;
};

export default SEO;
