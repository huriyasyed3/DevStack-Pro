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
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const menuGroups = [
  {
    label: "MAIN MENU",
    items: [
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
    <>
    <aside 
      className={`h-screen flex flex-col bg-[#050a15] border-r border-slate-800 transition-all duration-300 sticky top-0 z-40 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* 1. Header Section: Logo + Toggle Button */}
      <div className="p-4 flex items-center justify-between h-20 overflow-hidden">
        <div className="flex items-center gap-3">
          {/* Logo Name (Hidden on collapse) */}
          {!collapsed && (
            <span className="font-bold text-xl tracking-tight text-white animate-in fade-in slide-in-from-left-2 duration-300 whitespace-nowrap">
              DevStack<span className="text-blue-500">Pro</span>
            </span>
          )}
        </div>

        {/* Toggle Button: Visible only when NOT collapsed, or we can keep it always */}
        {!collapsed && (
          <button
            onClick={() => setCollapsed(true)}
            className="p-1.5 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
          >
            <ChevronLeft size={20} />
          </button>
        )}
      </div>

      {/* Toggle Button for Collapsed State */}
      {collapsed && (
        <div className="flex justify-center py-2">
          <button
            onClick={() => setCollapsed(false)}
            className="p-1.5 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* 2. Navigation Groups */}
      <div className="flex-1 px-4 py-4 space-y-8 overflow-y-auto">
        {menuGroups.map((group) => (
          <div key={group.label} className="space-y-2">
            {!collapsed && (
              <h3 className="px-4 text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">
                {group.label}
              </h3>
            )}
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
                    {!collapsed && (
                      <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      {/* 3. User Profile Footer */}
      <div className="p-4 border-t border-slate-800 bg-[#050a15]">
        <div className="bg-slate-900/50 p-3 rounded-2xl flex items-center gap-3 overflow-hidden border border-slate-800/50">
          <div className="h-10 w-10 bg-blue-500/20 rounded-full flex-shrink-0 flex items-center justify-center text-blue-500 font-bold">
            AC
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0 animate-in fade-in duration-300">
              <p className="text-sm font-bold text-white truncate">Alex Chan</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Pro Member</p>
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
    </>
  );
}