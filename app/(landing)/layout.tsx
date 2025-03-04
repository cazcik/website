import NavLink from "./_components/nav-link";
import MobileMenu from "./_components/mobile-menu";
import {
  RiGithubLine,
  RiTwitterXLine,
  RiLinkedinLine,
  RiBlueskyLine,
} from "@remixicon/react";
import Link from "next/link";

const navigation = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Courses",
    href: "/courses",
  },
  {
    title: "Podcasts",
    href: "/podcasts",
  },
  {
    title: "Uses",
    href: "/uses",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="border-b border-neutral-200 px-5 py-3 dark:border-neutral-800">
        <div className="flex max-w-2xl items-center gap-x-10">
          <nav className="hidden items-center gap-x-7 sm:flex">
            <NavLink href="/">@cazcik</NavLink>
            {navigation.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.title}
              </NavLink>
            ))}
          </nav>
          <div className="flex w-full items-center justify-between sm:hidden">
            <div>
              <NavLink href="/">@cazcik</NavLink>
            </div>
            <div>
              <MobileMenu navigation={navigation} />
            </div>
          </div>
        </div>
      </header>
      <main className="grow">
        <div className="max-w-2xl">{children}</div>
      </main>
      <footer className="border-t border-neutral-200 px-5 py-3 dark:border-neutral-800">
        <div className="max-w-2xl">
          <div>
            <p className="text-xs uppercase">&copy; {currentYear} Zac Wojcik</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
