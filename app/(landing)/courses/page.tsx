import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "courses",
};

export default function CoursesPage() {
  return (
    <article className="prose prose-sm prose-neutral dark:prose-invert px-5 py-6 lowercase">
      <h1>Courses</h1>
    </article>
  );
}
