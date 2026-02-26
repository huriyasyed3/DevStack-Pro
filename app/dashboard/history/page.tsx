"use client";

import { useFilesStore } from "@/store/useFilesStore";
import { FileText, MoreVertical, Search, Plus, Image as ImageIcon, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HistoryPage() {
  const { files } = useFilesStore();

  return (
    <div className="max-w-7xl mx-auto space-y-6 md:space-y-10 pb-20 px-4 md:px-0 relative min-h-screen transition-colors">
      
      {/* 1. HEADER: Responsive Sizing */}
      <div className="flex items-center justify-between pt-4 md:pt-0">
        <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">File History</h1>
        <div className="flex items-center gap-2">
          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center bg-muted/50 border border-border rounded-xl px-3 py-1.5 focus-within:border-primary/50 transition-all">
            <Search size={16} className="text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search files..." 
              className="bg-transparent border-none text-xs text-foreground placeholder:text-muted-foreground focus:outline-none ml-2 w-48" 
            />
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground md:hidden">
            <Search size={20} />
          </Button>
        </div>
      </div>

      {/* 2. CATEGORIES & CALENDAR */}
      <div className="space-y-6">
        {/* Categories Tab */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] border-b border-border pb-2">
          <span className="text-primary border-b-2 border-primary pb-2 cursor-pointer whitespace-nowrap">All Files</span>
          <span className="hover:text-foreground cursor-pointer transition-colors whitespace-nowrap">PDFs</span>
          <span className="hover:text-foreground cursor-pointer transition-colors whitespace-nowrap">Images</span>
          <span className="hover:text-foreground cursor-pointer transition-colors whitespace-nowrap">AI Models</span>
        </div>

        {/* Horizontal Calendar */}
        <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 no-scrollbar">
          {['23', '24', '25', '26', '27', '28', '29', '30'].map((day) => (
            <div 
              key={day} 
              className={`flex flex-col items-center p-3 rounded-xl min-w-[58px] md:min-w-[70px] cursor-pointer transition-all border ${
                day === '25' 
                ? 'bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20' 
                : 'bg-card text-muted-foreground border-border hover:border-primary/30'
              }`}
            >
              <span className="text-[9px] md:text-[10px] font-black uppercase mb-1 tracking-tighter">Wed</span>
              <span className="text-sm md:text-base font-bold">{day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. DYNAMIC FILE LIST */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
        {files.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-muted-foreground border-2 border-dashed border-border rounded-3xl bg-muted/10">
            <FileText size={40} className="mb-4 opacity-20" />
            <p className="text-sm font-medium italic">No files converted yet.</p>
          </div>
        ) : (
          files.map((file) => (
            <div 
              key={file.id} 
              className="bg-card border border-border p-4 md:p-5 rounded-2xl flex items-center justify-between group hover:border-primary/30 transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-4 min-w-0">
                {/* File Icon */}
                <div className={`p-3 rounded-xl shrink-0 ${
                  file.name.endsWith('.pdf') ? 'bg-blue-500/10 text-blue-500' :
                  file.name.endsWith('.png') ? 'bg-orange-500/10 text-orange-500' :
                  'bg-purple-500/10 text-purple-500'
                }`}>
                  {file.name.endsWith('.pdf') ? <FileText size={20} /> : 
                   file.name.endsWith('.png') ? <ImageIcon size={20} /> : <Zap size={20} />}
                </div>
                
                <div className="min-w-0">
                  <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
                    {file.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tight mt-0.5">
                    {file.date} • {file.size}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4 ml-4 shrink-0">
                <span className={`text-[9px] font-black px-2 py-0.5 rounded tracking-widest ${
                  file.status === 'SUCCESS' ? 'bg-emerald-500/10 text-emerald-500' : 
                  file.status === 'PROCESSING' ? 'bg-orange-500/10 text-orange-500 animate-pulse' : 'bg-red-500/10 text-red-500'
                }`}>
                  {file.status}
                </span>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground h-8 w-8">
                  <MoreVertical size={18} />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 4. FAB & Desktop Button */}
      <Button className="md:hidden fixed bottom-8 right-8 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 hover:scale-110 active:scale-95 transition-all p-0">
        <Plus size={28} />
      </Button>

      <div className="hidden md:block fixed bottom-8 right-8">
         <Button className="gap-2 bg-primary hover:opacity-90 text-primary-foreground px-6 h-12 rounded-xl shadow-xl shadow-primary/20">
           <Plus size={20} /> New Conversion
         </Button>
      </div>
    </div>
  );
}