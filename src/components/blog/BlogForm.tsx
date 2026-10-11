import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { NewBlogInput } from "@/types";

export default function BlogForm({ onSubmit }: { onSubmit: (input: NewBlogInput) => Promise<void> }) {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    try {
      await onSubmit({ title, tags, content });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tags">Tags (separated by commas)</Label>
        <Input id="tags" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="coffee, brewing" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="content">Content (Markdown supported)</Label>
        <Textarea id="content" required rows={12} value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <Button type="submit" disabled={submitting}>
        {submitting ? "Publishing..." : "Publish post"}
      </Button>
    </form>
  );
}
