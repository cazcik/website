import Link from "next/link";
import { RiExternalLinkLine } from "@remixicon/react";

import {
  getHackerOneProfile,
  getHackTheBoxProfile,
  getTryHackMeProfile,
} from "./actions";

export const revalidate = 60;

export default async function IndexPage() {
  const hackTheBoxProfile = await getHackTheBoxProfile();
  const tryHackMeProfile = await getTryHackMeProfile();
  const hackerOneProfile = await getHackerOneProfile();

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
          stats
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
            <div>
              <h4 className="text-sm text-neutral-500">rank</h4>
              <p className="text-xl text-black dark:text-white">
                {hackTheBoxProfile && hackTheBoxProfile.profile.ranking
                  ? hackTheBoxProfile.profile.ranking
                  : "n/a"}
              </p>
              <div className="mt-1 flex">
                <Link
                  className="group"
                  target="_blank"
                  rel="noopener norefferrer"
                  href="https://app.hackthebox.com/profile/cazcik"
                >
                  <div className="group flex items-center">
                    <p className="text-sm underline-offset-1 group-hover:underline">
                      hackthebox
                    </p>
                    <RiExternalLinkLine className="ml-1 size-3 text-neutral-500 group-hover:text-black dark:group-hover:text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
            <div>
              <h4 className="text-sm text-neutral-500">rank</h4>
              <p className="text-xl text-black dark:text-white">
                {tryHackMeProfile && tryHackMeProfile.data.rank
                  ? tryHackMeProfile.data.rank
                  : "n/a"}
              </p>
              <div className="mt-1 flex">
                <Link
                  className="group"
                  target="_blank"
                  rel="noopener norefferrer"
                  href="https://tryhackme.com/r/p/cazcik"
                >
                  <div className="group flex items-center">
                    <p className="text-sm underline-offset-1 group-hover:underline">
                      tryhackme
                    </p>
                    <RiExternalLinkLine className="ml-1 size-3 text-neutral-500 group-hover:text-black dark:group-hover:text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
            <div>
              <h4 className="text-sm text-neutral-500">rank</h4>
              <p className="text-xl text-black dark:text-white">n/a</p>
              <div className="mt-1 flex">
                <Link
                  className="group"
                  target="_blank"
                  rel="noopener norefferrer"
                  href="https://bugcrowd.com/cazcik"
                >
                  <div className="group flex items-center">
                    <p className="text-sm underline-offset-1 group-hover:underline">
                      bugcrowd
                    </p>
                    <RiExternalLinkLine className="ml-1 size-3 text-neutral-500 group-hover:text-black dark:group-hover:text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
            <div>
              <h4 className="text-sm text-neutral-500">rank</h4>
              <p className="text-xl text-black dark:text-white">
                {hackerOneProfile &&
                hackerOneProfile.data.user.statistics_snapshot
                  ? hackerOneProfile.data.user.statistics_snapshot.rank
                  : "n/a"}
              </p>
              <div className="mt-1 flex">
                <Link
                  className="group"
                  target="_blank"
                  rel="noopener norefferrer"
                  href="https://hackerone.com/cazcik"
                >
                  <div className="group flex items-center">
                    <p className="text-sm underline-offset-1 group-hover:underline">
                      hackerone
                    </p>
                    <RiExternalLinkLine className="ml-1 size-3 text-neutral-500 group-hover:text-black dark:group-hover:text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
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
            <p className="text-sm text-neutral-500">2022 &mdash; now</p>
            <p>founder, neutrala.</p>
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
