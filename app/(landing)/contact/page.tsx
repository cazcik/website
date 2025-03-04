import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
};

export default function ContactPage() {
  return (
    <article className="prose prose-sm prose-neutral dark:prose-invert px-5 py-6 lowercase">
      <h1>Contact</h1>
    </article>
  );
}
