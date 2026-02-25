"use client";
import { MoreVertical } from "lucide-react";

const fileData = [
  { name: "Q4_Financial_Report.pdf", date: "Oct 24, 2023", status: "Completed" },
  { name: "Brand_Assets_Final.zip", date: "Oct 22, 2023", status: "Completed" },
  { name: "User_Interview_01.mp4", date: "Oct 21, 2023", status: "In Progress" },
];

export default function FileHistory() {
  return (
    <div className="bg-[#0b1224] border border-slate-800 rounded-2xl overflow-hidden">
      <div className="p-6 flex justify-between items-center border-b border-slate-800">
        <h2 className="text-lg font-bold text-white">File History</h2>
        <button className="text-blue-500 text-xs font-bold hover:underline">View All</button>
      </div>
      
      <table className="w-full text-left">
        <thead>
          <tr className="text-[10px] font-black text-slate-500 tracking-widest border-b border-slate-800">
            <th className="px-6 py-4 uppercase">Name</th>
            <th className="px-6 py-4 uppercase">Date</th>
            <th className="px-6 py-4 uppercase">Status</th>
            <th className="px-6 py-4 uppercase text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {fileData.map((file, i) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
              <td className="px-6 py-4 flex items-center gap-3">
                <div className="h-8 w-8 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500 text-[10px] font-bold">PDF</div>
                <span className="text-sm font-bold text-slate-200">{file.name}</span>
              </td>
              <td className="px-6 py-4 text-sm text-slate-400">{file.date}</td>
              <td className="px-6 py-4">
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${file.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-orange-500/10 text-orange-500'}`}>
                  {file.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-slate-500 hover:text-white"><MoreVertical size={16} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}