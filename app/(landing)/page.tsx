import {
  RiGithubLine,
  RiTwitterXLine,
  RiLinkedinLine,
  RiBlueskyLine,
} from "@remixicon/react";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <div>
        <div className="px-5 py-6 space-y-5">
          <section>
            <h1 className="text-black dark:text-white text-lg pb-3">me</h1>
            <p className="lowercase text-neutral-500 dark:text-neutral-400 pb-5">
              I'm an application security engineer helping developers write
              secure code, design secure systems, and build for resiliency.
            </p>
            <p className="lowercase text-neutral-500 dark:text-neutral-400 pb-5">
              Currently I'm building{" "}
              <Link
                href="https://wiards.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
              >
                Wiards
              </Link>{" "}
              an agentic security operations platform, spending time with my
              family, and playing hockey.
            </p>
            <p className="lowercase text-neutral-500 dark:text-neutral-400 pb-5">
              I spend my free time making{" "}
              <Link
                href="/courses"
                className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
              >
                courses
              </Link>
              ,{" "}
              <Link
                href="/courses"
                className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
              >
                writing
              </Link>{" "}
              about the, Art of Security, and yapping on{" "}
              <Link
                href="/courses"
                className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
              >
                podcasts
              </Link>{" "}
              with my friends.
            </p>
          </section>
          <section>
            <h1 className="text-black dark:text-white text-lg pb-3">socials</h1>
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com/cazcik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiGithubLine className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white size-5" />
              </Link>
              <Link
                href="https://x.com/cazcik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXLine className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white size-5" />
              </Link>
              <Link
                href="https://substack.com/@cazcik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white size-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M20 22.724l-8-4.572-8 4.572V10h16V22.724zM12 15.849l6 3.428V12H6v7.276L12 15.849zM4 6H20V8H4zM4 2H20V4H4z"></path>
                  </svg>
                </div>
              </Link>
              <Link
                href="https://linkedin.com/in/cazcik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinLine className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white size-5" />
              </Link>
              <Link
                href="https://bsky.app/profile/cazcik.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiBlueskyLine className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white size-5" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
