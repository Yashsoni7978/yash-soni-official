import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Wedding Venues in Jaipur | Yash Soni',
  description: 'Discover the best wedding venues in Jaipur curated by anchor Yash Soni. Palace venues, farmhouses and luxury resorts for your Jaipur wedding.',
  alternates: {
    canonical: 'https://yashsoni.in/wedding-venue-jaipur',
  },
  openGraph: {
    title: 'Wedding Venues in Jaipur | Yash Soni',
    description: 'Discover the best wedding venues in Jaipur curated by anchor Yash Soni. Palace venues, farmhouses and luxury resorts for your Jaipur wedding.',
    url: 'https://yashsoni.in/wedding-venue-jaipur',
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
  "@type": "Service",
  "name": "Wedding Venues in Jaipur",
  "provider": {
    "@type": "Person",
    "name": "Yash Soni"
  },
  "description": "Top wedding venue recommendations in Jaipur",
  "url": "https://yashsoni.in/wedding-venue-jaipur",
  "areaServed": "Jaipur",
  "serviceType": "Wedding Venue Consultation"
}) }}
      />
      <PageClient />
    </>
  );
}
