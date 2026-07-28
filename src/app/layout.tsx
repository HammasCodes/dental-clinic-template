import type { Metadata } from "next";
import { Sora, Hanken_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumina Dental | Modern Dental Studio in San Francisco",
  description:
    "A modern San Francisco dental studio where precision technology meets genuine calm. General dentistry, Invisalign, implants and smile design, without the dread.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${hanken.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-snow text-ink font-body">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
