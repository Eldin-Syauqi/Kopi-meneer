import { env } from "@/config/env";
import { services as localServices } from "@/data/services";
import { testimonials as localTestimonials } from "@/data/testimonials";
import type { Service, Testimonial } from "@/types";

async function getClient() {
  if (!env.contentfulSpaceId || !env.contentfulAccessToken) return null;
  const { createClient } = await import("contentful");
  return createClient({
    space: env.contentfulSpaceId,
    accessToken: env.contentfulAccessToken,
  });
}

export async function getServices(): Promise<Service[]> {
  const client = await getClient();
  if (!client) return localServices;

  const response = await client.getEntries({ content_type: "service" });
  return response.items.map((item) => {
    const fields = item.fields as unknown as Record<string, unknown>;
    return {
      id: typeof fields.slug === "string" && fields.slug ? fields.slug : item.sys.id,
      title: String(fields.title ?? ""),
      description: String(fields.description ?? ""),
      price: String(fields.price ?? ""),
      features: Array.isArray(fields.features) ? fields.features.map(String) : [],
    };
  });
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const client = await getClient();
  if (!client) return localTestimonials;

  const response = await client.getEntries({ content_type: "testimonial" });
  return response.items.map((item) => {
    const fields = item.fields as unknown as Record<string, unknown>;
    return {
      id: item.sys.id,
      name: String(fields.name ?? ""),
      role: String(fields.role ?? ""),
      quote: String(fields.quote ?? ""),
      serviceId: typeof fields.serviceId === "string" ? fields.serviceId : undefined,
    };
  });
}
