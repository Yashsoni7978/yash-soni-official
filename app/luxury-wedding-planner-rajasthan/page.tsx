import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Luxury Wedding Planner in Rajasthan | Yash Soni',
  description: 'Top luxury wedding planner in Rajasthan. Yash Soni offers high-end wedding planning, royal palace venues and professional anchoring across Rajasthan.',
  alternates: {
    canonical: 'https://yashsoni.in/luxury-wedding-planner-rajasthan',
  },
  openGraph: {
    title: 'Luxury Wedding Planner in Rajasthan | Yash Soni',
    description: 'Top luxury wedding planner in Rajasthan. Yash Soni offers high-end wedding planning, royal palace venues and professional anchoring across Rajasthan.',
    url: 'https://yashsoni.in/luxury-wedding-planner-rajasthan',
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
  "name": "Luxury Wedding Planner Rajasthan",
  "provider": {
    "@type": "Person",
    "name": "Yash Soni"
  },
  "description": "High-end luxury wedding planning across Rajasthan",
  "url": "https://yashsoni.in/luxury-wedding-planner-rajasthan",
  "areaServed": "Rajasthan",
  "serviceType": "Luxury Wedding Planning"
}) }}
      />
      <PageClient />
    </>
  );
}
