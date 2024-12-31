import Image from "next/image";
import { Metadata } from "next/types";

import NavLink from "./(home)/_components/nav-link";

export const metadata: Metadata = {
  title: "Not found",
};

export default function Custom404() {
  return (
    <div className="mx-auto mb-20 flex max-w-lg flex-col md:mt-20 md:max-w-xl md:flex-row lg:max-w-3xl">
      <header className="bg-white px-5 py-5 md:py-0 dark:bg-black">
        <div className="flex items-center gap-x-5 md:flex-col md:items-end md:justify-normal md:gap-x-0 md:gap-y-8">
          <div className="flex">
            <Image
              src="/avatar.jpg"
              width={2652}
              height={3000}
              className="size-12 items-end rounded-full md:size-14"
              alt="a man wearing a black cap holding a black dog"
            />
          </div>
          <div className="flex gap-x-5 px-2 md:flex-col md:items-end md:gap-x-0 md:gap-y-3">
            <NavLink href="/">home</NavLink>
          </div>
        </div>
      </header>
      <main className="w-full px-5 pt-5 md:ml-5">
        <div className="flex flex-col space-y-7">
          <div>
            <h1 className="mb-2 text-xl font-medium text-black dark:text-white">
              404
            </h1>
            <p className="text-neutral-500">oops, we can't find that page</p>
          </div>
        </div>
      </main>
    </div>
  );
}
