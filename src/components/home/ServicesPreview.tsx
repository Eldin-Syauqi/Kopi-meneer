import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { getServices } from "@/api/contentful";
import ErrorMessage from "@/components/common/ErrorMessage";
import Loading from "@/components/common/Loading";
import SectionHeading from "@/components/common/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { useAsync } from "@/hooks/useAsync";
import { serviceIcons } from "@/lib/serviceIcons";

export default function ServicesPreview() {
  const { data, loading, error } = useAsync(getServices);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <SectionHeading title="What we offer" subtitle="Coffee, beans, events, and classes for every kind of coffee lover." />
      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {data && (
        <div className="grid gap-6 md:grid-cols-3">
          {data.slice(0, 3).map((service) => {
            const Icon = serviceIcons[service.id] ?? Coffee;
            return (
              <article key={service.id} className="flex flex-col overflow-hidden rounded-2xl border bg-card">
                <div className="pattern-delft flex items-center px-6 py-5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-primary bg-card text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl">{service.title}</h3>
                  <p className="mt-3 flex-1 text-muted-foreground">{service.description}</p>
                  <p className="mt-6 inline-block w-fit rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
                    {service.price}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      )}
      <div className="mt-10 text-center">
        <Link to="/services" className={buttonVariants({ size: "lg", className: "rounded-full px-8" })}>
          See all services
        </Link>
      </div>
    </section>
  );
}
