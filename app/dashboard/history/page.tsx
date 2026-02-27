"use client";

import { useState } from "react";
import { useFilesStore } from "@/store/useFilesStore";
import { FileText, MoreVertical, Search, Plus, Image as ImageIcon, Zap, Trash2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"; // Ensure path is correct

export default function HistoryPage() {
  const { files, removeFile } = useFilesStore();
  const [activeTab, setActiveTab] = useState("ALL"); // For Filtering
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (id: string) => {
    removeFile(id);
    toast.success("File removed from history");
  };

  // --- FILTERING LOGIC ---
  const filteredFiles = files.filter((file) => {
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase());
    const isPDF = file.name.toLowerCase().endsWith(".pdf");
    const isImage = /\.(jpg|jpeg|png|webp)$/i.test(file.name);

    if (activeTab === "PDF") return matchesSearch && isPDF;
    if (activeTab === "IMAGE") return matchesSearch && isImage;
    return matchesSearch; // For "ALL"
  });

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none text-xs text-foreground placeholder:text-muted-foreground focus:outline-none ml-2 w-48" 
            />
          </div>
        </div>
      </div>

      {/* 2. CATEGORIES (FILTERING TABS) */}
      <div className="space-y-6">
        <div className="flex gap-6 overflow-x-auto no-scrollbar text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] border-b border-border pb-2">
          <button 
            onClick={() => setActiveTab("ALL")}
            className={`${activeTab === "ALL" ? "text-primary border-b-2 border-primary" : "hover:text-foreground"} pb-2 transition-all`}
          >
            All Files
          </button>
          <button 
            onClick={() => setActiveTab("PDF")}
            className={`${activeTab === "PDF" ? "text-primary border-b-2 border-primary" : "hover:text-foreground"} pb-2 transition-all`}
          >
            PDFs
          </button>
          <button 
            onClick={() => setActiveTab("IMAGE")}
            className={`${activeTab === "IMAGE" ? "text-primary border-b-2 border-primary" : "hover:text-foreground"} pb-2 transition-all`}
          >
            Images
          </button>
        </div>
      </div>

      {/* 3. DYNAMIC FILE LIST */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
        {filteredFiles.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-muted-foreground border-2 border-dashed border-border rounded-3xl bg-muted/10 italic">
            <p className="text-sm">No files found in {activeTab.toLowerCase()} category.</p>
          </div>
        ) : (
          filteredFiles.map((file) => {
            const isPDF = file.name.toLowerCase().endsWith('.pdf');
            const isImage = /\.(jpg|jpeg|png|webp)$/i.test(file.name);

            return (
              <div 
                key={file.id} 
                className="bg-card border border-border p-4 md:p-5 rounded-2xl flex items-center justify-between group hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-4 min-w-0">
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
                  <span className="hidden md:block text-[9px] font-black px-2 py-0.5 rounded tracking-widest bg-emerald-500/10 text-emerald-500 uppercase">
                    {file.status}
                  </span>

                  {/* PRO POPOVER MENU */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                        <MoreVertical size={18} />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-40 p-1 rounded-xl">
                      <Button variant="ghost" className="w-full justify-start text-xs font-bold gap-2" onClick={() => toast.info("Download started...")}>
                        <Download size={14} /> Download
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-xs font-bold gap-2 text-red-500 hover:text-red-600 hover:bg-red-500/10" 
                        onClick={() => handleDelete(file.id)}
                      >
                        <Trash2 size={14} /> Delete
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 4. FLOATING ACTION BUTTON */}
      <Button asChild className="fixed bottom-8 right-8 h-14 px-6 rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 hover:scale-105 transition-all">
         <Link href="/" className="flex items-center gap-2">
            <Plus size={24} /> <span className="font-bold uppercase tracking-tighter">New Task</span>
         </Link>
      </Button>
    </div>
  );
}