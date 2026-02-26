"use client";

import { Search } from "lucide-react";

/**
 * SearchBar Component
 * -------------------
 * FIXED: Hardcoded dark colors replaced with theme-aware classes.
 */
export default function SearchBar() {
  return (
    <div className="flex-1 max-w-xl relative group hidden md:block">
      <Search 
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" 
        size={18} 
      />
      <input 
        type="text" 
        placeholder="Search for tools or files..." 
        /* FIXED: 
           - bg-[#0b1224] -> bg-muted/50 (Light mein halka grey, Dark mein dark)
           - border-slate-800 -> border-border
           - text-slate-300 -> text-foreground
        */
        className="w-full bg-muted/50 border border-border rounded-xl py-2.5 pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-inner"
      />
    </div>
  );
}