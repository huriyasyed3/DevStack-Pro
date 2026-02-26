"use client";

import { Search, Grid, Layout, Cpu, Globe, Star, User } from "lucide-react";
import Link from "next/link";

// 1. Pehle data ke liye types define kar di hain taake error na aaye
interface ToolItem {
  name: string;
  desc: string;
  slug: string;
  icon: string | React.ReactNode;
  starred?: boolean;
}

interface TrendingTool extends ToolItem {
  color: string;
  popular?: boolean;
}

export default function ToolsDirectory() {
  const trendingTools: TrendingTool[] = [
    { 
      name: "Merge PDF", 
      desc: "Combine multiple PDF files into one document.", 
      slug: "merge-pdf", 
      color: "bg-blue-600", 
      popular: true,
      icon: <Layout size={20} />
    },
    { 
      name: "PDF Unlocker", 
      desc: "Remove security and passwords from PDF files.", 
      slug: "pdf-unlocker", 
      color: "bg-indigo-600",
      icon: <Layout size={20} />
    },
  ];

  const allTools: ToolItem[] = [
    { name: "PDF to Word", desc: "Convert documents with high accuracy.", slug: "pdf-to-word", icon: "PDF" },
    { name: "JSON Formatter", desc: "Validate and beautify your JSON code.", slug: "json-formatter", icon: "{ }", starred: true },
    { name: "HTML to PDF", desc: "Render web pages directly to PDF documents.", slug: "html-to-pdf", icon: "HTML" },
    { name: "Keyword Finder", slug: "keyword-finder", desc: "Optimize content for search engines.", icon: "SEO" },
    { name: "Color Palette", slug: "color-palette", desc: "Generate accessible color schemes.", icon: "🎨" },
    { name: "Base64 Encoder", slug: "base64-encoder", desc: "Encode and decode data using Base64.", icon: "64" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10 transition-colors">
      <div className="max-w-7xl mx-auto">
        
        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search 1000+ tools..."
            className="w-full bg-muted/50 border border-border rounded-xl py-4 pl-12 pr-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Categories */}
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
                cat.active 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Trending Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Trending</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trendingTools.map((tool) => (
              <Link 
                key={tool.slug} 
                href={`/tools/${tool.slug}`} 
                className={`relative group p-8 rounded-3xl ${tool.color} text-white overflow-hidden shadow-xl hover:scale-[1.01] transition-all`}
              >
                <div className="relative z-10">
                  <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                    {tool.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
                  <p className="text-white/80 text-sm">{tool.desc}</p>
                </div>
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
              </Link>
            ))}
          </div>
        </div>

        {/* All Tools Section */}
        <div>
          <h2 className="text-xl font-bold mb-6">All Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="flex items-center justify-between p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-[10px] font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    {tool.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{tool.name}</h4>
                    <p className="text-xs text-muted-foreground">{tool.desc}</p>
                  </div>
                </div>
                <Star 
                  size={18} 
                  className={tool.starred ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground group-hover:text-yellow-500"} 
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}