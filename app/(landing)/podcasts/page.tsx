import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "podcasts",
};

export default function PodcastsPage() {
  return (
    <article className="prose prose-sm prose-neutral dark:prose-invert px-5 py-6 lowercase">
      <h1>Podcasts</h1>
    </article>
  );
}
