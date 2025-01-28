"use server";

import { revalidatePath } from "next/cache";

import { HackTheBoxProfile, TryHackMeProfile, HackerOneProfile } from "@/types";

export const getHackTheBoxProfile = async (): Promise<HackTheBoxProfile> => {
  const res = await fetch(
    "https://labs.hackthebox.com/api/v4/user/profile/basic/2184403",
    {
      headers: {
        accept: "application/json",
        authorization: `Bearer ${process.env.HTB_API_KEY}`,
      },
      next: {
        revalidate: 60,
      },
    },
  );
  const data: HackTheBoxProfile = await res.json();
  return data;
};

export const getTryHackMeProfile = async (): Promise<TryHackMeProfile> => {
  const res = await fetch(
    "https://tryhackme.com/api/v2/public-profile?username=cazcik",
    {
      next: {
        revalidate: 60,
      },
    },
  );
  const data: TryHackMeProfile = await res.json();

  return data;
};

export const getHackerOneProfile = async (): Promise<HackerOneProfile> => {
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
    next: {
      revalidate: 60,
    },
  });
  const data: HackerOneProfile = await res.json();

  return data;
};
