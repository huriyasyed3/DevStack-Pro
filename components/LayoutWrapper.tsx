"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navabr/page";
import Footer from "@/components/footer/page";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
    
      <Navbar />
      
      {children}
      
      {/* if dashboard doesn't present so show footer */}
      {!isDashboard && <Footer />}
    </>
  );
}