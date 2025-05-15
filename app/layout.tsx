import type { Metadata } from "next";
import { Geist, Geist_Mono, Kablammo, Henny_Penny } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kablammo = Kablammo({
  variable: "--font-kablammo",
  subsets: ["latin"],
});

const hennyPenny = Henny_Penny({
  variable: "--font-henny-penny",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Construction building",
  description: "Construction building with animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kablammo.variable} ${hennyPenny.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
