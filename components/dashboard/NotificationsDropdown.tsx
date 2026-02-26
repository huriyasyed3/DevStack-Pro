"use client";

import { Bell, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function NotificationsDropdown() {
  const notifications = [
    {
      id: 1,
      title: "File Ready",
      description: "Your document 'Invoice_2024.pdf' has been processed.",
      time: "Just now",
      type: "success",
      unread: true,
    },
    {
      id: 2,
      title: "System Update",
      description: "We've added 5 new developer tools to your stack.",
      time: "2 hours ago",
      type: "info",
      unread: false,
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* Notification Icon - No Arrow, Just Clean Icon */}
        <button className="relative p-2 rounded-full hover:bg-slate-800/50 transition-all focus:outline-none group">
          <Bell className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
          
          {/* Real Notification Dot (Red/Blue Nishan) */}
          <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 border-2 border-[#0b1224]"></span>
          </span>
        </button>
      </PopoverTrigger>

      <PopoverContent 
        align="end" 
        sideOffset={8}
        className="w-80 md:w-96 p-0 bg-[#0b1224] border-slate-800 shadow-2xl rounded-2xl overflow-hidden"
      >
        {/* Header Section */}
        <div className="bg-slate-900/40 px-4 py-3 border-b border-slate-800 flex justify-between items-center">
          <span className="text-sm font-bold text-white">Notifications</span>
          <span className="text-[10px] bg-blue-600/20 text-blue-500 px-2 py-0.5 rounded-full font-bold">
            2 New
          </span>
        </div>

        {/* Notifications List */}
        <div className="max-h-[400px] overflow-y-auto">
          {notifications.map((n) => (
            <div 
              key={n.id}
              className={`p-4 flex gap-4 cursor-pointer transition-all hover:bg-slate-800/30 border-b border-slate-800/50 last:border-0 ${
                n.unread ? "bg-blue-600/[0.02]" : ""
              }`}
            >
              {/* Type Icon */}
              <div className={`mt-1 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                n.type === 'success' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'
              }`}>
                {n.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="text-sm font-bold text-slate-100 leading-none">{n.title}</h4>
                  {n.unread && <span className="h-2 w-2 bg-blue-600 rounded-full flex-shrink-0" />}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {n.description}
                </p>
                <div className="flex items-center gap-1 mt-1 text-slate-500">
                  <Clock size={10} />
                  <span className="text-[10px] font-medium">{n.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <Button className="w-full py-3 bg-slate-900/60 text-[11px] font-bold text-slate-400 hover:text-white transition-all uppercase tracking-widest border-t border-slate-800">
          Clear All Notifications
        </Button>
      </PopoverContent>
    </Popover>
  );
}