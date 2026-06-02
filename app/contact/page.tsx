import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Contact Anchor Yash Soni | Book for Your Event',
  description: 'Get in touch with Yash Soni to book him as anchor for your wedding, corporate event or special occasion. based in Jaipur, Rajasthan.',
  alternates: {
    canonical: 'https://yashsoni.in/contact',
  },
  openGraph: {
    title: 'Contact Anchor Yash Soni | Book for Your Event',
    description: 'Get in touch with Yash Soni to book him as anchor for your wedding, corporate event or special occasion. based in Jaipur, Rajasthan.',
    url: 'https://yashsoni.in/contact',
    siteName: 'Yash Soni - Anchor & Emcee',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Yash Soni",
  "description": "Book anchor Yash Soni for your event",
  "url": "https://yashsoni.in/contact",
  "mainEntity": {
    "@type": "Person",
    "name": "Yash Soni",
    "jobTitle": "Professional Anchor & Emcee",
    "url": "https://yashsoni.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    }
  }
}) }}
      />
      <PageClient />
    </>
  );
}
