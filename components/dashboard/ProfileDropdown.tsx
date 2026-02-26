"use client";

import Avatar from "@/components/ui/avatar";
import Dropdown from "@/components/ui/dropdown";
import { Button } from "@/components/ui/button"; 
import { LogOut, User, ShieldCheck, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function ProfileDropdown() {
  const user = { name: "Huriya Syed", role: "Pro Member" };

  return (
    <Dropdown 
      trigger={
        /* FIXED: bg-[#0b1224] -> bg-muted/50 | border-slate-800 -> border-border */
        <Button 
          variant="ghost" 
          className="h-auto p-1.5 pr-4 bg-muted/50 border border-border rounded-full 
                     hover:bg-muted hover:border-primary/30 transition-all flex items-center gap-1 group"
        >
          {/* Avatar Section */}
          <div className="h-8 w-8 rounded-full overflow-hidden border border-primary/20 flex-shrink-0">
            <img 
              src="/avatar.png" 
              alt={user?.name || "User"} 
              className="h-full w-full object-cover" 
            />
          </div>

          {/* Text Info */}
          <div className="text-left hidden lg:flex flex-col ml-2 mr-1">
            {/* FIXED: text-white -> text-foreground */}
            <p className="text-[11px] font-bold text-foreground leading-tight">
              {user?.name || "Huriya Syed"}
            </p>
            {/* FIXED: text-slate-500 -> text-muted-foreground */}
            <p className="text-[9px] text-muted-foreground font-extrabold uppercase tracking-tighter group-hover:text-primary">
              {user?.role || "PRO MEMBER"}
            </p>
          </div>

          {/* Icon */}
          <ChevronDown size={14} className="text-muted-foreground ml-1 flex-shrink-0 group-hover:text-foreground" />
        </Button>
      }
    >
      {/* FIXED: bg-[#0b1224] -> bg-card | border-slate-800 -> border-border */}
      <div className="w-56 bg-card border border-border rounded-2xl p-2 mt-2 shadow-2xl transition-colors">
        <div className="px-4 py-3 border-b border-border/50 mb-1 text-[10px] font-black text-muted-foreground tracking-widest uppercase">
          My Account
        </div>
        
        <Link href="/dashboard/profile">
          <Button variant="ghost" className="w-full justify-start gap-3 py-6 text-foreground/80 hover:text-foreground hover:bg-muted rounded-xl">
            <User size={18} className="text-muted-foreground" /> Profile Settings
          </Button>
        </Link>
        
        <Link href={'/dashboard/subscription'}>
          <Button variant="ghost" className="w-full justify-start gap-3 py-6 text-foreground/80 hover:text-foreground hover:bg-muted rounded-xl">
            <ShieldCheck size={18} className="text-muted-foreground" /> Subscription
          </Button>
        </Link>

        {/* FIXED: bg-slate-800 -> bg-border */}
        <div className="h-px bg-border my-1 mx-2" />

        <Button variant="ghost" className="w-full justify-start gap-3 py-6 text-red-500 hover:bg-red-500/10 rounded-xl">
          <LogOut size={18} /> Logout
        </Button>
      </div>
    </Dropdown>
  );
}