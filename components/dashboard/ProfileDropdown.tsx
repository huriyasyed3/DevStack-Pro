"use client";

import Avatar from "@/components/ui/avatar";
import Dropdown from "@/components/ui/dropdown";
import { Button } from "@/components/ui/button"; // Reusable Button
import { LogOut, User, ShieldCheck, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function ProfileDropdown() {
  const user = { name: "Huriya Syed", role: "Pro Member" };

  return (
    <Dropdown 
      trigger={
        <Button 
  variant="ghost" 
  className="h-auto p-1.5 pr-4 bg-[#0b1224] border border-slate-800 rounded-full 
             hover:bg-slate-800/50 hover:border-slate-700 hover:text-white 
             transition-all flex items-center gap-1 group"
>
  {/* Avatar Section */}
  <div className="h-8 w-8 rounded-full overflow-hidden border border-blue-500/20 flex-shrink-0">
    <img 
      src="/avatar.png" 
      alt={user?.name || "User"} 
      className="h-full w-full object-cover" 
    />
  </div>

  {/* Text Info */}
  <div className="text-left hidden lg:flex flex-col ml-2 mr-1">
    <p className="text-[11px] font-bold text-white leading-tight">
      {user?.name || "Huriya Syed"}
    </p>
    <p className="text-[9px] text-slate-500 font-extrabold uppercase tracking-tighter group-hover:text-slate-400">
      {user?.role || "PRO MEMBER"}
    </p>
  </div>

  {/* Icon */}
  <ChevronDown size={14} className="text-slate-500 ml-1 flex-shrink-0 group-hover:text-white" />
</Button>
      }
    >
      <div className="w-56 bg-[#0b1224] border border-slate-800 rounded-2xl p-2 mt-2 shadow-2xl">
        <div className="px-4 py-3 border-b border-slate-800/50 mb-1 text-[10px] font-black text-slate-500 tracking-widest uppercase">
          My Account
        </div>
        <Link href="/dashboard/profile">
        <Button variant="ghost" className="w-full justify-start gap-3 py-6 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl">
          <User size={18} className="text-slate-500" /> Profile Settings
        </Button>
        </Link>
        
        <Link href={'/dashboard/subscription'}>
        <Button variant="ghost" className="w-full justify-start gap-3 py-6 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl">
          <ShieldCheck size={18} className="text-slate-500" /> Subscription
        </Button>
        </Link>

        <div className="h-px bg-slate-800 my-1 mx-2" />

        <Button variant="ghost" className="w-full justify-start gap-3 py-6 text-red-400 hover:bg-red-500/10 rounded-xl">
          <LogOut size={18} /> Logout
        </Button>
      </div>
    </Dropdown>
  );
}