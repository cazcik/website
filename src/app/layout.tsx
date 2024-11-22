import Link from "next/link";
import Image from "next/image";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "inter-var-roman.woff2",
      style: "normal",
    },
    {
      path: "inter-var-italic.woff2",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cazcik.com"),
  title: {
    default: "Zac Wojcik",
    template: "%s - Zac Wojcik",
  },
  description:
    "My humble home on the collection of tubes we call the internet.",
  openGraph: {
    title: {
      default: "Zac Wojcik",
      template: "%s - Zac Wojcik",
    },
    description:
      "My humble home on the collection of tubes we call the internet.",
    url: "https://cazcik.com",
    siteName: "Zac Wojcik",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Zac Wojcik",
      template: "%s - Zac Wojcik",
    },
    description:
      "My humble home on the collection of tubes we call the internet.",
    creator: "@cazcik",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth bg-white text-black antialiased dark:bg-black dark:text-white`}
    >
      <body>
        <div className="mx-auto mb-20 flex max-w-lg flex-col md:mt-20 md:max-w-xl md:flex-row lg:max-w-3xl">
          <header className="bg-white px-5 py-5 md:py-0 dark:bg-black">
            <div className="flex items-center gap-x-5 md:flex-col md:items-end md:justify-normal md:gap-x-0 md:gap-y-8">
              <Link href="/" className="flex">
                <Image
                  src="/avatar.jpg"
                  width={2652}
                  height={3000}
                  className="h-10 w-10 items-end rounded-full md:h-12 md:w-14"
                  alt="a man wearing a black cap holding a black dog"
                />
              </Link>
              <div className="flex gap-x-5 px-2 md:flex-col md:items-end md:gap-x-0 md:gap-y-3"></div>
            </div>
          </header>
          <main className="w-full px-5 pt-5 md:ml-5">{children}</main>
        </div>
      </body>
    </html>
  );
}
