import Seo from "@/components/common/Seo";
import Testimonials from "@/components/common/Testimonials";
import Hero from "@/components/home/Hero";
import Overview from "@/components/home/Overview";
import ServicesPreview from "@/components/home/ServicesPreview";
import VisitBand from "@/components/home/VisitBand";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <Seo title="Home" description={siteConfig.description} />
      <Hero />
      <Overview />
      <ServicesPreview />
      <Testimonials />
      <VisitBand />
    </>
  );
}
