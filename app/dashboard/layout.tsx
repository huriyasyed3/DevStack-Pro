import Sidebar from "@/components/dashboard/Sidebar";
import Footer from "@/components/footer/page";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    /* FIXED: bg-[#050a15] hata kar 'bg-background' lagaya.
       Ye shadcn/tailwind ki default class hai jo theme ke saath switch hoti hai.
    */
    <div className="flex h-screen w-full bg-background text-foreground overflow-hidden transition-colors duration-300">
      
      {/* Desktop Sidebar */}
      <div className="hidden lg:block shrink-0 h-full border-r border-border/40">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-full relative">
        
        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
          
          {/* Content Wrapper: 
             Yahan humne container ko max-width di hai taake screen bohot badi na lage
          */}
          <div className="p-4 md:p-8 lg:p-10 w-full max-w-[1400px] mx-auto min-h-[calc(100vh-80px)]">
            {children}
          </div>
          
          {/* Footer inside scroll area */}
          <Footer />
        </div>
      </main>
    </div>
  );
}