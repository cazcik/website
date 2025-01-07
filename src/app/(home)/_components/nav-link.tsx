"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  const active =
    href === "/" ? usePathname() === "/" : usePathname().startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(
        active
          ? "text-black dark:text-white"
          : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300",
        "",
      )}
    >
      {children}
    </Link>
  );
}
