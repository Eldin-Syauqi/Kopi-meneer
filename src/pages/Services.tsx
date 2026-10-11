import { getServices, getTestimonials } from "@/api/contentful";
import ErrorMessage from "@/components/common/ErrorMessage";
import Loading from "@/components/common/Loading";
import PageHeader from "@/components/common/PageHeader";
import Seo from "@/components/common/Seo";
import ServiceCard from "@/components/services/ServiceCard";
import { useAsync } from "@/hooks/useAsync";

export default function Services() {
  const services = useAsync(getServices);
  const testimonials = useAsync(getTestimonials);

  return (
    <>
      <Seo title="Services" description="Coffee, beans, event catering, and barista workshops at Kopi Meneer." />
      <PageHeader title="Our services" subtitle="Everything we offer, with clear prices." />
      <section className="mx-auto max-w-7xl px-4 py-16">
        {services.loading && <Loading />}
        {services.error && <ErrorMessage message={services.error} />}
        {services.data && (
          <div className="grid gap-6 md:grid-cols-2">
            {services.data.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={index === 0}
                testimonials={(testimonials.data ?? []).filter((item) => item.serviceId === service.id)}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
