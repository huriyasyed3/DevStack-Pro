"use client";

import { useFilesStore } from "@/store/useFilesStore";
import { FileText, MoreVertical, Search, Plus, Image as ImageIcon, Zap, Trash2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

export default function HistoryPage() {
  // Zustand store se files aur remove function nikalna
  const { files, removeFile } = useFilesStore();

  const handleDelete = (id: string) => {
    removeFile(id);
    toast.success("File removed from history");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 md:space-y-10 pb-20 px-4 md:px-0 relative min-h-screen transition-colors">
      
      {/* 1. HEADER */}
      <div className="flex items-center justify-between pt-4 md:pt-0">
        <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">File History</h1>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center bg-muted/50 border border-border rounded-xl px-3 py-1.5 focus-within:border-primary/50 transition-all">
            <Search size={16} className="text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search files..." 
              className="bg-transparent border-none text-xs text-foreground placeholder:text-muted-foreground focus:outline-none ml-2 w-48" 
            />
          </div>
        </div>
      </div>

      {/* 2. CATEGORIES & CALENDAR (Static for UI) */}
      <div className="space-y-6">
        <div className="flex gap-6 overflow-x-auto no-scrollbar text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] border-b border-border pb-2">
          <span className="text-primary border-b-2 border-primary pb-2 cursor-pointer whitespace-nowrap">All Files</span>
          <span className="hover:text-foreground cursor-pointer transition-colors whitespace-nowrap">PDFs</span>
          <span className="hover:text-foreground cursor-pointer transition-colors whitespace-nowrap">Images</span>
        </div>
      </div>

      {/* 3. DYNAMIC FILE LIST */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
        {files.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-muted-foreground border-2 border-dashed border-border rounded-3xl bg-muted/10">
            <FileText size={40} className="mb-4 opacity-20" />
            <p className="text-sm font-medium italic">No files converted yet.</p>
            <Button asChild variant="link" className="mt-2 text-primary">
                <Link href="/tools/pdf-to-word">Start converting now →</Link>
            </Button>
          </div>
        ) : (
          files.map((file) => {
            const isPDF = file.name.toLowerCase().endsWith('.pdf');
            const isImage = /\.(jpg|jpeg|png|webp)$/i.test(file.name);

            return (
              <div 
                key={file.id} 
                className="bg-card border border-border p-4 md:p-5 rounded-2xl flex items-center justify-between group hover:border-primary/30 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-4 min-w-0">
                  {/* Dynamic Icon */}
                  <div className={`p-3 rounded-xl shrink-0 ${
                    isPDF ? 'bg-red-500/10 text-red-500' : 
                    isImage ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'
                  }`}>
                    {isPDF ? <FileText size={20} /> : isImage ? <ImageIcon size={20} /> : <Zap size={20} />}
                  </div>
                  
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-foreground truncate">{file.name}</p>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase mt-0.5">
                      {file.tool} • {file.size} • {file.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4 shrink-0">
                  {/* Status Badge */}
                  <span className="hidden md:block text-[9px] font-black px-2 py-0.5 rounded tracking-widest bg-emerald-500/10 text-emerald-500 uppercase">
                    {file.status}
                  </span>

                  {/* Actions: Delete */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleDelete(file.id)}
                    className="text-muted-foreground hover:text-red-500 h-8 w-8"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 4. FLOATING ACTION BUTTON */}
      <Button asChild className="fixed bottom-8 right-8 h-14 px-6 rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 hover:scale-105 transition-all">
         <Link href="/tools/pdf-to-word" className="flex items-center gap-2">
            <Plus size={24} /> <span className="font-bold">New Task</span>
         </Link>
      </Button>
    </div>
  );
}