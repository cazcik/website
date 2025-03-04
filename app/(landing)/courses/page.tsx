import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "courses",
};

export default function CoursesPage() {
  return (
    <div className="px-5 py-6 space-y-5">
      <section>
        <h1 className="text-black dark:text-white text-lg pb-3 lowercase">
          Courses
        </h1>
      </section>
    </div>
  );
}
