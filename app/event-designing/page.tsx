import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Event Designing in Jaipur | Yash Soni',
  description: 'Creative event designing services in Jaipur. Yash Soni offers concept-to-execution event design for weddings, corporate events and private parties.',
  alternates: {
    canonical: 'https://yashsoni.in/event-designing',
  },
  openGraph: {
    title: 'Event Designing in Jaipur | Yash Soni',
    description: 'Creative event designing services in Jaipur. Yash Soni offers concept-to-execution event design for weddings, corporate events and private parties.',
    url: 'https://yashsoni.in/event-designing',
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
  "name": "Event Designing in Jaipur",
  "provider": {
    "@type": "Person",
    "name": "Yash Soni"
  },
  "description": "Creative event designing services in Jaipur",
  "url": "https://yashsoni.in/event-designing",
  "areaServed": "Jaipur",
  "serviceType": "Event Design"
}) }}
      />
      <PageClient />
    </>
  );
}
