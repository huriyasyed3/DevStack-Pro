// "use client";

// import { useState } from "react";
// import { 
//   LayoutDashboard, Wrench, History, CreditCard, 
//   Settings, LogOut, ChevronLeft, ChevronRight, Home, User 
// } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";

// const menuGroups = [
//   {
//     label: "MAIN MENU",
//     items: [
//       { name: "Home", icon: <Home size={20} />, path: "/" },
//       { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
//       { name: "Tools", icon: <Wrench size={20} />, path: "/dashboard/tools" },
//       { name: "History", icon: <History size={20} />, path: "/dashboard/history" },
//     ]
//   },
//   {
//     label: "ACCOUNT",
//     items: [
//       { name: "Subscription", icon: <CreditCard size={20} />, path: "/dashboard/subscription" },
//       { name: "Settings", icon: <Settings size={20} />, path: "/dashboard/settings" },
//     ]
//   }
// ];

// export default function Sidebar({ setOpen }: { setOpen?: (open: boolean) => void }) {
//   const [collapsed, setCollapsed] = useState(false);
//   const pathname = usePathname();

//   const handleLinkClick = () => {
//     if (setOpen) setOpen(false);
//   };

//   return (
//     /* FIXED: bg-[#050a15] -> bg-card | border-slate-800 -> border-border */
//     <aside 
//       className={`h-screen flex flex-col bg-card border-r border-border transition-all duration-300 sticky top-0 z-50 ${
//         collapsed ? "w-20" : "w-80 lg:w-96"
//       } w-full lg:w-auto`} 
//     >
      
//       {/* 1. Profile Section (Mobile) */}
//       <div className="lg:hidden p-6 border-b border-border bg-muted/30">
//         <div className="flex items-center gap-4">
//           <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold border-2 border-primary/20">
//             HS
//           </div>
//           <div className="flex flex-col">
//             <p className="text-sm font-bold text-foreground leading-tight">Huriya Syed</p>
//             <p className="text-[10px] text-primary font-bold uppercase mt-1">Pro Member</p>
//           </div>
//         </div>
//         <Link href="/dashboard/profile" onClick={handleLinkClick} className="block mt-4">
//           <Button variant="outline" className="w-full border-border bg-muted/50 text-muted-foreground text-xs h-9 rounded-xl">
//              <User size={14} className="mr-2" /> View Profile
//           </Button>
//         </Link>
//       </div>

//       {/* 2. Desktop Header */}
//       <div className="p-4 flex items-center justify-between h-20 overflow-hidden">
//         {(!collapsed) && (
//           <span className="font-bold text-xl tracking-tight text-foreground px-2 lg:hidden">
//             DevStack<span className="text-primary">Pro</span>
//           </span>
//         )}
//         <button
//           onClick={() => setCollapsed(!collapsed)}
//           className="hidden lg:block p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
//         >
//           {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
//         </button>
//       </div>

//       {/* 3. Navigation Items */}
//       <div className="flex-1 px-4 py-2 space-y-8 overflow-y-auto custom-scrollbar">
//         {menuGroups.map((group) => (
//           <div key={group.label} className="space-y-2">
//             <h3 className={`px-4 text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase ${collapsed ? "lg:hidden" : "block"}`}>
//               {group.label}
//             </h3>
            
//             <nav className="space-y-1">
//               {group.items.map((item) => {
//                 const isActive = pathname === item.path;
//                 return (
//                   <Link
//                     key={item.name}
//                     href={item.path}
//                     onClick={handleLinkClick}
//                     className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
//                       isActive 
//                         ? "bg-primary/10 text-primary border border-primary/20" 
//                         : "text-muted-foreground hover:text-foreground hover:bg-muted"
//                     }`}
//                   >
//                     <div className={`${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"} flex-shrink-0`}>
//                       {item.icon}
//                     </div>
//                     <span className={`text-sm font-medium whitespace-nowrap ${collapsed ? "lg:hidden" : "block"}`}>
//                       {item.name}
//                     </span>
//                   </Link>
//                 );
//               })}
//             </nav>
//           </div>
//         ))}
//       </div>

//       {/* 4. Logout Section */}
//       {/* FIXED: bg-[#050a15] -> bg-card | border-t -> border-border */}
//       <div className="p-4 border-t border-border bg-card">
//         <button className="flex items-center gap-3 w-full px-4 py-3 text-muted-foreground hover:text-red-500 transition-colors group">
//           <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
//           <span className={`${collapsed ? "lg:hidden" : "block"} text-sm font-medium`}>Logout</span>
//         </button>
//       </div>
//     </aside>
//   );
// }


"use client";

import { useState } from "react";
import { 
  LayoutDashboard, Wrench, History, CreditCard, 
  Settings, LogOut, ChevronLeft, ChevronRight, Home, User, X 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const menuGroups = [
  {
    label: "MAIN MENU",
    items: [
      { name: "Home", icon: <Home size={20} />, path: "/" },
      { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
      { name: "Tools", icon: <Wrench size={20} />, path: "/dashboard/tools" },
      { name: "History", icon: <History size={20} />, path: "/dashboard/history" },
    ]
  },
  {
    label: "ACCOUNT",
    items: [
      { name: "Subscription", icon: <CreditCard size={20} />, path: "/dashboard/subscription" },
      
    ]
  }
];

export default function Sidebar({ setOpen }: { setOpen?: (open: boolean) => void }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const handleClose = () => {
    if (setOpen) setOpen(false);
  };

  return (
    <aside 
      className={`h-screen flex flex-col bg-card border-r border-border transition-all duration-300 sticky top-0 z-50 ${
        collapsed ? "lg:w-20" : "lg:w-[320px]"
      } w-full`} 
    >
      
      {/* 1. MOBILE ONLY: Profile & Close Header */}
      <div className="lg:hidden p-6 border-b border-border bg-muted/30">
        <div className="flex items-center justify-between mb-6">
          <span className="font-bold text-lg text-foreground tracking-tight">
            DevStack<span className="text-primary">Pro</span>
          </span>
          <button onClick={handleClose} className="p-2 hover:bg-muted rounded-full text-muted-foreground">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 bg-primary rounded-full flex-shrink-0 flex items-center justify-center text-primary-foreground font-bold">
            HS
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold text-foreground leading-tight">Huriya Syed</p>
            <p className="text-[10px] text-primary font-bold uppercase mt-1">Pro Member</p>
          </div>
        </div>
        <Link href="/dashboard/profile" onClick={handleClose} className="block mt-4">
          <Button variant="outline" className="w-full border-border bg-background text-xs h-9 rounded-xl">
             <User size={14} className="mr-2" /> View Profile
          </Button>
        </Link>
      </div>

      {/* 2. DESKTOP HEADER: Logo & Collapse Toggle */}
      <div className="hidden lg:flex p-6 items-center justify-between h-20">
        {!collapsed && (
          <span className="font-bold text-xl tracking-tight text-foreground animate-in fade-in duration-500 lg:hidden">
            DevStack<span className="text-primary">Pro</span>
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all "
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* 3. NAVIGATION ITEMS */}
      <div className="flex-1 px-4 py-4 space-y-8 overflow-y-auto custom-scrollbar">
        {menuGroups.map((group) => (
          <div key={group.label} className="space-y-2">
            <h3 className={`px-4 text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase transition-opacity ${collapsed ? "lg:opacity-0" : "opacity-100"}`}>
              {group.label}
            </h3>
            
            <nav className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={handleClose}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                      isActive 
                        ? "bg-primary/10 text-primary border border-primary/20" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <div className={`${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"} flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <span className={`text-sm font-semibold whitespace-nowrap transition-opacity duration-300 ${collapsed ? "lg:hidden" : "opacity-100"}`}>
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      {/* 4. LOGOUT SECTION */}
      <div className="p-4 border-t border-border bg-card">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-muted-foreground hover:text-red-500 transition-colors group">
          <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
          <span className={`${collapsed ? "lg:hidden" : "block"} text-sm font-semibold`}>Logout</span>
        </button>
      </div>
    </aside>
  );
}