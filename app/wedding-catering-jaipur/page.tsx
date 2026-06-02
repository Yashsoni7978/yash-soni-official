import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Wedding Catering in Jaipur | Yash Soni Events',
  description: 'Premium wedding catering services in Jaipur. Yash Soni Events coordinates wedding catering, menu planning and food management for your big day.',
  alternates: {
    canonical: 'https://yashsoni.in/wedding-catering-jaipur',
  },
  openGraph: {
    title: 'Wedding Catering in Jaipur | Yash Soni Events',
    description: 'Premium wedding catering services in Jaipur. Yash Soni Events coordinates wedding catering, menu planning and food management for your big day.',
    url: 'https://yashsoni.in/wedding-catering-jaipur',
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
  "name": "Wedding Catering in Jaipur",
  "provider": {
    "@type": "Person",
    "name": "Yash Soni"
  },
  "description": "Premium wedding catering coordination in Jaipur",
  "url": "https://yashsoni.in/wedding-catering-jaipur",
  "areaServed": "Jaipur",
  "serviceType": "Wedding Catering"
}) }}
      />
      <PageClient />
    </>
  );
}
