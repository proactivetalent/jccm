import type { Metadata } from "next";
import { Figtree, Geist } from "next/font/google";
import localFont from "next/font/local";
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

const stackSansHeadline = localFont({
  src: "./fonts/StackSansHeadline-Latin.woff2",
  variable: "--font-stack-headline",
  weight: "200 700",
  display: "block",
});

const stackSansText = localFont({
  src: "./fonts/StackSansText-Latin.woff2",
  variable: "--font-stack-text",
  weight: "200 700",
  display: "block",
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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${figtree.variable} ${stackSansHeadline.variable} ${stackSansText.variable}`}
      >
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
