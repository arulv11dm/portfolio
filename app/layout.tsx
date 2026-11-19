import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
  title: "Arulraj V | SEO & Meta Ads Specialist",
  description:
    "SEO, Meta Ads, Google Ads, WordPress websites and AI video for e-commerce, commercial solar and local businesses. Technical SEO, paid ads and AI search.",
  keywords: [
    "Arulraj V",
    "Arulraj",
    "Arul",
    "SEO Specialist",
    "Meta Ads Specialist",
    "Digital Marketer",
    "Google Ads",
    "WordPress Websites",
    "AI Video",
    "GEO",
    "AI Search",
    "Digital Growth",
    "Technical SEO",
  ],
  authors: [{ name: "Arulraj V", url: "https://www.arulrajvadivel.online/" }],
  creator: "Arulraj V",
  publisher: "Arulraj V",
  metadataBase: new URL("https://www.arulrajvadivel.online"),
  alternates: {
    canonical: "https://www.arulrajvadivel.online/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.arulrajvadivel.online/",
    siteName: "Arulraj V | SEO & Meta Ads Specialist",
    title: "Arulraj V | SEO & Meta Ads Specialist",
    description:
      "SEO, Meta Ads, Google Ads, WordPress websites and AI video for e-commerce, commercial solar and local businesses. Technical SEO, paid ads and AI search.",
    images: [
      {
        url: "/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Arulraj V — SEO & Meta Ads Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arulraj V | SEO & Meta Ads Specialist",
    description:
      "SEO, Meta Ads, Google Ads, WordPress websites and AI video for e-commerce, commercial solar and local businesses. Technical SEO, paid ads and AI search.",
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
      "@id": "https://www.arulrajvadivel.online/#person",
      name: "Arulraj V",
      jobTitle: "SEO & Meta Ads Specialist",
      description:
        "SEO, Meta Ads, Google Ads, WordPress websites and AI video for e-commerce, commercial solar and local businesses. Technical SEO, paid ads and AI search.",
      url: "https://www.arulrajvadivel.online/",
      email: "arulv11dm@gmail.com",
      telephone: "+91 89403 19984",
      sameAs: [
        "https://www.linkedin.com/in/arulraj-v11/",
        "https://www.instagram.com/arulrajav"
      ],
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
        "WordPress Development",
        "AI Video",
        "AI Search",
        "GEO",
        "Analytics",
        "Digital Strategy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.arulrajvadivel.online/#website",
      url: "https://www.arulrajvadivel.online/",
      name: "Arulraj V | SEO & Meta Ads Specialist",
      publisher: { "@id": "https://www.arulrajvadivel.online/#person" },
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
