import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "podcasts",
};

export default function PodcastsPage() {
  return (
    <div className="px-5 py-12 space-y-5">
      <section>
        <h1 className="text-black dark:text-white text-lg pb-3 lowercase">
          Podcasts
        </h1>
      </section>
    </div>
  );
}
