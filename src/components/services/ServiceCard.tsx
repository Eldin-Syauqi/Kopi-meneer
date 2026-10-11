import { Coffee } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { serviceIcons } from "@/lib/serviceIcons";
import type { Service, Testimonial } from "@/types";

export default function ServiceCard({
  service,
  testimonials,
  featured = false,
}: {
  service: Service;
  testimonials: Testimonial[];
  featured?: boolean;
}) {
  const Icon = serviceIcons[service.id] ?? Coffee;

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card">
      <div className="pattern-delft flex items-center justify-between px-7 py-6">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary bg-card text-primary">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        {featured && (
          <span className="rounded-full bg-[var(--crema)] px-4 py-1.5 text-sm font-semibold text-white">Most loved</span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-5 p-7">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-2xl md:text-3xl">{service.title}</h2>
          <p className="shrink-0 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            {service.price}
          </p>
        </div>
        <p className="text-muted-foreground">{service.description}</p>
        <ul className="space-y-2 text-sm">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--crema)]" />
              {feature}
            </li>
          ))}
        </ul>
        {testimonials.map((item) => (
          <blockquote key={item.id} className="mt-auto rounded-xl bg-muted p-4 text-sm">
            <p>&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-2 font-medium text-muted-foreground">
              {item.name}, {item.role}
            </footer>
          </blockquote>
        ))}
        <a
          href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Question about ${service.title}`)}`}
          className={buttonVariants({ variant: "outline", className: "w-full rounded-full" })}
        >
          Ask about this
        </a>
      </div>
    </article>
  );
}
