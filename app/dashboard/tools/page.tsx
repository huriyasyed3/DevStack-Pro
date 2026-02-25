"use client";

import { Search, Grid, Layout, Cpu, Globe, Star, User } from "lucide-react";
import Link from "next/link";

export default function ToolsDirectory() {
  const trendingTools = [
    { name: "Merge PDF", desc: "Combine multiple PDF files into one document.", slug: "merge-pdf", color: "bg-blue-600", popular: true },
    { name: "PDF Unlocker", desc: "Remove security and passwords from PDF files.", slug: "pdf-unlocker", color: "bg-purple-700" },
  ];

  const allTools = [
    { name: "PDF to Word", desc: "Convert documents with high accuracy.", slug: "pdf-to-word", icon: "PDF_OFF" },
    { name: "JSON Formatter", desc: "Validate and beautify your JSON code.", slug: "json-formatter", icon: "{ }", starred: true },
    { name: "HTML to PDF", desc: "Render web pages directly to PDF documents.", slug: "html-to-pdf", icon: "HTML" },
    { name: "Keyword Finder", slug: "keyword-finder", desc: "Optimize content for search engines.", icon: "K" },
    { name: "Color Palette", slug: "color-palette", desc: "Generate accessible color schemes.", icon: "🎨" },
    { name: "Base64 Encoder", slug: "base64-encoder", desc: "Encode and decode data using Base64.", icon: "⌨️" },
  ];

  return (
    <div className="min-h-screen bg-[#020817] text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Search Bar Section */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-500" />
          </div>
          <input
            type="text"
            placeholder="Search 1000+ tools..."
            className="w-full bg-[#0b1224] border border-slate-800 rounded-xl py-4 pl-12 pr-4 text-slate-300 focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { name: "All Tools", icon: <Grid size={16} />, active: true },
            { name: "PDF Tools", icon: <Layout size={16} /> },
            { name: "Developer", icon: <Cpu size={16} /> },
            { name: "Converters", icon: <Globe size={16} /> },
            { name: "SEO", icon: <Search size={16} /> },
          ].map((cat) => (
            <button
              key={cat.name}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                cat.active ? "bg-blue-600 text-white" : "bg-[#1e293b]/50 text-slate-400 hover:bg-slate-800"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Trending Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold tracking-tight">Trending</h2>
            <button className="text-blue-500 text-sm hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trendingTools.map((tool) => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`} className={`relative group p-8 rounded-3xl ${tool.color} overflow-hidden shadow-2xl`}>
                <div className="relative z-10">
                  <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                    {tool.slug.includes("pdf") ? <Layout size={20} /> : <User size={20} />}
                  </div>
                  {tool.popular && (
                    <span className="absolute top-0 right-0 bg-emerald-500 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-tighter">
                      Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
                  <p className="text-white/80 text-sm max-w-[200px]">{tool.desc}</p>
                </div>
                {/* Decorative circle for glass effect */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        {/* All Tools Section */}
        <div>
          <h2 className="text-xl font-bold mb-6">All Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {allTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="flex items-center justify-between p-6 bg-[#0b1224] border border-slate-800 rounded-2xl hover:border-slate-700 transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-[10px] font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    {tool.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 group-hover:text-white">{tool.name}</h4>
                    <p className="text-xs text-slate-500">{tool.desc}</p>
                  </div>
                </div>
                <div className="text-slate-600 group-hover:text-yellow-500 transition-colors">
                  <Star size={18} fill={tool.starred ? "currentColor" : "none"} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}