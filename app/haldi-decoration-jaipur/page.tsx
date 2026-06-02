import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Haldi Decoration in Jaipur | Yash Soni',
  description: 'Beautiful haldi decoration services in Jaipur. Yash Soni offers vibrant haldi setup design combined with professional anchor services.',
  alternates: {
    canonical: 'https://yashsoni.in/haldi-decoration-jaipur',
  },
  openGraph: {
    title: 'Haldi Decoration in Jaipur | Yash Soni',
    description: 'Beautiful haldi decoration services in Jaipur. Yash Soni offers vibrant haldi setup design combined with professional anchor services.',
    url: 'https://yashsoni.in/haldi-decoration-jaipur',
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
  "name": "Haldi Decoration Jaipur",
  "provider": {
    "@type": "Person",
    "name": "Yash Soni"
  },
  "description": "Vibrant haldi decoration services in Jaipur",
  "url": "https://yashsoni.in/haldi-decoration-jaipur",
  "areaServed": "Jaipur",
  "serviceType": "Haldi Decoration"
}) }}
      />
      <PageClient />
    </>
  );
}
