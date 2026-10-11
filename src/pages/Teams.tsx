import Seo from "@/components/common/Seo";
import PageHeader from "@/components/common/PageHeader";
import TeamGrid from "@/components/team/TeamGrid";

export default function Teams() {
  return (
    <>
      <Seo title="Teams" description="Meet the people behind Kopi Meneer." />
      <PageHeader title="Meet our team" subtitle="Baristas, roasters, and bakers who love what they do." />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <TeamGrid count={8} />
      </section>
    </>
  );
}
