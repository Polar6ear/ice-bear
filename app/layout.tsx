import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./tweaks.css";
import "./banner.css";
import { fontVariables } from "./fonts";
import { TweaksProvider } from "@/components/tweaks/use-tweaks";
import { TweaksPanel } from "@/components/tweaks/panel";
import { WipBanner } from "@/components/common/wip-banner";
import { Nav } from "@/components/common/nav";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.author.name}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.author.name }],
  creator: site.author.name,
  publisher: site.author.name,
  keywords: [
    "Nitin Negi",
    "Ice Bear",
    "Software Engineer",
    "Full-stack",
    "FastAPI",
    "Next.js",
    "PostgreSQL",
    "RAG",
    "AI Engineer",
    "Sonoka",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} · ${site.author.name}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.author.name}`,
    description: site.description,
    creator: "@neuralnitin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: site.url,
    types: {
      "application/rss+xml": `${site.url}/feed.xml`,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#c4e8f6",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-display="lilita" data-title="outlined" className={fontVariables}>
      <body>
        <TweaksProvider>
          <div className="site-header">
            <WipBanner />
            <Nav />
          </div>
          {children}
          <TweaksPanel />
        </TweaksProvider>
      </body>
    </html>
  );
}
