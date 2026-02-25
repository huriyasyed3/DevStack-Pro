"use client";

import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    // Pure page ka background dark blue/black
    <div className="flex min-h-screen bg-[#050a15] text-slate-200">
      
      {/* Sidebar - Fixed/Sticky */}
      <Sidebar />

      {/* Main content wrapper */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-[1400px] mx-auto p-6 md:p-10 space-y-10">
          
          {/* Dashboard Page content yahan render hoga */}
          {children}
          
        </div>
      </main>
    </div>
  );
}