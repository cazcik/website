import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "blog",
};

export default function BlogPage() {
  return (
    <article className="prose prose-sm prose-neutral dark:prose-invert px-5 py-6 lowercase">
      <h1>Blog</h1>
    </article>
  );
}
