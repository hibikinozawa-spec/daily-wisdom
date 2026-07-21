import type { Metadata } from "next";
import { Figtree, Shippori_Mincho } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const shippori = Shippori_Mincho({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "GOGEN — 五言 | 一日五つの言葉",
    template: "%s · GOGEN",
  },
  description:
    "著名な経営者・思想家・偉人の格言と小話を、カテゴリ分けして一日に五つ届ける読み物アプリ。",
  openGraph: {
    title: "GOGEN — 五言",
    description: "偉人の言葉を、一日に五つ。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${figtree.variable} ${shippori.variable} h-full`}>
      <body className="relative flex min-h-full flex-col antialiased">
        <SiteHeader />
        <main className="relative z-10 flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
