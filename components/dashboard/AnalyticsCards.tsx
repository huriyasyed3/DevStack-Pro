"use client";

import React from "react";
import { FileText, Zap, Clock, CreditCard } from "lucide-react";

/**
 * 1. Interface for Type Safety
 */
interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
  colorClass: string;
}

/**
 * 2. Individual Card Component (Internal)
 */
const StatCard = ({ title, value, trend, icon, colorClass }: StatCardProps) => {
  const isPositive = trend.includes('+');

  return (
    <div className="bg-[#0b1224] border border-slate-800 p-5 md:p-6 rounded-2xl transition-all duration-300 hover:border-slate-700 shadow-sm flex flex-col justify-between min-h-[140px]">
      <div className="flex justify-between items-start w-full">
        {/* Minimalist Icon Wrapper */}
        <div className={`p-2.5 rounded-xl border border-slate-800 bg-slate-900/50 ${colorClass}`}>
          {icon}
        </div>
        
        {/* Trend Indicator */}
        <span className={`text-[10px] font-bold px-2 py-1 rounded-md bg-slate-900/50 border border-slate-800 ${
          isPositive ? 'text-emerald-500' : 'text-slate-500'
        }`}>
          {trend}
        </span>
      </div>

      <div className="mt-4 space-y-1">
        {/* Label: Industry Standard Spacing */}
        <p className="text-[10px] md:text-[11px] font-bold text-slate-500 uppercase tracking-widest">
          {title}
        </p>
        
        {/* Primary Metric */}
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none">
          {value}
        </h2>
      </div>
    </div>
  );
};

/**
 * 3. Main Export Component
 */
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
    /* RESPONSIVE GRID SYSTEM:
       - grid-cols-1: Single column on Mobile (Small screens)
       - sm:grid-cols-2: Two columns on Tablets
       - xl:grid-cols-4: Four columns on Desktop/Large screens
    */
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