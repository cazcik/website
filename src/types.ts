export type TryHackMeProfile = {
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
};

export type HackerOneProfile = {
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
};

export type HackTheBoxProfile = {
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
};
