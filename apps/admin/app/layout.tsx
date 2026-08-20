import type { Metadata } from "next";
import { DM_Sans, Italiana } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const display = Italiana({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Operations | BinSaqib",
  robots: { index: false, follow: false }
};

export default function AdminLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
