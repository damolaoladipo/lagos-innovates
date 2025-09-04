import "@/app/globals.css";

import type { Metadata } from "next";
import { AppProvider } from "@/contexts/app-provider";
import { siteConfig } from "../_data/site-config";
import { useLasgFont } from "@/_data/fonts";
import { Header } from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.getStartedUrl),
  description: siteConfig.description,
  keywords: [
    "Lagos Innovates",
    "Lagos Innovates program",
    "Lagos State Innovates",
    "Lagos Innovates LSETF",
    "Idea Hub Lagos",
    "Lagos tech incubation",
    "Lagos startup programs",
    "tech innovation Lagos",
    "early-stage ventures Lagos",
    "Lagos startup support",
    "12-week incubation program Lagos",
    "technology-driven startups Lagos",
    "innovation ecosystem Lagos State",
    "founder guidance Lagos Innovates",
    "tech-focused development Lagos",
  ],
  authors: [
    {
      name: "Damola Oladipo",
      url: "https://damolaoladipo.com",
    },
  ],
  creator: "damolaoladipo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.getStartedUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/blocks/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@damolaoladipo",
  },
  icons: {
    icon: "/blocks/lagos-innovates.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${useLasgFont.variable} bg-background antialiased`}>
        <AppProvider>
          <main className="text-foreground min-h-screen w-full overflow-hidden">
            <Header />
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
