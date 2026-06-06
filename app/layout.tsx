import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/styles/desktop/desktop-header.css";
import "@/styles/mobile/mobile-header.css";
import "@/styles/desktop/desktop-hero.css";
import "@/styles/mobile/mobile-hero.css";
import "@/styles/desktop/desktop-expertise.css";
import "@/styles/mobile/mobile-expertise.css";
import "@/styles/desktop/desktop-projects.css";
import "@/styles/mobile/mobile-projects.css";
import "@/styles/desktop/desktop-contact.css";
import "@/styles/mobile/mobile-contact.css";
import "@/styles/desktop/desktop-footer.css";
import "@/styles/mobile/mobile-footer.css";
import ClientLayout from "./client-layout";

// ✅ Gunakan environment variable atau localhost untuk development
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Istofi Yusuf - Full Stack Developer & AI Specialist",
    template: "%s | Istofi Yusuf",
  },
  description:
    "Creating modern web experiences and AI solutions that drive business growth. Full Stack Developer & AI Specialist based in Indonesia.",
  keywords: [
    "Full Stack Developer",
    "AI Specialist",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Indonesia Developer",
  ],
  authors: [{ name: "Istofi Yusuf", url: baseUrl }],
  creator: "Istofi Yusuf",
  publisher: "Istofi Yusuf",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Istofi Yusuf - Full Stack Developer & AI Specialist",
    description:
      "Creating modern web experiences and AI solutions that drive business growth.",
    url: baseUrl,
    siteName: "Istofi Yusuf Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Istofi Yusuf Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Istofi Yusuf - Full Stack Developer & AI Specialist",
    description:
      "Creating modern web experiences and AI solutions that drive business growth.",
    images: ["/twitter-image.png"],
    creator: "@istofiyusuf",
    site: "@istofiyusuf",
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
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Istofi Portfolio",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
