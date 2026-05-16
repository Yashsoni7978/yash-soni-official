// app/anchor-in-jaipur/layout.jsx
// SERVER COMPONENT — metadata only, no head/script tags
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Best Anchor in Jaipur | Anchor Yash Soni — 4.9★ Local Event Host",
  description:
    "Yash Soni — the most trusted anchor in Jaipur. 1,100+ events, 4.9★ rated, bilingual Hindi/English host for weddings, sangeets and corporate events.",
  keywords: [
    "anchor in jaipur",
    "best anchor in jaipur",
    "anchors in jaipur",
    "anchor jaipur",
    "jaipur event host",
    "jaipur anchor",
    "anchor yash soni",
    "anchor yash",
    "wedding emcee jaipur",
    "wedding anchor jaipur",
    "corporate anchor jaipur",
    "sangeet anchor jaipur",
    "local anchor jaipur",
    "anchor near me jaipur",
    "best emcee jaipur",
    "event anchor jaipur",
    "anchor in rajasthan",
    "jaipur destination wedding anchor",
    "anchor kukas jaipur",
    "anchor ajmer road jaipur",
    "anchor mansarovar jaipur",
    "anchor sitapura jaipur",
    "anchor vaishali nagar jaipur",
    "anchor amer road jaipur",
    "rambagh palace wedding anchor",
    "fairmont jaipur wedding anchor",
  ],
  alternates: {
    canonical: "https://yashsoni.in/anchor-in-jaipur" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1 } },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yashsoni.in/anchor-in-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Best Anchor in Jaipur | Anchor Yash Soni — 4.9★",
    description:
      "4.9★ rated local Jaipur anchor. 1100+ events at Rambagh Palace, Fairmont, Kukas, Ajmer Road & JECC Sitapura.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Best Anchor in Jaipur — Anchor Yash Soni" }] },
  twitter: {
    card: "summary_large_image",
    title: "Best Anchor in Jaipur | Anchor Yash Soni",
    description: "4.9★ rated. 1100+ events. Jaipur's most trusted local event anchor.",
    images: ["/og-image.webp"] },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873" } };
export default function AnchorInJaipurLayout({ children }) {
  // Schemas injected in page.jsx body (client component)
  return <>{children}</>;
}
