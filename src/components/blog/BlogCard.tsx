import { Link } from "react-router-dom";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

export default function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const minutes = Math.max(1, Math.ceil(post.content.split(/\s+/).filter(Boolean).length / 200));
  const category = post.tags[0] ?? "Story";

  return (
    <article className={cn("flex h-full flex-col overflow-hidden rounded-2xl border bg-card", featured && "md:flex-row")}>
      <div
        aria-hidden="true"
        className={cn(
          "bg-primary pattern-delft-light flex items-end p-5",
          featured ? "min-h-52 md:w-2/5" : "h-36"
        )}
      >
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary">{category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-muted-foreground">
          {post.author} &middot; {formatDate(post.created)} &middot; {minutes} min read
        </p>
        <h3 className={cn("mt-3", featured ? "text-3xl" : "text-xl")}>
          <Link to={`/blog/${post.objectId}`} className="hover:text-primary hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-muted-foreground">{post.excerpt}</p>
        <Link to={`/blog/${post.objectId}`} className="mt-6 font-semibold text-primary hover:underline">
          Read more
        </Link>
      </div>
    </article>
  );
}
