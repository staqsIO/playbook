import type { Metadata } from "next";
import localFont from "next/font/local";
import { Anton, Antonio, DM_Sans } from "next/font/google";
import { LayoutBlur } from "@/components/layout/layout-blur";
import { ScrollToTop } from "@/components/layout";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});

const antonio = Antonio({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-antonio",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Playbook - Next.js 14 + React 18 + TypeScript",
  description: "Modern Next.js application with React Bits support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark overscroll-none ${anton.variable} ${antonio.variable} ${dmSans.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased overscroll-none`}
      >
        <ScrollToTop />
        {children}
        <LayoutBlur />
      </body>
    </html>
  );
}
