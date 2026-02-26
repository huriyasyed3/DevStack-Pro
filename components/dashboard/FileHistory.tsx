"use client";

import React from "react";
import { MoreVertical, FileText, FolderArchive, Video } from "lucide-react";

/**
 * Mock data with file types for dynamic icon rendering
 */
const fileData = [
  { name: "Q4_Financial_Report.pdf", date: "Oct 24, 2023", status: "Completed", type: "PDF" },
  { name: "Brand_Assets_Final.zip", date: "Oct 22, 2023", status: "Completed", type: "ZIP" },
  { name: "User_Interview_01.mp4", date: "Oct 21, 2023", status: "In Progress", type: "MP4" },
];

/**
 * Helper to render dynamic icons based on file type
 */
const FileIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "PDF": return <div className="h-8 w-8 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500"><FileText size={16} /></div>;
    case "ZIP": return <div className="h-8 w-8 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500"><FolderArchive size={16} /></div>;
    default: return <div className="h-8 w-8 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500"><Video size={16} /></div>;
  }
};

export default function FileHistory() {
  return (
    <div className="bg-[#0b1224] border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
      {/* Table Header - Static across all views */}
      <div className="p-5 md:p-6 flex justify-between items-center border-b border-slate-800">
        <h2 className="text-base md:text-lg font-bold text-white tracking-tight">Recent Files</h2>
        <button className="text-blue-500 text-[10px] md:text-xs font-black uppercase tracking-widest hover:text-blue-400 transition-colors">
          View All
        </button>
      </div>
      
      {/* Responsive Wrapper: 
          Uses 'overflow-x-auto' to allow horizontal scrolling on small screens 
          without breaking the dashboard layout.
      */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <table className="w-full text-left min-w-[600px] md:min-w-full">
          <thead>
            <tr className="text-[10px] font-black text-slate-500 tracking-[0.15em] border-b border-slate-800">
              <th className="px-6 py-4 uppercase">File Name</th>
              <th className="px-6 py-4 uppercase">Upload Date</th>
              <th className="px-6 py-4 uppercase">Status</th>
              <th className="px-6 py-4 uppercase text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {fileData.map((file, i) => (
              <tr key={i} className="hover:bg-slate-800/20 transition-colors group">
                {/* File Name Column */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <FileIcon type={file.type} />
                    <span className="text-sm font-semibold text-slate-200 truncate max-w-[150px] md:max-w-none">
                      {file.name}
                    </span>
                  </div>
                </td>

                {/* Date Column */}
                <td className="px-6 py-4 text-xs md:text-sm text-slate-500 font-medium">
                  {file.date}
                </td>

                {/* Status Column */}
                <td className="px-6 py-4">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                    file.status === 'Completed' 
                      ? 'bg-emerald-500/5 text-emerald-500 border-emerald-500/10' 
                      : 'bg-orange-500/5 text-orange-500 border-orange-500/10'
                  }`}>
                    {file.status}
                  </span>
                </td>

                {/* Action Column */}
                <td className="px-6 py-4 text-right">
                  <button className="p-1 text-slate-600 hover:text-white hover:bg-slate-800 rounded-md transition-all">
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