"use client";

import { useState } from "react";
import { 
  LayoutDashboard, Wrench, History, CreditCard, 
  Settings, LogOut, ChevronLeft, ChevronRight, Home, User 
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
      { name: "Settings", icon: <Settings size={20} />, path: "/dashboard/settings" },
    ]
  }
];

export default function Sidebar({ setOpen }: { setOpen?: (open: boolean) => void }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (setOpen) setOpen(false);
  };

  return (
    <aside 
      className={`h-screen flex flex-col bg-[#050a15] border-r border-slate-800 transition-all duration-300 sticky top-0 z-50 ${
        collapsed ? "w-20" : "w-80 lg:w-96"
      } w-full lg:w-auto`} 
    >
      
      {/* 1. Profile Section - ONLY MOBILE (Desktop par hidden) */}
      <div className="lg:hidden p-6 border-b border-slate-800 bg-slate-900/20">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold border-2 border-blue-500/20">
            HS
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold text-white leading-tight">Huriya Syed</p>
            <p className="text-[10px] text-blue-500 font-bold uppercase mt-1">Pro Member</p>
          </div>
        </div>
        <Link href="/dashboard/profile" onClick={handleLinkClick} className="block mt-4">
          <Button variant="outline" className="w-full border-slate-800 bg-slate-900/50 text-slate-300 text-xs h-9 rounded-xl">
             <User size={14} className="mr-2" /> View Profile
          </Button>
        </Link>
      </div>

      {/* 2. Desktop Header (Logo & Toggle) */}
      <div className="p-4 flex items-center justify-between h-20 overflow-hidden">
        {(!collapsed) && (
          <span className="font-bold text-xl tracking-tight text-white px-2">
            DevStack<span className="text-blue-500">Pro</span>
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:block p-1.5 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* 3. Navigation Items */}
      <div className="flex-1 px-4 py-2 space-y-8 overflow-y-auto custom-scrollbar">
        {menuGroups.map((group) => (
          <div key={group.label} className="space-y-2">
            <h3 className={`px-4 text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase ${collapsed ? "lg:hidden" : "block"}`}>
              {group.label}
            </h3>
            
            <nav className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={handleLinkClick}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                      isActive 
                        ? "bg-blue-600/10 text-blue-500 border border-blue-600/20" 
                        : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                    }`}
                  >
                    <div className={`${isActive ? "text-blue-500" : "text-slate-400 group-hover:text-white"} flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <span className={`text-sm font-medium whitespace-nowrap ${collapsed ? "lg:hidden" : "block"}`}>
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      {/* 4. Logout Section */}
      <div className="p-4 border-t border-slate-800 bg-[#050a15]">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-red-400 transition-colors group">
          <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
          <span className={`${collapsed ? "lg:hidden" : "block"} text-sm font-medium`}>Logout</span>
        </button>
      </div>
    </aside>
  );
}