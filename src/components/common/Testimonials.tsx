import { getTestimonials } from "@/api/contentful";
import ErrorMessage from "@/components/common/ErrorMessage";
import Loading from "@/components/common/Loading";
import SectionHeading from "@/components/common/SectionHeading";
import { useAsync } from "@/hooks/useAsync";

export default function Testimonials() {
  const { data, loading, error } = useAsync(getTestimonials);

  return (
    <section className="pattern-delft py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title="What our guests say" subtitle="Kind words from the people who visit us every day." />
        {loading && <Loading />}
        {error && <ErrorMessage message={error} />}
        {data && (
          <div className="grid gap-6 md:grid-cols-2">
            {data.map((item) => (
              <figure key={item.id} className="relative rounded-2xl bg-card p-8 shadow-sm">
                <span
                  aria-hidden="true"
                  className="absolute -top-4 left-6 font-[family-name:var(--font-heading)] text-7xl leading-none text-[var(--crema)]"
                >
                  &ldquo;
                </span>
                <blockquote className="pt-4 text-lg">{item.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                  >
                    {item.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold">{item.name}</span>
                    <span className="block text-sm text-muted-foreground">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
