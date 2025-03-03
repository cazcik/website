import Link from "next/link";
import {
  RiBlueskyLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterXLine,
} from "@remixicon/react";

export default function Index() {
  return (
    <div className="flex min-h-dvh">
      <div className="m-auto px-5">
        <div className="max-w-lg mx-auto space-y-5">
          <section>
            <h1 className="text-black dark:text-white text-lg font-medium">
              @cazcik
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-400">
              I'm an application security engineer helping developers write
              secure code, design secure systems, and build for resiliency.
            </p>
          </section>
          <section>
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com/cazcik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiGithubLine className="text-black dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 size-5" />
              </Link>
              <Link
                href="https://x.com/cazcik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXLine className="text-black dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 size-5" />
              </Link>
              <Link
                href="https://substack.com/@cazcik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-black dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 size-5">
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
                <RiLinkedinLine className="text-black dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 size-5" />
              </Link>
              <Link
                href="https://bsky.app/profile/cazcik.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiBlueskyLine className="text-black dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 size-5" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
