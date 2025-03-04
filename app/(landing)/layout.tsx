import NavLink from "./_components/nav-link";
import MobileMenu from "./_components/mobile-menu";

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
      <header className="px-5 py-3 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-x-10">
          <nav className="hidden sm:flex items-center gap-x-7">
            <NavLink href="/">@cazcik</NavLink>
            {navigation.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.title}
              </NavLink>
            ))}
          </nav>
          <div className="sm:hidden flex items-center justify-between w-full">
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
        <div className="max-w-lg">{children}</div>
      </main>
      <footer className="px-5 py-3 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-center uppercase text-xs">
          &copy; {currentYear} Zac Wojcik
        </p>
      </footer>
    </div>
  );
}
