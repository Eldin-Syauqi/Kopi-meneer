import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "@/api/blogs";
import BlogForm from "@/components/blog/BlogForm";
import ErrorMessage from "@/components/common/ErrorMessage";
import SectionHeading from "@/components/common/SectionHeading";
import Seo from "@/components/common/Seo";
import { useAuth } from "@/hooks/useAuth";
import { getErrorMessage } from "@/lib/errors";
import type { NewBlogInput } from "@/types";

export default function CreateBlog() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(input: NewBlogInput) {
    setError(null);
    try {
      await createBlog(input, user?.name ?? user?.email ?? "Unknown");
      navigate("/blog");
    } catch (err) {
      setError(getErrorMessage(err, "Could not publish the post"));
    }
  }

  return (
    <>
      <Seo title="Write a post" />
      <section className="mx-auto max-w-2xl px-4 py-16">
        <SectionHeading title="Write a new post" />
        {error && (
          <div className="mb-6">
            <ErrorMessage message={error} />
          </div>
        )}
        <BlogForm onSubmit={handleSubmit} />
      </section>
    </>
  );
}
