import { useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogById } from "@/api/blogs";
import ErrorMessage from "@/components/common/ErrorMessage";
import Loading from "@/components/common/Loading";
import Seo from "@/components/common/Seo";
import { Badge } from "@/components/ui/badge";
import { useAsync } from "@/hooks/useAsync";
import { formatDate } from "@/lib/format";
import MarkdownContent from "@/components/blog/MarkdownContent";

export default function BlogDetail() {
  const { id = "" } = useParams();
  const load = useCallback(() => getBlogById(id), [id]);
  const { data, loading, error } = useAsync(load);

  if (loading) return <Loading />;
  if (error || !data) return <div className="mx-auto max-w-3xl px-4 py-16"><ErrorMessage message={error ?? "Post not found"} /></div>;

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <Seo title={data.title} description={data.excerpt} />
      <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">
        Back to blog
      </Link>
      <h1 className="mt-4 text-4xl md:text-5xl">{data.title}</h1>
      <p className="mt-2 text-muted-foreground">
        {data.author} on {formatDate(data.created)}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {data.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
   <div className="mt-8">
  <MarkdownContent>{data.content}</MarkdownContent>
</div>
    </article>
  );
}
