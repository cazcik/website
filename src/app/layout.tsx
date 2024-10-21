import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const source = localFont({
  src: [
    {
      path: "source-sans-3vf-upright.woff2",
      style: "normal",
    },
    {
      path: "source-sans-3vf-italic.woff2",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-source",
});

export const metadata: Metadata = {
  title: "Zac Wojcik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${source.variable} bg-white text-black antialiased scroll-smooth`}
    >
      <body>
        <div className="mx-auto mb-20 flex max-w-xl flex-col md:mt-20 md:max-w-2xl md:flex-row lg:max-w-4xl">
          <header className="bg-white px-5 py-5 md:py-0">
            <div className="flex items-center gap-x-5 md:flex-col md:items-end md:justify-normal md:gap-x-0 md:gap-y-8">
              <Link href="/" className="flex">
                <Image
                  src="/avatar.jpg"
                  width={2652}
                  height={3000}
                  className="h-10 w-10 items-end rounded-full md:h-14 md:w-14"
                  alt="a man wearing a black cap holding a black dog"
                />
              </Link>
              <div className="flex gap-x-5 px-2 md:flex-col md:items-end md:gap-x-0 md:gap-y-3">
                <Link
                  href="/blog"
                  className="text-neutral-500 hover:text-neutral-700"
                >
                  blog
                </Link>
                <Link
                  href="/newsletter"
                  className="text-neutral-500 hover:text-neutral-700"
                >
                  newsletter
                </Link>
              </div>
            </div>
          </header>
          <main className="w-full px-5 pt-5 md:ml-5">{children}</main>
        </div>
        {process.env.NODE_ENV === "production" ? (
          <script
            defer
            data-domain="cazcik.com"
            data-api="https://circles.cazcik.com/api/event"
            src="https://circles.cazcik.com/js/script.js"
          ></script>
        ) : null}
      </body>
    </html>
  );
}
