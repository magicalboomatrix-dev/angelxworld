import { Metadata } from 'next';
import HomePage from "./homeClient.js";

export const metadata = {
  metadataBase: new URL("https://www.angelx.ind.in"),

  title: "AngelX Official – Best Platform to Buy & Sell USDT | AngelX",

  description:
    "AngelX is India’s trusted USDT exchange platform. Sell USDT at premium INR rates with instant payouts, high security, and 24/7 support.",

  keywords: [
    "angelx usdt price",
    "angelx crypto",
    "angelx usdt sell",
    "angelx login",
    "angelx pro",
    "angelx pro apk",
    "angelx exchange",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },

  authors: [{ name: "AngelX" }],
  publisher: "AngelX",

  openGraph: {
    type: "website",
    title: "Welcome to AngelX — India's Trusted USDT Exchange Platform",
    description:
      "Convert USDT to INR at premium rates with fast processing, strong security, and reliable support.",
    url: "/",
    siteName: "AngelX",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "AngelX USDT Exchange Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Welcome to AngelX — India's Trusted USDT Exchange Platform",
    description:
      "Sell USDT at premium INR rates with instant payouts and secure transactions.",
    site: "@AngelX",
    images: ["/images/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Cryptocurrency Exchange",
};

export default function Page() {
  return <HomePage />;
}
