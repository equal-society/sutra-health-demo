import type { Metadata } from "next";
import BookAppointmentClient from "@/components/booking/BookAppointmentClient";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Book a Health Consultation in Faridabad",
  description:
    "Book a Sutra Health consultation in Faridabad for physician guidance, lifestyle medicine, nutrition and related health support.",
  alternates: { canonical: `${SITE_URL}/book-appointment` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Book a Health Consultation | Sutra Health",
    description:
      "Choose a convenient time for a Sutra Health consultation and discuss your health concerns with the appropriate care team.",
    url: `${SITE_URL}/book-appointment`,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Book a Sutra Health consultation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Health Consultation | Sutra Health",
    description:
      "Choose a convenient appointment time with Sutra Health.",
    images: [`${SITE_URL}/images/og-image.webp`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Book an Appointment", item: `${SITE_URL}/book-appointment` },
  ],
};

export default function BookAppointmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BookAppointmentClient />
    </>
  );
}
