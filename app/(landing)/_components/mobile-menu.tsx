"use client";

import { useState } from "react";
import { RiCloseLargeLine, RiMenuLine } from "@remixicon/react";
import { Dialog, DialogPanel } from "@headlessui/react";

import NavLink from "./nav-link";

export default function MobileMenu({
  navigation,
}: {
  navigation: {
    title: string;
    href: string;
  }[];
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="flex"
      >
        <RiMenuLine className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white size-5" />
      </button>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="sm:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-black">
          <header className="px-5 py-3 border-b border-neutral-200 dark:border-neutral-800">
            <div className="sm:hidden flex items-center justify-between w-full">
              <div onClick={() => setMobileMenuOpen(false)}>
                <NavLink href="/">@cazcik</NavLink>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex"
                >
                  <RiCloseLargeLine className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white size-5" />
                </button>
              </div>
            </div>
          </header>
          <div className="flow-root">
            <div className="flex flex-col space-y-2 px-5 py-3">
              {navigation.map((item) => (
                <div key={item.href} onClick={() => setMobileMenuOpen(false)}>
                  <NavLink href={item.href}>{item.title}</NavLink>
                </div>
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
