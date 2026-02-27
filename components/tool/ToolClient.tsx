"use client";

import { useState } from "react";
import UploadBox from "@/components/tool/UploadBox";
import ConvertActions from "@/components/tool/ConvertActions";
import { Toaster } from "sonner"; 
import { ChevronRight } from "lucide-react";

export default function ToolClient({ slug }: { slug: string }) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleClear = () => setSelectedFile(null);

  // Tool name formatting
  const fromText = slug.split('-')[0].toUpperCase();
  const toText = slug.split('-')[2]?.toUpperCase() || 'Word';

  return (
    
    <div className="w-full bg-background text-foreground pb-20 transition-colors duration-300">
      
      {/* Toaster: Theme automatically handle */}
      <Toaster position="top-right" richColors />

      {/* 1. BREADCRUMB: text-muted-foreground use  */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-2 text-[10px] font-bold tracking-widest text-muted-foreground">
        <span>TOOLS</span> 
        <ChevronRight size={12} />
        <span className="text-primary uppercase font-black">{slug.replace(/-/g, ' ')}</span>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-16">
        
        {/* 2. HERO SECTION */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
            Convert {fromText} to <br /> 
            <span className="text-blue-600">Editable {toText}</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Professional grade tools to convert and manage your files. 
            No installation required, 100% secure.
          </p>
        </div>

        {/* 3. TOOL AREA */}
        <div className="space-y-6">
          {/* UploadBox aur ConvertActions adjust according to theme */}
          <UploadBox onFileSelect={setSelectedFile} file={selectedFile} />

          {selectedFile && (
            <div className="pt-6 animate-in fade-in slide-in-from-bottom-4">
               <ConvertActions 
                 file={selectedFile} 
                 toolName={slug} 
                 onClear={handleClear} 
               />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}