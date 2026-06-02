import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Gala Dinner Event Planner & Host | Yash Soni',
  description: 'Professional gala dinner event planner and host Yash Soni. Elegant hosting for corporate gala dinners, award banquets and luxury events across India.',
  alternates: {
    canonical: 'https://yashsoni.in/gala-dinner-event-planner',
  },
  openGraph: {
    title: 'Gala Dinner Event Planner & Host | Yash Soni',
    description: 'Professional gala dinner event planner and host Yash Soni. Elegant hosting for corporate gala dinners, award banquets and luxury events across India.',
    url: 'https://yashsoni.in/gala-dinner-event-planner',
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
  "name": "Gala Dinner Event Planner",
  "provider": {
    "@type": "Person",
    "name": "Yash Soni"
  },
  "description": "Professional gala dinner planning and hosting",
  "url": "https://yashsoni.in/gala-dinner-event-planner",
  "areaServed": "India",
  "serviceType": "Gala Dinner Planning"
}) }}
      />
      <PageClient />
    </>
  );
}
