import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "Vanshiv | Multi-Cloud Experts, Salesforce & MuleSoft Partners",
    template: "%s | Vanshiv",
  },
  description: "Vanshiv offers premium digital transformation consulting, specializing in scalable Salesforce implementations, MuleSoft development, and multi-cloud architecture.",
  keywords: ["Vanshiv", "Salesforce Implementation Partner", "MuleSoft Development Services", "Multi-Cloud Experts", "Digital Transformation Consulting", "Cloud Architecture Solutions", "CRM"],
  authors: [{ name: "Vanshiv Technologies" }],
  creator: "Vanshiv",
  publisher: "Vanshiv",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.vanshiv.com/",
    title: "Vanshiv | Multi-Cloud Experts, Salesforce & MuleSoft Partners",
    description: "Vanshiv offers premium digital transformation consulting, specializing in scalable Salesforce implementations, MuleSoft development, and multi-cloud architecture.",
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
    title: "Vanshiv | Multi-Cloud Experts, Salesforce & MuleSoft Partners",
    description: "Vanshiv offers premium digital transformation consulting, specializing in scalable Salesforce implementations, MuleSoft development, and multi-cloud architecture.",
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
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
