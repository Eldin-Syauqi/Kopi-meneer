import { useEffect } from "react";
import { siteConfig } from "@/config/site";

export default function Seo({ title, description }: { title: string; description?: string }) {
  useEffect(() => {
    document.title = `${title} | ${siteConfig.name}`;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
