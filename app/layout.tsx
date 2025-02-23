import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "@cazcik",
    template: "%s - @cazcik",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-white dark:bg-black antialiased text-neutral-500 selection:bg-blue-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
