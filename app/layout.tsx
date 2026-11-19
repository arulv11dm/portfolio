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
  title: "Arulraj V | SEO Specialist & Digital Marketer",
  description:
    "I make businesses more discoverable. Experienced in SEO, Meta Ads, Google Ads, GEO, AI Search, and Digital Growth.",
  keywords: [
    "Arulraj V",
    "Arulraj",
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
  authors: [{ name: "Arulraj V", url: "https://arul.digital" }],
  creator: "Arulraj V",
  publisher: "Arulraj V",
  metadataBase: new URL("https://arul.digital"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arul.digital",
    siteName: "Arulraj V | SEO Specialist & Digital Marketer",
    title: "Arulraj V | SEO Specialist & Digital Marketer",
    description:
      "I make businesses more discoverable. Experienced in SEO, Meta Ads, Google Ads, GEO, AI Search, and Digital Growth.",
    images: [
      {
        url: "/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Arulraj V — SEO Specialist & Digital Marketer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arulraj V | SEO Specialist & Digital Marketer",
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
      name: "Arulraj V",
      jobTitle: "SEO Specialist & Digital Marketer",
      description:
        "An engineer who found his way into digital marketing. Focused on SEO, Meta Ads, Google Ads, GEO, AI, and Digital Growth.",
      url: "https://arul.digital",
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
      name: "Arulraj V | SEO Specialist & Digital Marketer",
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
