import { Link } from "react-router-dom";
import Seo from "@/components/common/Seo";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="mt-4 text-muted-foreground">This page does not exist.</p>
        <Link to="/" className={buttonVariants({ className: "mt-6" })}>
          Back to home
        </Link>
      </section>
    </>
  );
}
