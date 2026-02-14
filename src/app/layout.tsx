import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teknologyan.com"),

  title: {
    default: "Teknologyan - Web Development & Digital Solutions",
    template: "%s | Teknologyan",
  },

  description:
    "We provide affordable web development, web app and SEO services for startups and businesses in India, US, Canada and Europe. Build scalable digital products.",

  keywords: [
    "web development company",
    "website development company",
    "freelance web developer",
    "react developer India",
    "next js developer",
    "java developer",
    "spring boot developer",
    "full stack developer",
    "seo services for small business",
    "affordable web development",
    "hire web developer India",
    "web application development",
    "web development US",
    "web development Canada",
    "web development Europe",
  ],

  authors: [{ name: "Teknologyan" }],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Teknologyan - Web Development & SEO Services",
    description:
      "Helping startups and businesses grow with modern websites and SEO.",
    url: "https://www.teknologyan.com",
    siteName: "Teknologyan",
    type: "website",
  },

  alternates: {
    canonical: "https://www.teknologyan.com",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QJMTPR84VB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QJMTPR84VB');
          `}
        </Script>

        {/* Structured Data (Invisible SEO) */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Teknologyan",
            url: "https://www.teknologyan.com",
            description:
              "Web development and SEO services for startups and businesses.",
            areaServed: ["US", "Canada", "Europe"],
          })}
        </Script>

        {children}

      </body>
    </html>
  );
}