import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact",
};

export default function ContactPage() {
  return (
    <div className="px-5 py-6 space-y-5">
      <section>
        <h1 className="text-black dark:text-white text-lg pb-3 lowercase">
          Contact
        </h1>
      </section>
    </div>
  );
}
