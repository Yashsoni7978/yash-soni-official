import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Theme Wedding Organizer in India | Yash Soni',
  description: 'Top theme wedding organizer in India. Yash Soni plans and anchors royal, destination and themed weddings across Rajasthan and all of India.',
  alternates: {
    canonical: 'https://yashsoni.in/theme-wedding-organizer-india',
  },
  openGraph: {
    title: 'Theme Wedding Organizer in India | Yash Soni',
    description: 'Top theme wedding organizer in India. Yash Soni plans and anchors royal, destination and themed weddings across Rajasthan and all of India.',
    url: 'https://yashsoni.in/theme-wedding-organizer-india',
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
  "name": "Theme Wedding Organizer India",
  "provider": {
    "@type": "Person",
    "name": "Yash Soni"
  },
  "description": "Top theme wedding organizer across India",
  "url": "https://yashsoni.in/theme-wedding-organizer-india",
  "areaServed": "India",
  "serviceType": "Theme Wedding Planning"
}) }}
      />
      <PageClient />
    </>
  );
}
