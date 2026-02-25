"use client";

import { Bell, FileCheck, Zap, AlertTriangle } from "lucide-react";
import Dropdown from "@/components/ui/dropdown";
import { Button } from "@/components/ui/button"; // Aapka reusable button

export default function NotificationsDropdown() {
  const notifications = [
    { id: 1, message: "PDF converted successfully", time: "2m ago", type: "success" },
    { id: 2, message: "Tokens limit reached soon", time: "1h ago", type: "warning" },
  ];

  return (
    <Dropdown 
      trigger={
        <Button variant="ghost" size="icon" className="relative bg-[#0b1224] border border-slate-800 rounded-xl">
          <Bell className="w-5 h-5 text-slate-400" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-[#050a15]" />
        </Button>
      }
    >
      <div className="w-72 bg-[#0b1224] border border-slate-800 rounded-2xl p-2 mt-2 shadow-2xl">
        <h3 className="px-4 py-3 text-[10px] font-black tracking-widest text-slate-500 uppercase">Notifications</h3>
        <div className="flex flex-col gap-1">
          {notifications.map((n) => (
            <Button 
              key={n.id} 
              variant="ghost" 
              className="h-auto w-full justify-start items-start gap-3 p-3 rounded-xl hover:bg-slate-800/50"
            >
              <div className={`p-2 rounded-lg ${n.type === 'success' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-orange-500/10 text-orange-500'}`}>
                {n.type === 'success' ? <FileCheck size={16} /> : <AlertTriangle size={16} />}
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-slate-200 truncate">{n.message}</p>
                <p className="text-[10px] text-slate-500">{n.time}</p>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </Dropdown>
  );
}