import { useEffect } from "react";
import { siteConfig } from "@/config/site";

export default function Seo({ title, description }: { title: string; description?: string }) {
  useEffect(() => {
    document.title = `${title} | ${siteConfig.name}`;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}