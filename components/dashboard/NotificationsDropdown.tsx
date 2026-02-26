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
        {/* FIXED: hover:bg-slate-800/50 -> hover:bg-muted */}
        <button className="relative p-2 rounded-full hover:bg-muted transition-all focus:outline-none group">
          {/* FIXED: text-slate-400 -> text-muted-foreground */}
          <Bell className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          
          {/* Real Notification Dot */}
          <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            {/* FIXED: border-[#0b1224] -> border-background */}
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 border-2 border-background"></span>
          </span>
        </button>
      </PopoverTrigger>

      {/* FIXED: bg-[#0b1224] -> bg-card | border-slate-800 -> border-border */}
      <PopoverContent 
        align="end" 
        sideOffset={8}
        className="w-80 md:w-96 p-0 bg-card border-border shadow-2xl rounded-2xl overflow-hidden transition-colors"
      >
        {/* Header Section */}
        {/* FIXED: bg-slate-900/40 -> bg-muted/50 | text-white -> text-foreground */}
        <div className="bg-muted/50 px-4 py-3 border-b border-border flex justify-between items-center">
          <span className="text-sm font-bold text-foreground">Notifications</span>
          <span className="text-[10px] bg-blue-600/20 text-blue-500 px-2 py-0.5 rounded-full font-bold">
            2 New
          </span>
        </div>

        {/* Notifications List */}
        <div className="max-h-[400px] overflow-y-auto">
          {notifications.map((n) => (
            <div 
              key={n.id}
              className={`p-4 flex gap-4 cursor-pointer transition-all hover:bg-muted border-b border-border/50 last:border-0 ${
                n.unread ? "bg-primary/[0.03]" : ""
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
                  {/* FIXED: text-slate-100 -> text-foreground */}
                  <h4 className="text-sm font-bold text-foreground leading-none">{n.title}</h4>
                  {n.unread && <span className="h-2 w-2 bg-blue-600 rounded-full flex-shrink-0" />}
                </div>
                {/* FIXED: text-slate-400 -> text-muted-foreground */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {n.description}
                </p>
                <div className="flex items-center gap-1 mt-1 text-muted-foreground/60">
                  <Clock size={10} />
                  <span className="text-[10px] font-medium">{n.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* FIXED: bg-slate-900/60 -> bg-muted/80 | text-slate-400 -> text-muted-foreground */}
        <Button variant="ghost" className="w-full py-6 rounded-none bg-muted/50 text-[11px] font-bold text-muted-foreground hover:text-foreground transition-all uppercase tracking-widest border-t border-border">
          Clear All Notifications
        </Button>
      </PopoverContent>
    </Popover>
  );
}