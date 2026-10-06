import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";

import { Lora, Manrope } from "next/font/google";

const siteUrl = "https://lifequality.org.in";

const lora = Lora({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

/* =========================
   Site Metadata
   ========================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Practical Lifestyle Medicine in Faridabad | Sutra Health",
    template: "%s | Sutra Health",
  },

  description:
    "Doctor-led healthcare in Faridabad bringing medical guidance, nutrition, Therapeutic Yoga and practical lifestyle support together.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Practical Lifestyle Medicine in Faridabad | Sutra Health",

    description:
      "Doctor-led healthcare in Faridabad bringing medical guidance, nutrition, Therapeutic Yoga and practical lifestyle support together.",

    url: siteUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Sutra Health — practical lifestyle medicine in Faridabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Practical Lifestyle Medicine in Faridabad | Sutra Health",
    description:
      "Doctor-led healthcare in Faridabad bringing medical guidance, nutrition, Therapeutic Yoga and practical lifestyle support together.",
    images: [`${siteUrl}/images/og-image.webp`],
  },
};

/* =========================
   Root Layout
   ========================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>

      <body className={`${lora.variable} ${manrope.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "@id": `${siteUrl}/#organization`,
              name: "Sutra Health",
              url: siteUrl,
              logo: `${siteUrl}/logo/sutra-health-logo.webp`,
              address: {
                "@type": "PostalAddress",
                streetAddress: "House No. 229, Roof-Top, Sector 46",
                addressLocality: "Faridabad",
                addressRegion: "Haryana",
                postalCode: "121010",
                addressCountry: "IN",
              },
              areaServed: { "@type": "City", name: "Faridabad" },
              knowsAbout: [
                "Lifestyle medicine",
                "Nutrition counselling",
                "Therapeutic Yoga",
                "Preventive health",
              ],
              sameAs: [
                "https://www.instagram.com/sutrahealth/",
                "https://www.facebook.com/people/Sutrahealth-Equal/",
                "https://www.youtube.com/@sutra-health",
                "https://www.linkedin.com/in/equal-society-ngo",
                "https://sutra-health.medium.com/",
                "https://in.pinterest.com/equal_society/",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              name: "Sutra Health",
              url: siteUrl,
              publisher: { "@id": `${siteUrl}/#organization` },
              inLanguage: "en-IN",
            }),
          }}
        />
        <Header />

        {children}

        <WhatsAppFloat />

        <Footer />
      </body>
    </html>
  );
}