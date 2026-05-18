import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

const BRAND_NAME = "Cosmetics Distr";
const DEFAULT_IMAGE = "/logo.svg";

function updateMeta(selector: string, attrName: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`${selector}`);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  element.setAttribute(attrName, value);
}

function updateLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel='${rel}']`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export function Seo({ title, description, path, image = DEFAULT_IMAGE, keywords }: SeoProps) {
  useEffect(() => {
    const pageTitle = title.includes(BRAND_NAME) ? title : `${title} | ${BRAND_NAME}`;
    document.title = pageTitle;

    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const canonical = origin ? `${origin}${path}` : path;

    updateMeta("meta[name='description']", "name", description);
    updateMeta("meta[name='keywords']", "name", (keywords ?? ["authentic cosmetics distributor", "European skincare supplier", "oral care wholesale distributor", "wholesale beauty products", "healthcare distribution", "global beauty wholesaler"]).join(", "));
    updateMeta("meta[name='robots']", "name", "index, follow");
    updateMeta("meta[property='og:type']", "property", "website");
    updateMeta("meta[property='og:title']", "property", pageTitle);
    updateMeta("meta[property='og:description']", "property", description);
    updateMeta("meta[property='og:url']", "property", canonical);
    updateMeta("meta[property='og:image']", "property", image);
    updateMeta("meta[name='twitter:card']", "name", "summary_large_image");
    updateMeta("meta[name='twitter:title']", "name", pageTitle);
    updateMeta("meta[name='twitter:description']", "name", description);
    updateMeta("meta[name='twitter:image']", "name", image);
    updateMeta("meta[name='author']", "name", BRAND_NAME);
    updateLink("canonical", canonical);
  }, [title, description, path, image, keywords]);

  return null;
}
