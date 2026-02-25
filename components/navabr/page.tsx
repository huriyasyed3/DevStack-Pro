"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";

// Aapke Modular Components
import ProfileDropdown from "@/components/dashboard/ProfileDropdown";
import NotificationsDropdown from "@/components/dashboard/NotificationsDropdown";
import SearchBar from "@/components/dashboard/SearchBar";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-[#0b1224]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center gap-4 px-4 md:px-8">
        
        {/* 1. Logo Section */}
        <Link href="/" className="flex-shrink-0 group mr-4">
          <div className="relative h-9 w-32 overflow-hidden">
            <Image 
              src="/logo.png" 
              alt="DevStack Pro Logo"
              fill
              priority
              className="object-contain object-left group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* 2. SearchBar Section (Flexible Middle) */}
        <div className="flex-1 flex justify-start md:justify-center max-w-xl mx-auto">
          <SearchBar /> 
        </div>

        {/* 3. Action Components (Right Aligned) */}
        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          
          {/* Dashboard Link (Optional: Desktop only) */}
          <Link href="/dashboard" className="hidden lg:block">
            <Button 
              variant="ghost" 
              className="text-slate-400 hover:text-white hover:bg-slate-800 gap-2 font-bold rounded-xl h-9 px-3"
            >
              <LayoutDashboard size={18} />
              <span className="hidden xl:inline">Dashboard</span>
            </Button>
          </Link>

          {/* Vertical Separator */}
          <div className="h-6 w-[1px] bg-slate-800 mx-1 hidden sm:block" />

          {/* Notifications & Profile */}
          <div className="flex items-center gap-1 sm:gap-3">
            <NotificationsDropdown />
            <ProfileDropdown />
          </div>
        </div>

      </div>
    </nav>
  );
}