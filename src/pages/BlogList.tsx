import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "@/api/blogs";
import BlogCard from "@/components/blog/BlogCard";
import ErrorMessage from "@/components/common/ErrorMessage";
import Loading from "@/components/common/Loading";
import PageHeader from "@/components/common/PageHeader";
import Seo from "@/components/common/Seo";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAsync } from "@/hooks/useAsync";
import { useAuth } from "@/hooks/useAuth";

export default function BlogList() {
  const { data, loading, error } = useAsync(getBlogs);
  const { user } = useAuth();
  const [search, setSearch] = useState("");

  const posts = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    if (!data) return [];
    if (!keyword) return data;
    return data.filter(
      (post) =>
        post.title.toLowerCase().includes(keyword) ||
        post.tags.some((tag) => tag.toLowerCase().includes(keyword))
    );
  }, [data, search]);

  return (
    <>
      <Seo title="Blog" description="Stories, tips, and news from Kopi Meneer." />
      <PageHeader title="From our blog" subtitle="Stories, brewing tips, and news from the shop." />
      <section className="mx-auto max-w-7xl px-4 py-12">

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Input
            aria-label="Search posts"
            placeholder="Search by title or tag"
            className="max-w-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {user && (
            <Link to="/blog/create" className={buttonVariants({ className: "rounded-full px-6" })}>
              Write a post
            </Link>
          )}
        </div>

        {loading && <Loading />}
        {error && <ErrorMessage message={error} />}
        {data && posts.length === 0 && <p className="text-center text-muted-foreground">No posts found.</p>}
        {posts.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => {
              const featured = index === 0 && !search.trim() && posts.length > 1;
              return (
                <div key={post.objectId} className={featured ? "md:col-span-2 lg:col-span-3" : undefined}>
                  <BlogCard post={post} featured={featured} />
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
