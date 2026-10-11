import Logo from "@/components/common/Logo";

export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <>
      <header className="pattern-delft">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-14 md:py-20">
          <div>
            <h1 className="max-w-2xl text-4xl text-secondary-foreground md:text-5xl">{title}</h1>
            {subtitle && <p className="mt-4 max-w-xl text-lg text-muted-foreground">{subtitle}</p>}
          </div>
          <Logo className="hidden h-36 w-36 shrink-0 -rotate-6 md:block" />
        </div>
      </header>
      <div aria-hidden="true" className="scallop-down" />
    </>
  );
}
