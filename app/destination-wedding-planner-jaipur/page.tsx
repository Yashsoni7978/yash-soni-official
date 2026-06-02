import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Destination Wedding Planner Jaipur | Yash Soni',
  description: 'Top destination wedding planner in Jaipur. Yash Soni offers complete destination wedding planning across Rajasthan - venues, decor and anchoring.',
  alternates: {
    canonical: 'https://yashsoni.in/destination-wedding-planner-jaipur',
  },
  openGraph: {
    title: 'Destination Wedding Planner Jaipur | Yash Soni',
    description: 'Top destination wedding planner in Jaipur. Yash Soni offers complete destination wedding planning across Rajasthan - venues, decor and anchoring.',
    url: 'https://yashsoni.in/destination-wedding-planner-jaipur',
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
  "name": "Destination Wedding Planner Jaipur",
  "provider": {
    "@type": "Person",
    "name": "Yash Soni"
  },
  "description": "Top destination wedding planning services in Jaipur",
  "url": "https://yashsoni.in/destination-wedding-planner-jaipur",
  "areaServed": "Rajasthan",
  "serviceType": "Destination Wedding Planning"
}) }}
      />
      <PageClient />
    </>
  );
}
