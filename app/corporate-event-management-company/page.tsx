import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Corporate Event Management Company Jaipur | Yash Soni',
  description: 'Leading corporate event management company in Jaipur. Yash Soni offers end-to-end corporate event planning, anchoring and artist management.',
  alternates: {
    canonical: 'https://yashsoni.in/corporate-event-management-company',
  },
  openGraph: {
    title: 'Corporate Event Management Company Jaipur | Yash Soni',
    description: 'Leading corporate event management company in Jaipur. Yash Soni offers end-to-end corporate event planning, anchoring and artist management.',
    url: 'https://yashsoni.in/corporate-event-management-company',
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
  "@type": "Organization",
  "name": "Yash Soni - Corporate Event Management",
  "description": "Leading corporate event management company in Jaipur",
  "url": "https://yashsoni.in/corporate-event-management-company",
  "founder": {
    "@type": "Person",
    "name": "Yash Soni"
  },
  "areaServed": ["Jaipur", "Rajasthan"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN"
  }
}) }}
      />
      <PageClient />
    </>
  );
}
