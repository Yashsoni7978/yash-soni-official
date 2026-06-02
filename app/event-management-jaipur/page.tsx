import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Event Management in Jaipur | Yash Soni',
  description: 'Professional event management services in Jaipur by Yash Soni. Weddings, corporate events, private parties - end-to-end planning and anchoring.',
  alternates: {
    canonical: 'https://yashsoni.in/event-management-jaipur',
  },
  openGraph: {
    title: 'Event Management in Jaipur | Yash Soni',
    description: 'Professional event management services in Jaipur by Yash Soni. Weddings, corporate events, private parties - end-to-end planning and anchoring.',
    url: 'https://yashsoni.in/event-management-jaipur',
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
  "@type": "LocalBusiness",
  "name": "Yash Soni - Event Management Jaipur",
  "description": "Professional event management services in Jaipur",
  "url": "https://yashsoni.in/event-management-jaipur",
  "telephone": "+917737877978",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN"
  },
  "priceRange": "₹₹₹",
  "areaServed": "Jaipur"
}) }}
      />
      <PageClient />
    </>
  );
}
