import { stats } from "@/data/company";

export default function StatsStrip() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <dl className="grid divide-y rounded-2xl border bg-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((item) => (
          <div key={item.label} className="px-6 py-6 text-center">
            <dd className="font-[family-name:var(--font-heading)] text-4xl text-primary">{item.value}</dd>
            <dt className="mt-1 text-sm text-muted-foreground">{item.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
