"use client";

import { FC } from "react";
import { FileText, MoreVertical, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Button } from "../ui/button";

interface FileHistory {
  id: number;
  name: string;
  type: string;
  size: string;
  uploadedAt: string;
  status: "Completed" | "Processing" | "Failed";
}

const files: FileHistory[] = [
  { id: 1, name: "Q4_Financial_Report.pdf", type: "PDF", size: "2.4 MB", uploadedAt: "Oct 24, 2023", status: "Completed" },
  { id: 2, name: "Brand_Assets_Final.zip", type: "ZIP", size: "15.8 MB", uploadedAt: "Oct 22, 2023", status: "Completed" },
  { id: 3, name: "User_Interview_01.mp4", type: "MP4", size: "145 MB", uploadedAt: "Oct 21, 2023", status: "Processing" },
];

/** * Status Badge Component 
 * Optimized padding for mobile and desktop
 */
const StatusBadge = ({ status }: { status: FileHistory["status"] }) => {
  const styles = {
    Completed: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    Processing: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    Failed: "bg-red-500/10 text-red-500 border-red-500/20",
  };

  const icons = {
    Completed: <CheckCircle2 size={12} />,
    Processing: <Clock size={12} className="animate-spin" />,
    Failed: <AlertCircle size={12} />,
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1 rounded-full text-[9px] md:text-[10px] font-bold border ${styles[status]}`}>
      {icons[status]}
      {status.toUpperCase()}
    </span>
  );
};

const FileHistoryTable: FC = () => {
  return (
    <div className="bg-[#0b1224] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Dynamic Header: Adjusts padding for mobile */}
      <div className="p-4 md:p-6 flex justify-between items-center border-b border-slate-800 bg-[#0b1224]">
        <h2 className="text-base md:text-lg font-bold text-white tracking-tight">Recent Files</h2>
        <Button variant="ghost" size="sm" className="text-blue-500 font-bold text-xs md:text-sm">
          View All
        </Button>
      </div>

      {/* RESPONSIVE WRAPPER: 
        Allows horizontal scroll on mobile with a hidden scrollbar for a clean look 
      */}
      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-left border-collapse min-w-[600px] md:min-w-full">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/30">
              <th className="px-4 md:px-6 py-4 text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase">Name</th>
              <th className="px-4 md:px-6 py-4 text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase">Date</th>
              <th className="px-4 md:px-6 py-4 text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase">Status</th>
              <th className="px-4 md:px-6 py-4 text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {files.map((file) => (
              <tr key={file.id} className="hover:bg-blue-600/[0.02] transition-colors group">
                <td className="px-4 md:px-6 py-4">
                  <div className="flex items-center gap-3">
                    {/* Responsive Icon Box */}
                    <div className="h-8 w-8 md:h-9 md:w-9 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 border border-blue-500/10 shrink-0">
                      <FileText size={16} className="md:w-[18px] md:h-[18px]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm font-bold text-slate-200 group-hover:text-white transition-colors truncate">
                        {file.name}
                      </p>
                      <p className="text-[10px] md:text-[11px] text-slate-500 font-medium uppercase tracking-tighter">
                        {file.size} • {file.type}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 md:px-6 py-4 text-[11px] md:text-sm text-slate-400 font-medium whitespace-nowrap">
                  {file.uploadedAt}
                </td>
                <td className="px-4 md:px-6 py-4">
                  <StatusBadge status={file.status} />
                </td>
                <td className="px-4 md:px-6 py-4 text-right">
                  <Button variant="ghost" size="icon" className="text-slate-500 h-8 w-8">
                    <MoreVertical size={16} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileHistoryTable;