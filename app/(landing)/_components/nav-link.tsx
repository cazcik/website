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
  const path = usePathname();

  const active = path === href;

  return (
    <Link
      href={href}
      className={clsx(
        active
          ? "text-black dark:text-white"
          : "text-neutral-500 dark:text-neutral-600 hover:text-neutral-700 dark:hover:text-neutral-300",
        "lowercase"
      )}
    >
      {children}
    </Link>
  );
}
