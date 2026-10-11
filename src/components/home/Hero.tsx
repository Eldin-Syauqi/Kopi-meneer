import { useState } from "react";
import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pattern-delft absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-sm font-medium text-secondary-foreground shadow-sm">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--crema)]" />
            {siteConfig.hours}
          </p>
          <h1 className="text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">{siteConfig.tagline}</h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">{siteConfig.mission}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/services" className={buttonVariants({ size: "lg", className: "rounded-full px-8" })}>
              See our services
            </Link>
            <Link
              to="/about"
              className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full bg-card px-8" })}
            >
              Our story
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-3 -bottom-3 h-full w-full rounded-t-[999px] rounded-b-3xl border-2 border-[var(--crema)]"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl border-8 border-primary bg-secondary">
              {imageFailed ? (
                <div className="flex h-full w-full items-center justify-center text-primary/40">
                  <Coffee className="h-24 w-24" aria-hidden="true" />
                </div>
              ) : (
                <img
                  src={siteConfig.heroImage}
                  alt="A barista pouring coffee at Kopi Meneer"
                  width={800}
                  height={1000}
                  fetchPriority="high"
                  onError={() => setImageFailed(true)}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-2 flex h-24 w-24 -rotate-12 flex-col items-center justify-center rounded-full border-4 border-background bg-[var(--crema)] text-center text-white shadow-lg sm:-left-6"
            >
              <span className="text-xs">Since</span>
              <span className="font-[family-name:var(--font-heading)] text-2xl leading-none">{siteConfig.since}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
