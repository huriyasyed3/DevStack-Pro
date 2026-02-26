"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  Wrench, 
  History, 
  CreditCard, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  Home,
  User
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const menuGroups = [
  {
    label: "MAIN MENU",
    items: [
      { name: "Home", icon: <Home size={20} />, path: "/" }, // Home add kiya
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

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside 
      className={`h-screen flex flex-col bg-[#050a15] border-r border-slate-800 transition-all duration-300 sticky top-0 z-40 ${
        collapsed ? "w-20" : "w-64 lg:w-72"
      } w-full`} // Mobile par w-full rahega
    >
      
      {/* 1. Mobile-Only User Profile Section (Top Par) */}
      <div className="lg:hidden p-6 border-b border-slate-800 bg-slate-900/20">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-blue-500/20 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            HS
          </div>
          <div className="flex flex-col">
            <p className="text-base font-bold text-white leading-tight">Huriya Syed</p>
            <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mt-1">Pro Member</p>
          </div>
        </div>
        <Link href="/dashboard/profile" className="block mt-4">
          <Button variant="outline" className="w-full border-slate-800 bg-slate-900/50 text-slate-300 hover:text-white text-xs h-9 rounded-xl">
             <User size={14} className="mr-2" /> View Profile
          </Button>
        </Link>
      </div>

      {/* 2. Header Section (Desktop Only Toggle) */}
      <div className="p-4 hidden lg:flex items-center justify-between h-20 overflow-hidden">
        {!collapsed && (
          <span className="font-bold text-xl tracking-tight text-white">
            DevStack<span className="text-blue-500">Pro</span>
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* 3. Navigation Groups */}
      <div className="flex-1 px-4 py-4 space-y-8 overflow-y-auto custom-scrollbar">
        {menuGroups.map((group) => (
          <div key={group.label} className="space-y-2">
            {/* Group Label - Mobile par hamesha dikhega */}
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
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                      isActive 
                        ? "bg-blue-600/10 text-blue-500 border border-blue-600/20" 
                        : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                    }`}
                  >
                    <div className={`${isActive ? "text-blue-500" : "text-slate-400 group-hover:text-white"} flex-shrink-0`}>
                      {item.icon}
                    </div>
                    {/* Text logic: Desktop collapse par hide, mobile par hamesha show */}
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

      {/* 4. Desktop Footer (Hidden on Mobile inside sidebar because we added it at top) */}
      <div className="hidden lg:block p-4 border-t border-slate-800 bg-[#050a15]">
        <div className="bg-slate-900/50 p-3 rounded-2xl flex items-center gap-3 border border-slate-800/50">
          <div className="h-10 w-10 bg-blue-500/20 rounded-full flex-shrink-0 flex items-center justify-center text-blue-500 font-bold">
            HS
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">Huriya Syed</p>
              <p className="text-[10px] text-slate-500 font-bold">PRO</p>
            </div>
          )}
          {!collapsed && (
            <button className="text-slate-500 hover:text-red-400 transition-colors">
              <LogOut size={16} />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}