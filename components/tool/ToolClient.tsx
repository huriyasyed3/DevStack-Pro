// "use client";

// import { useState } from "react";
// import UploadBox from "@/components/tool/UploadBox";
// import ConvertActions from "@/components/tool/ConvertActions";

// export default function ToolClient({ slug }: { slug: string }) {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   // File hatane ka function
//   const handleClear = () => setSelectedFile(null);

//   // Tool name formatting logic
//   const parts = slug.split('-');
//   const fromText = parts[0]?.toUpperCase() || "FILE";
//   const toText = parts[2]?.toUpperCase() || "WORD";

//   return (
//     /* FIXED: text-white -> text-foreground for light mode support */
//     <div className="bg-background text-foreground pb-20 transition-colors">
      
//       {/* 1. Breadcrumb - Sticky/Fixed top style */}
//       <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center text-[9px] md:text-[10px] font-black tracking-[0.2em] text-muted-foreground/60">
//         <div className="flex items-center gap-2">
//           <span className="hover:text-primary cursor-pointer transition-colors">TOOLS</span>
//           <span>/</span>
//           <span className="text-primary uppercase">{slug.replace(/-/g, ' ')}</span>
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto px-4 mt-6 md:mt-12 space-y-10 md:space-y-16">
        
//         {/* 2. Hero Section: Focused and Dynamic */}
//         <div className="text-center space-y-4">
//           <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-[1.1]">
//             Convert {fromText} to <br /> 
//             <span className="text-primary italic">Editable {toText}</span>
//           </h1>
//           <p className="text-muted-foreground max-w-lg mx-auto text-xs md:text-sm leading-relaxed font-medium">
//             Experience lightning-fast conversions. Your files are encrypted, 
//             processed securely, and deleted automatically.
//           </p>
//         </div>

//         {/* 3. Main Tool Area */}
//         <div className="relative">
//           {/* Glassmorphism Background Decor (Optional but Pro) */}
//           <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-transparent blur-3xl -z-10 opacity-50" />
          
//           <div className="space-y-6">
//             {/* Upload Box Component */}
//             <UploadBox onFileSelect={setSelectedFile} file={selectedFile} />

//             {/* 4. Convert Bar: Modern Slide-up Animation */}
//             {selectedFile && (
//               <div className="pt-2 animate-in fade-in zoom-in-95 slide-in-from-bottom-6 duration-500">
//                  <ConvertActions 
//                    file={selectedFile} 
//                    toolName={slug} 
//                    onClear={handleClear} 
//                  />
//               </div>
//             )}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import UploadBox from "@/components/tool/UploadBox";
import ConvertActions from "@/components/tool/ConvertActions";
import { Toaster } from "sonner"; 

export default function ToolClient({ slug }: { slug: string }) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleClear = () => setSelectedFile(null);

  return (
    // bg-[#020817] ko wapis le aaya hoon taake real lage
    <div className="min-h-screen bg-[#020817] text-white pb-20">
      
      {/* Toaster setup bina UI disturb kiye */}
      <Toaster position="top-right" richColors closeButton theme="dark" />

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-[10px] font-bold tracking-widest text-slate-500">
        <div>TOOLS  /  <span className="text-blue-500 uppercase">{slug.replace('-', ' ')}</span></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-16">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Convert {slug.split('-')[0].toUpperCase()} to <br /> 
            <span className="text-blue-500">Editable {slug.split('-')[2]?.toUpperCase() || 'Word'}</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Professional grade tools to convert and manage your files. 
            No installation required, 100% secure.
          </p>
        </div>

        <div className="space-y-6">
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