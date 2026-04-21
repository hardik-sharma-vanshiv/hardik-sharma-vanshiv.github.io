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

export const metadata: Metadata = {
  title: {
    default: "Vanshiv - The Digital Architect",
    template: "%s | Vanshiv",
  },
  description: "Driving digital transformation with complete Salesforce and MuleSoft solutions. Global leader in cloud strategy, implementation, and integration.",
  keywords: ["Vanshiv", "Digital Transformation", "Salesforce", "MuleSoft", "Cloud Solutions", "IT Consultant", "Digital Architecture", "CRM"],
  authors: [{ name: "Vanshiv Technologies" }],
  creator: "Vanshiv",
  publisher: "Vanshiv",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.vanshiv.com/",
    title: "Vanshiv - The Digital Architect",
    description: "Driving digital transformation with complete Salesforce and MuleSoft solutions.",
    siteName: "Vanshiv",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vanshiv - Digital Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanshiv - The Digital Architect",
    description: "Driving digital transformation with complete Salesforce and MuleSoft solutions.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.vanshiv.com",
  },
};

import CookieBanner from "@/components/CookieBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
