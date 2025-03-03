import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "blog",
};

export default function BlogPage() {
  return (
    <div className="px-5 py-12 space-y-5">
      <section>
        <h1 className="text-black dark:text-white text-lg pb-3 lowercase">
          Blog
        </h1>
      </section>
    </div>
  );
}
