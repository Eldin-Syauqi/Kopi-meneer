import type { BlogPost, NewBlogInput } from "@/types";

const TABLE = "Blogs";

async function getTable() {
  const { default: Backendless } = await import("@/api/backendless");
  return { Backendless, table: Backendless.Data.of(TABLE) };
}

function toExcerpt(content: string) {
  const text = content
    .replace(/[#*_`>\[\]()-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > 95 ? `${text.slice(0, 95)}...` : text;
}
function toBlogPost(row: Record<string, unknown>): BlogPost {
  const content = String(row.content ?? "");
  const tags =
    typeof row.tags === "string"
      ? row.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
      : [];

  return {
    objectId: String(row.objectId),
    title: String(row.title ?? ""),
    excerpt: String(row.excerpt ?? toExcerpt(content)),
    content,
    author: String(row.author ?? "Unknown"),
    tags,
    created: Number(row.created ?? 0),
  };
}

export async function getBlogs(): Promise<BlogPost[]> {
  const { Backendless, table } = await getTable();
  const query = Backendless.DataQueryBuilder.create().setSortBy(["created DESC"]).setPageSize(50);
  const rows = await table.find<Record<string, unknown>>(query);
  return rows.map(toBlogPost);
}

export async function getBlogById(id: string): Promise<BlogPost> {
  const { table } = await getTable();
  const row = await table.findById<Record<string, unknown>>(id);
  return toBlogPost(row);
}

export async function createBlog(input: NewBlogInput, author: string): Promise<BlogPost> {
  const { table } = await getTable();
  const saved = await table.save<Record<string, unknown>>({
    title: input.title.trim(),
    content: input.content,
    excerpt: toExcerpt(input.content),
    tags: input.tags,
    author,
  });
  return toBlogPost(saved);
}
