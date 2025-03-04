import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "uses",
};

export default function UsesPage() {
  return (
    <article className="prose prose-sm prose-neutral dark:prose-invert px-5 py-6 lowercase">
      <h1>Uses</h1>
    </article>
  );
}
