"use client";

import React from "react";
import { FileText, Zap, Clock, CreditCard } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
  colorClass: string;
}

const StatCard = ({ title, value, trend, icon, colorClass }: StatCardProps) => {
  const isPositive = trend.includes('+');

  return (
    /* FIXED: bg-[#0b1224] ko bg-card aur border-slate-800 ko border-border se badla */
    <div className="bg-card border border-border p-5 md:p-6 rounded-2xl transition-all duration-300 hover:border-primary/50 shadow-sm flex flex-col justify-between min-h-[140px]">
      <div className="flex justify-between items-start w-full">
        {/* FIXED: Background colors ko theme-friendly banaya */}
        <div className={`p-2.5 rounded-xl border border-border bg-muted/50 ${colorClass}`}>
          {icon}
        </div>
        
        {/* FIXED: Trend background change */}
        <span className={`text-[10px] font-bold px-2 py-1 rounded-md bg-muted border border-border ${
          isPositive ? 'text-emerald-500' : 'text-muted-foreground'
        }`}>
          {trend}
        </span>
      </div>

      <div className="mt-4 space-y-1">
        {/* FIXED: text-slate-500 ko text-muted-foreground se badla */}
        <p className="text-[10px] md:text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
          {title}
        </p>
        
        {/* FIXED: text-white ko text-foreground se badla (Light mein black, Dark mein white) */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-none">
          {value}
        </h2>
      </div>
    </div>
  );
};

export default function AnalyticsCards() {
  const stats = [
    {
      title: "Processed PDFs",
      value: "1,284",
      trend: "+13.5%",
      icon: <FileText size={20} />,
      colorClass: "text-blue-500"
    },
    {
      title: "Tokens Used",
      value: "45.2k",
      trend: "+4.2%",
      icon: <Zap size={20} />,
      colorClass: "text-amber-500"
    },
    {
      title: "Time Saved",
      value: "14.2h",
      trend: "+2.1%",
      icon: <Clock size={20} />,
      colorClass: "text-purple-500"
    },
    {
      title: "Monthly Spend",
      value: "$29.00",
      trend: "0.0%",
      icon: <CreditCard size={20} />,
      colorClass: "text-emerald-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 w-full">
      {stats.map((stat, index) => (
        <StatCard 
          key={index}
          title={stat.title}
          value={stat.value}
          trend={stat.trend}
          icon={stat.icon}
          colorClass={stat.colorClass}
        />
      ))}
    </div>
  );
}