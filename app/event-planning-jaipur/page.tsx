import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Event Planning in Jaipur | Yash Soni',
  description: 'Professional event planning in Jaipur by Yash Soni. Weddings, corporate events, private parties - complete planning and anchoring services.',
  alternates: {
    canonical: 'https://yashsoni.in/event-planning-jaipur',
  },
  openGraph: {
    title: 'Event Planning in Jaipur | Yash Soni',
    description: 'Professional event planning in Jaipur by Yash Soni. Weddings, corporate events, private parties - complete planning and anchoring services.',
    url: 'https://yashsoni.in/event-planning-jaipur',
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
  "name": "Event Planning in Jaipur",
  "provider": {
    "@type": "Person",
    "name": "Yash Soni"
  },
  "description": "Professional event planning services in Jaipur",
  "url": "https://yashsoni.in/event-planning-jaipur",
  "areaServed": "Jaipur",
  "serviceType": "Event Planning"
}) }}
      />
      <PageClient />
    </>
  );
}
