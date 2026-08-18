import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://yashsoni.in/wedding-emcee-jaipur",
  },
};

export default function WeddingEmceeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
