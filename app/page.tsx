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
                href="https://x.com/cazcik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXLine className="text-black dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 size-5" />
              </Link>
              <Link
                href="https://github.com/cazcik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiGithubLine className="text-black dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 size-5" />
              </Link>
              <Link
                href="https://instagram.com/cazcik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramLine className="text-black dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 size-5" />
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
