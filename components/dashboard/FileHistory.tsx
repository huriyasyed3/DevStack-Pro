"use client";

import React from "react";
import { MoreVertical, FileText, FolderArchive, Video } from "lucide-react";

const fileData = [
  { name: "Q4_Financial_Report.pdf", date: "Oct 24, 2023", status: "Completed", type: "PDF" },
  { name: "Brand_Assets_Final.zip", date: "Oct 22, 2023", status: "Completed", type: "ZIP" },
  { name: "User_Interview_01.mp4", date: "Oct 21, 2023", status: "In Progress", type: "MP4" },
];

const FileIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "PDF": return <div className="h-8 w-8 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500"><FileText size={16} /></div>;
    case "ZIP": return <div className="h-8 w-8 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500"><FolderArchive size={16} /></div>;
    default: return <div className="h-8 w-8 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500"><Video size={16} /></div>;
  }
};

export default function FileHistory() {
  return (
    /* FIXED: bg-[#0b1224] -> bg-card | border-slate-800 -> border-border */
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm transition-colors">
      
      <div className="p-5 md:p-6 flex justify-between items-center border-b border-border">
        {/* FIXED: text-white -> text-foreground */}
        <h2 className="text-base md:text-lg font-bold text-foreground tracking-tight">Recent Files</h2>
        <button className="text-primary text-[10px] md:text-xs font-black uppercase tracking-widest hover:opacity-80 transition-all">
          View All
        </button>
      </div>
      
      <div className="w-full overflow-x-auto scrollbar-hide">
        <table className="w-full text-left min-w-[600px] md:min-w-full">
          <thead>
            {/* FIXED: text-slate-500 -> text-muted-foreground */}
            <tr className="text-[10px] font-black text-muted-foreground tracking-[0.15em] border-b border-border">
              <th className="px-6 py-4 uppercase">File Name</th>
              <th className="px-6 py-4 uppercase">Upload Date</th>
              <th className="px-6 py-4 uppercase">Status</th>
              <th className="px-6 py-4 uppercase text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {fileData.map((file, i) => (
              /* FIXED: hover effects updated to use theme variables */
              <tr key={i} className="hover:bg-muted/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <FileIcon type={file.type} />
                    {/* FIXED: text-slate-200 -> text-foreground */}
                    <span className="text-sm font-semibold text-foreground truncate max-w-[150px] md:max-w-none">
                      {file.name}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4 text-xs md:text-sm text-muted-foreground font-medium">
                  {file.date}
                </td>

                <td className="px-6 py-4">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                    file.status === 'Completed' 
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 border-emerald-500/20' 
                      : 'bg-orange-500/10 text-orange-600 dark:text-orange-500 border-orange-500/20'
                  }`}>
                    {file.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-right">
                  <button className="p-1 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-all">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}