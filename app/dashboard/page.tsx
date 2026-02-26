"use client";

import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import AnalyticsChart from "@/components/dashboard/AnalyticsCharts";
import FileHistoryTable from "@/components/dashboard/FileHistoryTable";
import { Button } from "@/components/ui/button";
import { Plus, LayoutDashboard } from "lucide-react";

export default function DashboardPage() {
  return (
    /* MAIN WRAPPER: bg-background ensures the page fills the correct color */
    <div className="w-full max-w-[1600px] mx-auto space-y-6 md:space-y-8 px-4 sm:px-6 lg:px-8 py-6 min-h-screen transition-colors">
      
      {/* 1. TOP HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          {/* text-primary uses your theme's main color */}
          <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
            <LayoutDashboard size={14} />
            <span>Overview</span>
          </div>
          {/* FIXED: text-white -> text-foreground */}
          <h1 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
            Dashboard
          </h1>
        </div>
        
        {/* Button: bg-primary for consistency with shadcn themes */}
        <Button className="w-full sm:w-auto bg-primary hover:opacity-90 text-primary-foreground rounded-xl h-11 px-6 shadow-lg shadow-primary/20 gap-2">
          <Plus size={18} />
          <span>New Project</span>
        </Button>
      </div>

      {/* 2. STATS SECTION */}
      <section className="w-full">
        <AnalyticsCards />
      </section>

      {/* 3. MIDDLE SECTION: Charts & Quick Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chart Area */}
        <div className="lg:col-span-2">
          <AnalyticsChart />
        </div>

        {/* Quick Insights Card */}
        {/* FIXED: bg-[#0b1224] -> bg-card | border-slate-800 -> border-border */}
        <div className="bg-card border border-border rounded-2xl p-6 hidden lg:block shadow-sm">
           <h3 className="text-foreground font-bold mb-4">Quick Insights</h3>
           <p className="text-muted-foreground text-sm italic leading-relaxed">
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