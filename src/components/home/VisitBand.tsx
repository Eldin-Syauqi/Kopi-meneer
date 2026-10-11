import { Clock, MapPin } from "lucide-react";
import Logo from "@/components/common/Logo";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function VisitBand() {
  return (
    <>
      <div aria-hidden="true" className="scallop-up scallop-crema" />
      <section className="pattern-delft-light bg-[var(--crema)] text-[var(--roast)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 text-center md:flex-row md:text-left">
          <Logo className="h-28 w-28 shrink-0" />
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl">Come say hi</h2>
            <ul className="mt-4 space-y-2 font-medium">
              <li className="flex items-center justify-center gap-2 md:justify-start">
                <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
                {siteConfig.address}
              </li>
              <li className="flex items-center justify-center gap-2 md:justify-start">
                <Clock className="h-5 w-5 shrink-0" aria-hidden="true" />
                {siteConfig.hours}
              </li>
            </ul>
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className={buttonVariants({ size: "lg", className: "rounded-full bg-[var(--roast)] px-8 text-white hover:bg-[var(--roast)]/90" })}
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  );
}
