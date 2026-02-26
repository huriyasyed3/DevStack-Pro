"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, LayoutDashboard, User } from "lucide-react"; 
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import NotificationsDropdown from "@/components/dashboard/NotificationsDropdown";
import SearchBar from "@/components/dashboard/SearchBar";
import Sidebar from "@/components/dashboard/Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-[#0b1224]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        
        {/* --- 1. Left Side: Logo Only --- */}
         <Link href="/">
          <span className="text-xl font-bold text-white tracking-tight">
              DevStack<span className="text-blue-500">Pro</span>
            </span>
            </Link>

        {/* --- 2. Center: Search Bar (Desktop Only) --- */}
        <div className="hidden lg:flex flex-1 justify-center max-w-md mx-4">
          <SearchBar /> 
        </div>

        {/* --- 3. Right Side: Dashboard, Notifications, User Icon --- */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* Dashboard Link (Desktop) */}
          <Link 
            href="/dashboard" 
            className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-all"
          >
            <LayoutDashboard size={19} />
            <span className="hidden xl:inline">Dashboard</span>
          </Link>

          {/* Notifications */}
          <NotificationsDropdown />

          {/* User Icon (Linked to Profile - No Name Text) */}
          <Link href="/dashboard/profile" title="View Profile">
            <div className="h-9 w-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
              <User size={20} />
            </div>
          </Link>

          {/* Hamburger Menu - Mobile Only */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:bg-slate-800 -mr-2">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0 w-72 bg-[#050a15] border-l-slate-800">
                <div className="sr-only"> 
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>Access dashboard tools</SheetDescription>
                </div>
                <Sidebar setOpen={setIsOpen} /> 
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </nav>
  );
}