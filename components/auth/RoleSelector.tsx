// components/auth/RoleSelector.tsx
"use client";
import { User, Zap, ShieldCheck } from "lucide-react";
import { useFilesStore, UserRole } from "@/store/useFilesStore"; // Aapka Zustand store

export default function RoleSelector() {
  const { setRole } = useFilesStore(); // Assume aapne store mein setRole banaya hai

  const roles = [
    { id: 'FREE', title: 'Free User', icon: <User />, desc: 'Basic PDF tools' },
    { id: 'PRO', title: 'Pro Member', icon: <Zap className="text-amber-500" />, desc: 'AI Tools & Unlimited' },
    { id: 'ADMIN', title: 'System Admin', icon: <ShieldCheck className="text-primary" />, desc: 'Full Control' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {roles.map((role) => (
        <button 
          key={role.id}
          onClick={() => setRole(role.id as UserRole)}
          className="flex flex-col items-center p-6 bg-card border-2 border-border hover:border-primary rounded-3xl transition-all group"
        >
          <div className="p-4 bg-muted rounded-2xl group-hover:scale-110 transition-transform mb-4">
            {role.icon}
          </div>
          <h3 className="font-bold text-foreground">{role.title}</h3>
          <p className="text-[10px] text-muted-foreground mt-1 text-center">{role.desc}</p>
        </button>
      ))}
    </div>
  );
}