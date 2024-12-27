import Link from "next/link";
import { RiExternalLinkLine } from "@remixicon/react";

export default function IndexPage() {
  return (
    <div className="flex flex-col space-y-7">
      <div>
        <h1 className="mb-2 text-xl font-medium text-black dark:text-white">
          zac wojcik
        </h1>
        <p className="text-neutral-500">
          i'm an application security engineer helping developers write secure
          code, design secure systems, and build for resiliency. in my free time
          i work on open source, play hockey, and enjoy the outdoors with my
          family.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-medium text-black dark:text-white">
          work
        </h2>
        <div className="flex flex-col space-y-3">
          <div>
            <p className="text-sm text-neutral-500">2024 &mdash; now</p>
            <p>security engineer ii, application security, health insurance.</p>
          </div>
          <div>
            <p className="text-sm text-neutral-500">2022 &mdash; 2024</p>
            <p>application security engineer, life sciences.</p>
          </div>
          <div>
            <p className="text-sm text-neutral-500">2021 &mdash; 2022</p>
            <p>security engineer, security service provider.</p>
          </div>
          <div>
            <p className="text-sm text-neutral-500">2018 &mdash; 2021</p>
            <p>security analyst, it service provider.</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-3 text-xl font-medium text-black dark:text-white">
          socials
        </h2>
        <div className="flex flex-col space-y-3">
          <div className="flex">
            <Link
              className="group"
              target="_blank"
              rel="noopener norefferrer"
              href="https://x.com/cazcik"
            >
              <p className="text-sm text-neutral-500">x</p>
              <div className="group flex items-center">
                <p className="underline-offset-1 group-hover:underline">
                  x.com/cazcik
                </p>
                <RiExternalLinkLine className="ml-1 h-4 w-4 text-neutral-500 group-hover:text-black dark:group-hover:text-white" />
              </div>
            </Link>
          </div>
          <div className="flex">
            <Link
              className="group"
              target="_blank"
              rel="noopener norefferrer"
              href="https://github.com/cazcik"
            >
              <p className="text-sm text-neutral-500">github</p>
              <div className="group flex items-center">
                <p className="underline-offset-1 group-hover:underline">
                  github.com/cazcik
                </p>
                <RiExternalLinkLine className="ml-1 h-4 w-4 text-neutral-500 group-hover:text-black dark:group-hover:text-white" />
              </div>
            </Link>
          </div>
          <div className="flex">
            <Link
              className="group"
              target="_blank"
              rel="noopener norefferrer"
              href="https://www.threads.net/@cazcik"
            >
              <p className="text-sm text-neutral-500">threads</p>
              <div className="group flex items-center">
                <p className="underline-offset-1 group-hover:underline">
                  threads.net/@cazcik
                </p>
                <RiExternalLinkLine className="ml-1 h-4 w-4 text-neutral-500 group-hover:text-black dark:group-hover:text-white" />
              </div>
            </Link>
          </div>
          <div className="flex">
            <Link
              className="group"
              target="_blank"
              rel="noopener norefferrer"
              href="https://bsky.app/profile/cazcik.com"
            >
              <p className="text-sm text-neutral-500">bluesky</p>
              <div className="group flex items-center">
                <p className="underline-offset-1 group-hover:underline">
                  bsky.app/profile/cazcik.com
                </p>
                <RiExternalLinkLine className="ml-1 h-4 w-4 text-neutral-500 group-hover:text-black dark:group-hover:text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
