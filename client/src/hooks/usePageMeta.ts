import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
}

export function usePageMeta({ title, description, canonical }: PageMetaProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update description meta tag
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", description);

    // Update canonical if provided
    if (canonical) {
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement("link");
        canonicalTag.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute("href", canonical);
    }

    // Update Open Graph tags
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
  }, [title, description, canonical]);
}

function updateMetaTag(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"], meta[name="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(property.startsWith("og:") ? "property" : "name", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}
