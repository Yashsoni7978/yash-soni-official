export const metadata = {
  title: "Celebrity & Public Events Host | Anchor Yash Soni",
  description: "Jaipur's premier host for luxury launches, music festivals, and celebrity meet-and-greets. High-stakes public event anchoring with elite crowd control.",
  keywords: ["Celebrity Event Anchor", "Public Event Host Jaipur", "Concert Emcee", "Fashion Show Anchor", "Store Launch Host"],
  openGraph: {
    title: "Celebrity & Public Events Host | Yash Soni",
    description: "From managing 5000+ crowds at concerts to interviewing Bollywood Stars on the red carpet.",
    url: "https://yashsoni.in/celebrity-public-events-host",
    siteName: "Anchor Yash Soni",
    images: [{ url: "/service-fashion.webp", width: 1200, height: 630, alt: "Anchor Yash Soni hosting a luxury public event" }],
    locale: "en_IN",
    type: "website",
  },
};

export default function CelebrityLayout({ children }) {
  return <>{children}</>;
}