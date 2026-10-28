import type { Metadata } from "next";
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
  title: "Arul | SEO Specialist & Digital Marketer",
  description:
    "I make businesses more discoverable. Experienced in SEO, Meta Ads, Google Ads, GEO, AI Search, and Digital Growth.",
  keywords: [
    "Arul",
    "SEO Specialist",
    "Digital Marketer",
    "Meta Ads",
    "Google Ads",
    "GEO",
    "AI Search",
    "Digital Growth",
    "Technical SEO",
  ],
  authors: [{ name: "Arul", url: "https://arul.digital" }],
  creator: "Arul",
  publisher: "Arul",
  metadataBase: new URL("https://arul.digital"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arul.digital",
    siteName: "Arul | SEO Specialist & Digital Marketer",
    title: "Arul | SEO Specialist & Digital Marketer",
    description:
      "I make businesses more discoverable. Experienced in SEO, Meta Ads, Google Ads, GEO, AI Search, and Digital Growth.",
    images: [
      {
        url: "/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Arul — SEO Specialist & Digital Marketer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arul | SEO Specialist & Digital Marketer",
    description:
      "I make businesses more discoverable. Experienced in SEO, Meta Ads, Google Ads, GEO, AI Search, and Digital Growth.",
    images: ["/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://arul.digital/#person",
      name: "Arul",
      jobTitle: "SEO Specialist & Digital Marketer",
      description:
        "An engineer who found his way into digital marketing. Focused on SEO, Meta Ads, Google Ads, GEO, AI, and Digital Growth.",
      url: "https://arul.digital",
      email: "arulv11dm@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressCountry: "IN",
      },
      knowsAbout: [
        "SEO",
        "Technical SEO",
        "Meta Ads",
        "Google Ads",
        "AI Search",
        "GEO",
        "Analytics",
        "Digital Strategy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://arul.digital/#website",
      url: "https://arul.digital",
      name: "Arul | SEO Specialist & Digital Marketer",
      publisher: { "@id": "https://arul.digital/#person" },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#111827]">
        {children}
      </body>
    </html>
  );
}
