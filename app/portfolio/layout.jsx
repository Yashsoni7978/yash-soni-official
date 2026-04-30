export const metadata = {
  title: "Portfolio & Showreel | Anchor Yash Soni | Jaipur",
  description: "1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.",
  keywords: ["Anchor Yash Soni Portfolio", "Wedding Anchor Videos", "Sangeet Host Jaipur Showreel", "Corporate Event Anchor Gallery", "Event Emcee Videos"],
  openGraph: {
    title: "Portfolio & Showreel | Anchor Yash Soni",
    description: "A curated collection of moments where energy meets elegance.",
    url: "https://yashsoni.in/portfolio",
    siteName: "Anchor Yash",
    images: [
      {
        url: "/gallery-1.webp",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni live event portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};
export default function PortfolioLayout({ children }) {
  return <>{children}</>;
}