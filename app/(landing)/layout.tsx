import NavLink from "./_components/nav-link";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="px-5 py-3 border-b border-neutral-200 dark:border-neutral-800">
        <div className="hidden sm:flex items-center gap-x-10">
          <nav className="flex items-center gap-x-7">
            <NavLink href="/">@cazcik</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/courses">Courses</NavLink>
            <NavLink href="/podcasts">Podcasts</NavLink>
            <NavLink href="/uses">Uses</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
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
