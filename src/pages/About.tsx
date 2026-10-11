import PageHeader from "@/components/common/PageHeader";
import SectionHeading from "@/components/common/SectionHeading";
import Seo from "@/components/common/Seo";
import StatsStrip from "@/components/about/StatsStrip";
import TeamGrid from "@/components/team/TeamGrid";
import { Coffee, Heart, Leaf } from "lucide-react";
import { milestones, values } from "@/data/company";

const valueIcons = [Coffee, Heart, Leaf];

export default function About() {
  return (
    <>
      <Seo title="About Us" description="The story, team, and values behind Kopi Meneer." />
      <PageHeader title="Our history" subtitle="How a small coffee cart became a neighborhood shop." />

      <StatsStrip />

      <section className="mx-auto max-w-3xl px-4 pb-16 pt-4">
        <ol className="relative space-y-10 border-l-2 border-primary/30 pl-8">
          {milestones.map((item) => (
            <li key={item.year} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-primary"
              />
              <p className="font-[family-name:var(--font-heading)] text-2xl text-[var(--crema)]">{item.year}</p>
              <h2 className="mt-1 text-2xl">{item.title}</h2>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pattern-delft py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Meet the team" subtitle="The people who make every cup." />
          <TeamGrid count={4} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading title="Our culture" subtitle="The values we work by every day." />
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = valueIcons[index % valueIcons.length];
            return (
              <div key={value.title} className="rounded-2xl border bg-card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
