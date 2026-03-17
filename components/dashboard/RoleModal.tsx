"use client";

import { useState, useEffect } from "react";
import { useFilesStore, UserRole } from "@/store/useFilesStore";
import { ShieldCheck, Zap, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RoleModal() {
  const { role, setRole } = useFilesStore();
  const [isOpen, setIsOpen] = useState(false);

  // Sirf tab dikhao jab role default 'FREE' ho (Demo purpose ke liye)
  // Ya phir aap ek specific "firstLogin" flag bhi store mein rakh sakte hain
  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenRoleModal");
    if (!hasSeenModal) {
      setIsOpen(true);
    }
  }, []);

  const handleRoleSelection = (selectedRole: UserRole) => {
    setRole(selectedRole);
    localStorage.setItem("hasSeenRoleModal", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const roles = [
    {
      id: "FREE" as UserRole,
      title: "Free User",
      desc: "Basic PDF tools & history",
      icon: <User className="text-muted-foreground" />,
      color: "hover:border-slate-400",
    },
    {
      id: "PRO" as UserRole,
      title: "Pro Member",
      desc: "Unlimited AI tools & OCR",
      icon: <Zap className="text-amber-500" />,
      color: "hover:border-amber-500 bg-amber-500/5",
    },
    {
      id: "ADMIN" as UserRole,
      title: "System Admin",
      desc: "Full analytics & control",
      icon: <ShieldCheck className="text-primary" />,
      color: "hover:border-primary bg-primary/5",
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-card border border-border w-full max-w-2xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary/10 relative overflow-hidden">
        
        {/* Background Decorative Glow */}
        <div className="absolute -top-24 -right-24 h-48 w-48 bg-primary/10 blur-[100px]" />
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-foreground tracking-tight">Choose Your Experience</h2>
          <p className="text-muted-foreground mt-2 font-medium">Select a role to explore the dashboard features</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => handleRoleSelection(r.id)}
              className={`flex flex-col items-center p-6 border-2 border-border rounded-[2rem] transition-all duration-300 group ${r.color}`}
            >
              <div className="h-14 w-14 rounded-2xl bg-background flex items-center justify-center mb-4 border border-border group-hover:scale-110 transition-transform shadow-sm">
                {r.icon}
              </div>
              <h3 className="font-bold text-sm text-foreground">{r.title}</h3>
              <p className="text-[10px] text-muted-foreground mt-1 text-center leading-relaxed">
                {r.desc}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
            Roles can be changed later in Profile Settings
          </p>
        </div>
      </div>
    </div>
  );
}