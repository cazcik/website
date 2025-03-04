"use client";

import { useState } from "react";
import { RiCloseLargeLine, RiCloseLine, RiMenuLine } from "@remixicon/react";
import { Dialog, DialogPanel } from "@headlessui/react";

import NavLink from "./nav-link";

export default function MobileMenu() {
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
              <div>
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
              <div onClick={() => setMobileMenuOpen(false)}>
                <NavLink href="/about">About</NavLink>
              </div>
              <div onClick={() => setMobileMenuOpen(false)}>
                <NavLink href="/blog">Blog</NavLink>
              </div>
              <div onClick={() => setMobileMenuOpen(false)}>
                <NavLink href="/courses">Courses</NavLink>
              </div>
              <div onClick={() => setMobileMenuOpen(false)}>
                <NavLink href="/podcasts">Podcasts</NavLink>
              </div>
              <div onClick={() => setMobileMenuOpen(false)}>
                <NavLink href="/uses">Uses</NavLink>
              </div>
              <div onClick={() => setMobileMenuOpen(false)}>
                <NavLink href="/contact">contact</NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
