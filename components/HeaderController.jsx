"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import ManagementNavbar from "./ManagementNavbar";

export const managementRoutes = [
  "/wedding-planning-jaipur",
  "/event-planning-jaipur",
  "/event-management-jaipur",
  "/event-designing",
  "/artist-management-jaipur",
  "/corporate-event-management-company",
  "/destination-wedding-planner-jaipur",
  "/gala-dinner-event-planner",
  "/theme-wedding-organizer-india"
];

export default function HeaderController() {
  const pathname = usePathname();
  const isManagement = managementRoutes.some(route => pathname?.startsWith(route));

  if (isManagement) {
    return <ManagementNavbar />;
  }
  
  return <Navbar />;
}
