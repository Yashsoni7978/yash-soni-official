"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import ManagementFooter from "./ManagementFooter";
import { managementRoutes } from "./HeaderController";

export default function FooterController() {
  const pathname = usePathname();
  const isManagement = managementRoutes.some(route => pathname?.startsWith(route));

  if (isManagement) {
    return <ManagementFooter />;
  }
  
  return <Footer />;
}
