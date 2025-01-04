import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";

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
    default: "@cazcik",
    template: "%s - @cazcik",
  },
  description:
    "my humble home on the collection of tubes we call the internet.",
  openGraph: {
    title: {
      default: "@cazcik",
      template: "%s - @cazcik",
    },
    description:
      "my humble home on the collection of tubes we call the internet.",
    url: "https://cazcik.com",
    siteName: "@cazcik",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "@cazcik",
      template: "%s - @cazcik",
    },
    description:
      "my humble home on the collection of tubes we call the internet.",
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
      <body>{children}</body>
    </html>
  );
}
