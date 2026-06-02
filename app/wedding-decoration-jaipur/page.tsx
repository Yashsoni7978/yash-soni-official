import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Wedding Decoration in Jaipur | Yash Soni Events',
  description: 'Beautiful wedding decoration services in Jaipur. Yash Soni Events offers floral, lighting and theme decoration for weddings across Rajasthan.',
  alternates: {
    canonical: 'https://yashsoni.in/wedding-decoration-jaipur',
  },
  openGraph: {
    title: 'Wedding Decoration in Jaipur | Yash Soni Events',
    description: 'Beautiful wedding decoration services in Jaipur. Yash Soni Events offers floral, lighting and theme decoration for weddings across Rajasthan.',
    url: 'https://yashsoni.in/wedding-decoration-jaipur',
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
  "name": "Wedding Decoration in Jaipur",
  "provider": {
    "@type": "Person",
    "name": "Yash Soni"
  },
  "description": "Beautiful wedding decoration services in Jaipur",
  "url": "https://yashsoni.in/wedding-decoration-jaipur",
  "areaServed": "Jaipur",
  "serviceType": "Wedding Decoration"
}) }}
      />
      <PageClient />
    </>
  );
}
