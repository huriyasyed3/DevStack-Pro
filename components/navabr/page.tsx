// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Menu } from "lucide-react"; 
// import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

// import ProfileDropdown from "@/components/dashboard/ProfileDropdown";
// import NotificationsDropdown from "@/components/dashboard/NotificationsDropdown";
// import SearchBar from "@/components/dashboard/SearchBar";
// import Sidebar from "@/components/dashboard/Sidebar";

// export default function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-[#0b1224]/80 backdrop-blur-md">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        
//         {/* --- 1. Logo (Apni Jaga Par) --- */}
//         <Link href="/" className="flex-shrink-0 group">
//   <div className="relative h-12 w-40 sm:h-44 sm:w-80 lg:w-80 lg:h-48 transition-all group-hover:brightness-125">
//     <Image 
//       src="/our-logo.png" 
//       alt="DevStack Pro Logo"
//       fill
//       priority
//       sizes="(max-width: 768px) 160px, 224px"
//       className="object-contain object-left scale-90 sm:scale-50" 
//     />
//   </div>
// </Link>

//         {/* --- 2. Desktop Search (Hidden on Mobile) --- */}
//         <div className="hidden lg:flex flex-1 justify-center max-w-xl">
//           <SearchBar /> 
//         </div>

//         {/* --- 3. Right Side Actions --- */}
//         <div className="flex items-center gap-2">
//           {/* Notifications: Desktop & Mobile */}
//           <NotificationsDropdown />

//           {/* Profile:  HIDE Profile mobile navbar */}
//           <div className="hidden lg:block">
//             <ProfileDropdown />
//           </div>

//           {/*  (Hamburger) - ONLY Right Side for Mobile  */}
//           <div className="lg:hidden ml-2">
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon" className="text-slate-400">
//                   <Menu size={24} />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="p-0 w-72 bg-[#0b1224] border-l-slate-800">
//                 <div className="sr-only"> 
//              <SheetTitle>Navigation Menu</SheetTitle>
//              <SheetDescription>
//             Access dashboard tools and account settings
//            </SheetDescription>
//                 </div>
//                 <Sidebar /> 
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>

//       </div>
//     </nav>
//   );
// }



"use client";

import { useState } from "react"; // 1. State import karein
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; 
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import ProfileDropdown from "@/components/dashboard/ProfileDropdown";
import NotificationsDropdown from "@/components/dashboard/NotificationsDropdown";
import SearchBar from "@/components/dashboard/SearchBar";
import Sidebar from "@/components/dashboard/Sidebar";

export default function Navbar() {
  // 2. Mobile menu ki state manage karein
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-[#0b1224]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        
        {/* --- Logo --- */}
        <Link href="/" className="flex-shrink-0 group">
          <div className="relative h-12 w-40 sm:h-44 sm:w-80 lg:w-80 lg:h-48 transition-all group-hover:brightness-125">
            <Image 
              src="/our-logo.png" 
              alt="DevStack Pro Logo"
              fill
              priority
              sizes="(max-width: 768px) 160px, 224px"
              className="object-contain object-left scale-90 sm:scale-50" 
            />
          </div>
        </Link>

        {/* --- Desktop Search --- */}
        <div className="hidden lg:flex flex-1 justify-center max-w-xl">
          <SearchBar /> 
        </div>

        {/* --- Right Side Actions --- */}
        <div className="flex items-center gap-2">
          <NotificationsDropdown />

          <div className="hidden lg:block">
            <ProfileDropdown />
          </div>

          {/* Hamburger Menu - Mobile Only */}
          <div className="lg:hidden ml-2">
            {/* 3. Sheet ko state se connect karein */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-400">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0 w-72 bg-[#0b1224] border-l-slate-800">
                <div className="sr-only"> 
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>Access dashboard tools and account settings</SheetDescription>
                </div>
                
                {/* 4. Sidebar ko setOpen pass karein taake link click par band ho sake */}
                <Sidebar setOpen={setIsOpen} /> 
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}