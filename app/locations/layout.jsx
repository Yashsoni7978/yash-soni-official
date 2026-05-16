export const metadata = {
  title: "Anchor & Event Host Locations Across India | Yash Soni",
  description: "Anchor Yash Soni hosts premium events across 35+ cities in India — from Jaipur palace weddings to Goa beachside galas. View all locations served.",
  keywords: [
    "anchor in india", "event host locations india", "anchor yash soni locations",
    "wedding anchor india", "destination wedding anchor india", "anchor rajasthan",
  ],
  alternates: { canonical: "https://yashsoni.in/locations" },
  openGraph: {
    title: "Event Anchoring Locations Across India | Anchor Yash Soni",
    description: "35+ cities. 1,100+ events. From Rajasthan palaces to Goa beaches — Yash Soni anchors premium events across India.",
    url: "https://yashsoni.in/locations",
    siteName: "Anchor Yash Soni",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Anchor Yash Soni — Event Locations Across India" }],
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export default function LocationsLayout({ children }) {
  return <>{children}</>;
}
