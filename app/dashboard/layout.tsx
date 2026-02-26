// app/dashboard/layout.tsx
import Sidebar from "@/components/dashboard/Sidebar";
import Footer from "@/components/footer/page";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-[#050a15] overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block shrink-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-full relative">
        {/* Is div ko scrollable banayein */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
          <div className="p-4 md:p-8 lg:p-10 w-full max-w-[1400px] mx-auto">
            {children}
          </div>
          
          {/* Footer ko scrollable div ke andar end par rakhein */}
          <Footer />
        </div>
      </main>
    </div>
  );
}