"use client";


import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import AnalyticsChart from "@/components/dashboard/AnalyticsCharts";
import FileHistory from "@/components/dashboard/FileHistory";

export default function DashboardPage() {
  
  const user = {
    name: "Alex", 
  };

  return (
    <div className="space-y-10 pb-10">

      {/* 1. DYNAMIC WELCOME SECTION */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Welcome back, {user.name} {/* User ka naam dynamic show ho raha hai */}
        </h1>
        <p className="text-slate-500 text-sm font-medium">
          Here's what's happening with your projects today.
        </p>
      </div>

      {/* 2. STATS CARDS (4-Column) */}
      <AnalyticsCards />

      {/* 3. ANALYTICS CHART */}
      <AnalyticsChart />

      {/* 4. FILE HISTORY */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight">File History</h2>
          <button className="text-blue-500 text-xs font-bold hover:underline">View All</button>
        </div>
        <FileHistory />
      </div>

    </div>
  );
}