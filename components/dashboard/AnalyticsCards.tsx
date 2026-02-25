"use client";

import { useState, useEffect } from "react";
import { FileText, Zap, Clock, CreditCard } from "lucide-react"; 

/**
 * AnalyticsCards Component
 * -----------------------
 * Displays the 4 top stats cards matching the dashboard image.
 */

export default function AnalyticsCards() {
  const [data, setData] = useState({
    conversions: "1,284",
    tokens: "45.2k",
    time: "14.2h",
    spend: "$29.00"
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      
      {/* 1. Processed PDFs Card */}
      <StatCard 
        title="PROCESSED PDFS" 
        value={data.conversions} 
        trend="+13.5%" 
        icon={<FileText className="text-blue-500" size={20} />} 
      />

      {/* 2. AI Tokens Card */}
      <StatCard 
        title="AI TOKENS USED" 
        value={data.tokens} 
        trend="+4.2%" 
        icon={<Zap className="text-orange-500" size={20} />} 
      />

      {/* 3. Avg Time Saved Card */}
      <StatCard 
        title="AVG. TIME SAVED" 
        value={data.time} 
        trend="-2.1%" 
        icon={<Clock className="text-purple-500" size={20} />} 
      />

      {/* 4. Monthly Spend Card */}
      <StatCard 
        title="MONTHLY SPEND" 
        value={data.spend} 
        trend="Stable" 
        icon={<CreditCard className="text-emerald-500" size={20} />} 
      />

    </div>
  );
}

/**
 * Individual Stat Card Component
 * Matches the layout: Icon & Trend on top, Title & Value at bottom.
 */
function StatCard({ title, value, trend, icon }: any) {
  const isPositive = trend.includes('+');
  const isNeutral = trend === "Stable";

  return (
    <div className="bg-[#0b1224] border border-slate-800 p-6 rounded-[1.5rem] hover:border-slate-700 transition-all group">
      
      {/* Top Row: Icon and Trend Badge */}
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-[#11192e] rounded-xl border border-slate-800/50 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        
        {/* Trend Percentage Badge */}
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
          isNeutral ? 'bg-slate-800 text-slate-400' : 
          isPositive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'
        }`}>
          {trend}
        </span>
      </div>

      {/* Bottom Content: Title and Large Number */}
      <div className="space-y-1">
        <h3 className="text-[10px] font-black text-slate-500 tracking-[0.15em] uppercase">
          {title}
        </h3>
        <p className="text-3xl font-bold text-white tracking-tight">
          {value}
        </p>
      </div>
      
    </div>
  );
}