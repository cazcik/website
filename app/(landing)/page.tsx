import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <div>
        <article className="prose prose-sm prose-neutral dark:prose-invert px-5 py-6 lowercase">
          <section>
            <h1>me</h1>
            <p>
              I'm an application security engineer helping developers write
              secure code, design secure systems, and build for resiliency.
            </p>
            <p>
              Currently I'm building{" "}
              <Link
                href="https://wiards.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wiards
              </Link>{" "}
              an agentic security operations platform, spending time with my
              family, and playing hockey.
            </p>
            <p>
              I spend my free time making <Link href="/courses">courses</Link>,{" "}
              <Link href="/courses">writing</Link> about the, Art of Security,
              and yapping on <Link href="/courses">podcasts</Link> with my
              friends.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
