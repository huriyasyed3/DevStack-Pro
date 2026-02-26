"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, LayoutDashboard, User } from "lucide-react"; 
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import NotificationsDropdown from "@/components/dashboard/NotificationsDropdown";
import SearchBar from "@/components/dashboard/SearchBar";
import Sidebar from "@/components/dashboard/Sidebar";
import { ThemeToggle } from "../providers/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors">
      {/* Container: Added px-2 for mobile to prevent edge touching */}
      <div className="container mx-auto flex h-16 items-center justify-between px-2 sm:px-4 md:px-8">
        
        {/* --- 1. Left Side: Logo --- */}
        <div className="flex-shrink-0">
          <Link href="/">
            <span className="text-lg md:text-xl font-bold text-foreground tracking-tight">
              DevStack<span className="text-primary">Pro</span>
            </span>
          </Link>
        </div>

        {/* --- 2. Center: Search Bar (Desktop Only) --- */}
        <div className="hidden lg:flex flex-1 justify-center max-w-md mx-4">
          <SearchBar /> 
        </div>

        {/* --- 3. Right Side: Actions --- */}
        <div className="flex items-center gap-1 sm:gap-3 md:gap-4 lg:gap-6">
          
          {/* Dashboard Link (Desktop Only) */}
          <Link 
            href="/dashboard" 
            className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all"
          >
            <LayoutDashboard size={19} />
            <span className="hidden xl:inline">Dashboard</span>
          </Link>

          {/* Icons Group: Added small gap and shrink-0 */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <NotificationsDropdown />
            <ThemeToggle />
            
            {/* User Icon (Desktop/Tablet) */}
            <Link href="/dashboard/profile" className="hidden sm:block" title="View Profile">
              <div className="h-9 w-9 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <User size={20} />
              </div>
            </Link>
          </div>

          {/* --- 4. Hamburger Menu (Mobile/Tablet Only) --- */}
          <div className="lg:hidden ml-1">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                {/* Fixed size and padding to prevent pushing off-screen */}
                <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:bg-muted focus:ring-0">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0 w-72 bg-card border-l-border">
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