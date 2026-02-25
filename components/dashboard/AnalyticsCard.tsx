"use client";

import { ReactNode } from "react";

interface AnalyticsCardProps {
  title: string;
  value: number | string;
  icon?: ReactNode;
  trend?: string; // Image mein +13.5% jaisa trend hai
}

export default function AnalyticsCard({ title, value, icon, trend }: AnalyticsCardProps) {
  return (
    <div className="bg-[#0b1224] border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        {/* Icon Container */}
        <div className="p-3 bg-[#050a15] rounded-xl text-blue-500 border border-slate-800/50">
          {icon}
        </div>
        
        {/* Trend Badge (Optional but in image) */}
        {trend && (
          <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
            trend.includes('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-800 text-slate-400'
          }`}>
            {trend}
          </span>
        )}
      </div>

      <div className="space-y-1">
        {/* Title: Small, Uppercase, Tracking */}
        <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase">
          {title}
        </p>
        {/* Value: Large, White */}
        <p className="text-2xl font-bold text-white">
          {value}
        </p>
      </div>
    </div>
  );
}