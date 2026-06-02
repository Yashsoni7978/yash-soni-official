import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Artist Management in Jaipur | Yash Soni',
  description: 'Professional artist management services in Jaipur. Yash Soni coordinates performers, artists and entertainment for weddings and corporate events.',
  alternates: {
    canonical: 'https://yashsoni.in/artist-management-jaipur',
  },
  openGraph: {
    title: 'Artist Management in Jaipur | Yash Soni',
    description: 'Professional artist management services in Jaipur. Yash Soni coordinates performers, artists and entertainment for weddings and corporate events.',
    url: 'https://yashsoni.in/artist-management-jaipur',
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
  "name": "Artist Management Jaipur",
  "provider": {
    "@type": "Person",
    "name": "Yash Soni"
  },
  "description": "Professional artist management services in Jaipur",
  "url": "https://yashsoni.in/artist-management-jaipur",
  "areaServed": "Jaipur",
  "serviceType": "Artist Management"
}) }}
      />
      <PageClient />
    </>
  );
}
