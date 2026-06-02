import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Wedding Planning in Jaipur | Yash Soni',
  description: 'Complete wedding planning in Jaipur by Yash Soni. From venue selection to anchoring - full-service wedding planning for your dream Jaipur wedding.',
  alternates: {
    canonical: 'https://yashsoni.in/wedding-planning-jaipur',
  },
  openGraph: {
    title: 'Wedding Planning in Jaipur | Yash Soni',
    description: 'Complete wedding planning in Jaipur by Yash Soni. From venue selection to anchoring - full-service wedding planning for your dream Jaipur wedding.',
    url: 'https://yashsoni.in/wedding-planning-jaipur',
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
  "name": "Wedding Planning in Jaipur",
  "provider": {
    "@type": "Person",
    "name": "Yash Soni"
  },
  "description": "Complete wedding planning services in Jaipur",
  "url": "https://yashsoni.in/wedding-planning-jaipur",
  "areaServed": "Jaipur",
  "serviceType": "Wedding Planning"
}) }}
      />
      <PageClient />
    </>
  );
}
