export const metadata = {
  title: "Anchor & Event Host Locations across Jaipur & Rajasthan | Yash Soni",
  description: "Anchor Yash Soni hosts premium events across 35+ cities in India — from Jaipur palace weddings to Goa beachside galas. View all locations served.",
  keywords: [
    "anchor in india", "event host locations india", "anchor yash soni locations",
    "wedding anchor india", "destination wedding anchor india", "anchor rajasthan",
  ],
  alternates: { canonical: "https://yashsoni.in/locations" },
  openGraph: {
    title: "Event Anchoring Locations across Jaipur & Rajasthan | Anchor Yash Soni",
    description: "35+ cities. 700+ shows. From Rajasthan palaces to Goa beaches — Yash Soni anchors premium events across Jaipur & Rajasthan.",
    url: "https://yashsoni.in/locations",
    siteName: "Anchor Yash Soni",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Anchor Yash Soni — Event Locations across Jaipur & Rajasthan" }],
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export default function LocationsLayout({ children }) {
  return <>{children}</>;
}
