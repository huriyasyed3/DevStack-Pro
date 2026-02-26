"use client";

import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import AnalyticsChart from "@/components/dashboard/AnalyticsCharts";
import FileHistoryTable from "@/components/dashboard/FileHistoryTable";
import { Button } from "@/components/ui/button";
import { Plus, LayoutDashboard } from "lucide-react";

export default function DashboardPage() {
  return (
    /* MAIN WRAPPER: 
      - w-full: Takes full width
      - max-w-screen-2xl: Prevents stretching too much on ultra-wide monitors
      - px-4: Side padding for mobile
    */
    <div className="w-full max-w-[1600px] mx-auto space-y-6 md:space-y-8 px-4 sm:px-6 lg:px-8 py-6">
      
      {/* 1. TOP HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-blue-500 font-bold text-[10px] uppercase tracking-[0.2em]">
            <LayoutDashboard size={14} />
            <span>Overview</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Dashboard
          </h1>
        </div>
        
        {/* Button: Full width on mobile, auto on desktop */}
        <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-11 px-6 shadow-lg shadow-blue-600/20 gap-2">
          <Plus size={18} />
          <span>New Project</span>
        </Button>
      </div>

      {/* 2. STATS SECTION (AnalyticsCards handles its own grid) */}
      <section className="w-full">
        <AnalyticsCards />
      </section>

      {/* 3. MIDDLE SECTION: Charts & Other Info */}
      {/* grid-cols-1 on mobile, lg:grid-cols-3 on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chart takes 2 columns on Desktop */}
        <div className="lg:col-span-2">
          <AnalyticsChart />
        </div>

        {/* This could be another component like 'Quick Actions' or 'Limits' */}
        <div className="bg-[#0b1224] border border-slate-800 rounded-2xl p-6 hidden lg:block">
           <h3 className="text-white font-bold mb-4">Quick Insights</h3>
           <p className="text-slate-500 text-sm italic">
             Your AI efficiency has increased by 12% this month. Keep it up!
           </p>
        </div>
      </div>

      {/* 4. TABLE SECTION */}
      <section className="w-full pb-10">
        <FileHistoryTable />
      </section>

    </div>
  );
}