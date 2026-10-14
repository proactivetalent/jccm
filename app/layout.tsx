/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Figtree, Geist } from "next/font/google";
import type { ReactNode } from "react";

import { SanityLive } from "@/sanity/lib/live";

import "./globals.css";

const geist = Geist({
  variable: "--font-jccm-metric",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-jccm-figtree",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "JCCM",
    template: "%s | JCCM",
  },
  description: "JCCM corporate website.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

/**
 * Stack Sans Headline / Text are loaded via Google Fonts CSS (not next/font)
 * because Next has no size-adjust metrics for them yet, which floods the
 * Turbopack console with "Failed to find font override values" warnings.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@300;400;500;600&family=Stack+Sans+Text:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geist.variable} ${figtree.variable}`}>
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
