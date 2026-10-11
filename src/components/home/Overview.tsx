import { Coffee, Heart, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { values } from "@/data/company";

const icons = [Coffee, Heart, Leaf];

export default function Overview() {
  return (
    <>
      <div aria-hidden="true" className="scallop-up scallop-primary" />
      <section className="pattern-delft-light bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl">A coffee shop with a story</h2>
            <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-[var(--crema)]" />
            <p className="mt-6 text-lg text-white/85">
              Since {siteConfig.since}, we have grown from a weekend coffee cart into a neighborhood shop. The team is
              still small, and every cup is still made by someone who knows your name.
            </p>
            <Link
              to="/about"
              className={buttonVariants({ variant: "secondary", className: "mt-8 rounded-full px-6" })}
            >
              Read our story
            </Link>
          </div>

          <ul className="divide-y divide-white/20">
            {values.map((value, index) => {
              const Icon = icons[index % icons.length];
              return (
                <li key={value.title} className="flex gap-4 py-6 first:pt-0 last:pb-0">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl">{value.title}</h3>
                    <p className="mt-1 text-white/80">{value.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <div aria-hidden="true" className="scallop-down scallop-primary" />
    </>
  );
}
