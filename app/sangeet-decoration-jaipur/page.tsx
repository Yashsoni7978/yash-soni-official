import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Sangeet Decoration in Jaipur | Yash Soni',
  description: 'Vibrant sangeet decoration services in Jaipur. Yash Soni offers sangeet setup design paired with professional anchor hosting.',
  alternates: {
    canonical: 'https://yashsoni.in/sangeet-decoration-jaipur',
  },
  openGraph: {
    title: 'Sangeet Decoration in Jaipur | Yash Soni',
    description: 'Vibrant sangeet decoration services in Jaipur. Yash Soni offers sangeet setup design paired with professional anchor hosting.',
    url: 'https://yashsoni.in/sangeet-decoration-jaipur',
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
  "name": "Sangeet Decoration Jaipur",
  "provider": {
    "@type": "Person",
    "name": "Yash Soni"
  },
  "description": "Vibrant sangeet decoration services in Jaipur",
  "url": "https://yashsoni.in/sangeet-decoration-jaipur",
  "areaServed": "Jaipur",
  "serviceType": "Sangeet Decoration"
}) }}
      />
      <PageClient />
    </>
  );
}
