"use client";

import { Search } from "lucide-react";

/**
 * SearchBar Component
 * -------------------
 * Central search bar with dark theme matching the dashboard.
 */
export default function SearchBar() {
  return (
    <div className="flex-1 max-w-xl relative group hidden md:block">
      <Search 
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" 
        size={18} 
      />
      <input 
        type="text" 
        placeholder="Search for tools or files..." 
        className="w-full bg-[#0b1224] border border-slate-800 rounded-xl py-2.5 pl-12 pr-4 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all shadow-inner"
      />
    </div>
  );
}