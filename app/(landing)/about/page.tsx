import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "about",
};

function getYears(startDate: string) {
  const start = new Date(startDate);
  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();

  if (
    today.getMonth() < start.getMonth() ||
    (today.getMonth() === start.getMonth() && today.getDate() < start.getDate())
  ) {
    years--; // subtract one year if start hasn't happened yet.
  }

  return years;
}

export default function AboutPage() {
  return (
    <article className="prose prose-sm prose-neutral dark:prose-invert px-5 py-6 lowercase">
      <h1>About</h1>
      <p>Hi I'm Zac Wojcik.</p>
      <p>
        I'm an application/product security engineer, founder, writer, and
        teacher from Detroit, Michigan. I'm {getYears("1996-11-05T00:00:00Z")}{" "}
        years old and I've been working in security for about{" "}
        {getYears("2020-02-01T00:00:00Z")} years.
      </p>
      <p>
        I've lived in Detroit Michigan my whole life with my wife, daughter, and
        son. While we do love it here, this is more than likely going to change
        very soon. Something a little more tropical is in our future. 🌴
      </p>
      <p>
        Since I'm not very prolific in the bug bounty or open source space, you
        won't find me dropping crazy POC's or bounty announcements. Mostly I
        just try my best to keep things simple, safe, and boring.
      </p>
      <p>
        Security is a team sport and involves lots of collaboration and
        partnerships from various places in your company, organization, or
        community. There is room for both deep research as well as practical
        operational lessons. I tend to fall in the latter category.
      </p>
      <p>
        Outside of work and family I enjoy spending time outdoors and playing
        ice hockey. I've been playing hockey for{" "}
        {getYears("2003-01-01T00:00:00Z")} years and love the game immensely. 🏒
      </p>
    </article>
  );
}
