import Link from "next/link";
import { RiExternalLinkLine } from "@remixicon/react";

interface TryHackMeProfile {
  status: string;
  data: {
    _id: string;
    id: number;
    avatar: string;
    username: string;
    level: number;
    country: string;
    about: string;
    linkedInUsername: string;
    githubUsername: string;
    twitterUsername: string;
    instagramUsername: string;
    personalWebsite: string;
    subscribed: number;
    badgesNumber: number;
    completedRoomsNumber: number;
    streak: number;
    rank: number;
    topPercentage: boolean | null;
    isInTopTenPercent: boolean;
    badgeImageURL: string;
  };
}

interface HackerOneProfile {
  data: {
    user: {
      id: string;
      statistics_snapshot: {
        id: string;
        signal: number;
        signal_percentile: number;
        impact: number;
        impact_percentile: number;
        reputation: number;
        rank: number;
        __typename: string;
      };
      __typename: string;
    };
  };
}

interface HackTheBoxProfile {
  profile: {
    id: number;
    sso_id: boolean;
    name: string;
    system_owns: number;
    user_owns: number;
    user_bloods: number;
    system_bloods: number;
    team: unknown;
    respects: number;
    rank: string;
    rank_id: number;
    current_rank_progress: number;
    next_rank: unknown;
    next_rank_points: unknown;
    rank_ownership: number;
    rank_requirement: unknown;
    ranking: number;
    avatar: string;
    timezone: string;
    isVip: boolean;
    isDedicatedVip: boolean;
    public: boolean;
    country_name: string;
    country_code: string;
    points: number;
    university: unknown;
    university_name: unknown;
    github: string;
    linkedin: unknown;
    twitter: string;
    isRespected: boolean;
    isFollowed: boolean;
  };
}

export default async function IndexPage() {
  const getHackTheBoxProfile = async (): Promise<HackTheBoxProfile> => {
    const res = await fetch(
      "https://labs.hackthebox.com/api/v4/user/profile/basic/2184403",
      {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${process.env.HTB_API_KEY}`,
        },
      },
    );
    const data: HackTheBoxProfile = await res.json();
    return data;
  };

  const hackTheBoxProfile = await getHackTheBoxProfile();

  const getTryHackMeProfile = async (): Promise<TryHackMeProfile> => {
    const res = await fetch(
      "https://tryhackme.com/api/v2/public-profile?username=cazcik",
    );
    const data: TryHackMeProfile = await res.json();
    return data;
  };

  const tryHackMeProfile = await getTryHackMeProfile();

  const getHackerOneProfile = async (): Promise<HackerOneProfile> => {
    const res = await fetch("https://hackerone.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        operationName: "UserProfileStatsCard",
        variables: {
          username: "cazcik",
          snapshotType: "last_90_days",
          product_area: "other",
          product_feature: "other",
        },
        query:
          "query UserProfileStatsCard($username: String!, $snapshotType: UserStatisticsSnapshotTypeEnum!) {\n  user(username: $username) {\n    id\n    statistics_snapshot(snapshot_type: $snapshotType) {\n      id\n      signal\n      signal_percentile\n      impact\n      impact_percentile\n      reputation\n      rank\n      __typename\n    }\n    __typename\n  }\n}\n",
      }),
    });
    const data: HackerOneProfile = await res.json();
    return data;
  };

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
                {hackTheBoxProfile && hackTheBoxProfile.profile.rank
                  ? hackTheBoxProfile.profile.rank.toLowerCase()
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
