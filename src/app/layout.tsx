import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
export const metadata = {
  title: "Teknologyan - Web Development & Digital Solutions",
  description:
    "Teknologyan helps businesses build modern websites, web applications, and improve online presence with SEO services.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "web development company",
    "website development India",
    "freelance web developer",
    "react developer India",
    "next js developer",
    "seo services for business",
    "web application development",
  ],

  authors: [{ name: "Teknologyan" }],

  openGraph: {
    title: "Teknologyan",
    description:
      "Build scalable websites, web apps and grow your business online.",
    url: "https://teknologyan.com",
    siteName: "Teknologyan",
    type: "website",
  },
};