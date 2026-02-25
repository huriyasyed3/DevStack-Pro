"use client";

import { useFilesStore } from "@/store/useFilesStore";
import { FileText, MoreVertical, Search, Plus, Image as ImageIcon, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HistoryPage() {
  // Store se 'files' nikaal rahe hain
  const { files } = useFilesStore();

  return (
    <div className="space-y-8 pb-20 relative min-h-screen">
      {/* 1. Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white tracking-tight">File History</h1>
        <Button variant="ghost" size="icon" className="text-slate-400">
          <Search size={20} />
        </Button>
      </div>

      {/* 2. Categories & Date Selector */}
      <div className="space-y-6">
        <div className="flex gap-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] border-b border-slate-800/50 pb-2">
          <span className="text-blue-500 border-b-2 border-blue-500 pb-2 cursor-pointer">All Files</span>
          <span className="hover:text-white cursor-pointer transition-colors">PDFs</span>
          <span className="hover:text-white cursor-pointer transition-colors">Images</span>
          <span className="hover:text-white cursor-pointer transition-colors">AI Models</span>
        </div>

        {/* Horizontal Calendar */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {['23', '24', '25', '26', '27', '28'].map((day) => (
            <div 
              key={day} 
              className={`flex flex-col items-center p-3 rounded-xl min-w-[58px] cursor-pointer transition-all border ${
                day === '25' 
                ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20' 
                : 'bg-[#0b1224] text-slate-500 border-slate-800 hover:border-slate-700'
              }`}
            >
              <span className="text-[9px] font-black uppercase mb-1 tracking-tighter">Wed</span>
              <span className="text-sm font-bold">{day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Dynamic File List */}
      <div className="space-y-3">
        {/* FIX: 'history' ki jagah 'files' use kiya */}
        {files.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-600 border-2 border-dashed border-slate-800/50 rounded-3xl">
            <FileText size={40} className="mb-4 opacity-20" />
            <p className="text-sm font-medium italic">No files converted yet.</p>
          </div>
        ) : (
          files.map((file) => (
            <div 
              key={file.id} 
              className="bg-[#0b1224] border border-slate-800 p-4 rounded-2xl flex items-center justify-between group hover:border-blue-500/30 transition-all hover:bg-slate-800/10"
            >
              <div className="flex items-center gap-4">
                {/* Dynamic Icon based on file name */}
                <div className={`p-3 rounded-xl ${
                  file.name.endsWith('.pdf') ? 'bg-blue-500/10 text-blue-500' :
                  file.name.endsWith('.png') ? 'bg-orange-500/10 text-orange-500' :
                  'bg-purple-500/10 text-purple-500'
                }`}>
                  {file.name.endsWith('.pdf') ? <FileText size={20} /> : 
                   file.name.endsWith('.png') ? <ImageIcon size={20} /> : <Zap size={20} />}
                </div>
                
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors truncate">
                    {file.name}
                  </p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight mt-0.5">
                    {file.date} • {file.size}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className={`text-[9px] font-black px-2 py-0.5 rounded tracking-widest ${
                  file.status === 'SUCCESS' ? 'bg-emerald-500/10 text-emerald-500' : 
                  file.status === 'PROCESSING' ? 'bg-orange-500/10 text-orange-500 animate-pulse' : 'bg-red-500/10 text-red-500'
                }`}>
                  {file.status}
                </span>
                <Button variant="ghost" size="icon" className="text-slate-600 hover:text-white">
                  <MoreVertical size={18} />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 4. FAB (Floating Action Button) */}
      <Button className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-blue-600 shadow-xl shadow-blue-600/30 hover:scale-110 active:scale-95 transition-all flex items-center justify-center p-0">
        <Plus size={28} className="text-white" />
      </Button>
    </div>
  );
}