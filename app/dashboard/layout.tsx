import Sidebar from "@/components/dashboard/Sidebar";

/**
 * Dashboard Layout
 * Persistent sidebar + top navigation
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-neutral-950">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex flex-col flex-1">
        
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

