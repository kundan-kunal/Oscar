import type { Metadata } from "next";
import {
  DM_Sans,
  Cormorant_Garamond,
  Space_Grotesk,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kundan Kunal — Technology, Business & Ideas",
  description:
    "Explore the work, projects, writing, ideas and experiences of Kundan Kunal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}