"use client";

import Sidebar from "../../components/dashboard/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-[#050a15] text-slate-200 overflow-hidden">
      
      {/* SIDEBAR: Desktop par fixed width, Mobile par handle hoga */}
      <div className="hidden lg:block h-full shrink-0">
        <Sidebar />
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 min-w-0 h-full overflow-y-auto overflow-x-hidden relative">
        {/* Is div ki wajah se content screen se bahar nahi jayega */}
        <div className="w-full max-w-[1400px] mx-auto p-4 md:p-8 lg:p-10">
          <div className="space-y-6 md:space-y-10">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}