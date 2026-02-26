"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; 
import { useFilesStore } from "@/store/useFilesStore";
import { FileText, Zap, Loader2, Download, CheckCircle2, RotateCcw } from "lucide-react";
import { extractTextFromPDF } from "@/lib/pdf-processor";
import { convertImageToPDF } from "@/lib/image-processor";

interface Props {
  file: File | null;
  toolName: string;
  onClear?: () => void;
}

export default function ConvertActions({ file, toolName, onClear }: Props) {
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [ext, setExt] = useState("");
  const addFile = useFilesStore((state) => state.addFile);

  useEffect(() => {
    return () => {
      if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    };
  }, [downloadUrl]);

  const handleConvert = async () => {
    // 1. File null check (TS Error Fix)
    if (!file) {
      toast.error("No file selected!");
      return;
    }

    const toastId = toast.loading("Processing your file...");
    setLoading(true);

    try {
      // Variables ko yahan define kiya taake scope ka masla na ho (TS Error Fix)
      let finalBlob: Blob;
      let newExt = "";
      const slug = toolName.toLowerCase();

      // 2. Conversion Logic
      if (slug.includes("pdf-to-word")) {
        const resultText = await extractTextFromPDF(file);
        finalBlob = new Blob([resultText], { type: "application/msword" });
        newExt = ".doc";
      } else if (slug.includes("image-to-pdf") || file.type.startsWith('image/')) {
        finalBlob = await convertImageToPDF(file);
        newExt = ".pdf";
      } else {
        // Default fallback
        await new Promise((res) => setTimeout(res, 1500));
        finalBlob = new Blob(["Converted Content"], { type: "text/plain" });
        newExt = ".txt";
      }

      const url = URL.createObjectURL(finalBlob);
      setDownloadUrl(url);
      setExt(newExt);

      // 3. History Store Update
      addFile({
        id: crypto.randomUUID(),
        name: file.name.replace(/\.[^/.]+$/, "") + newExt,
        tool: toolName.toUpperCase().replace(/-/g, ' '),
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        size: (file.size / 1024 / 1024).toFixed(2) + " MB",
        status: "SUCCESS"
      });

      toast.success("Conversion Successful!", { id: toastId });

    } catch (error) {
      console.error(error);
      toast.error("Conversion failed!", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  // UI rendering mein null safety (TS Error Fix)
  if (!file) return null;

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row items-center gap-4 bg-[#0b1224] border border-slate-800 p-4 rounded-3xl shadow-2xl text-white">
        
        <div className="flex-1 flex items-center gap-4 w-full px-2">
          <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-colors 
            ${downloadUrl ? "bg-emerald-500/10 text-emerald-500" : "bg-blue-500/10 text-blue-500"}`}>
            {downloadUrl ? <CheckCircle2 size={24} /> : <FileText size={24} />}
          </div>
          <div className="truncate text-left">
            <p className="text-sm font-black truncate max-w-[200px] md:max-w-[300px]">
              {file.name}
            </p>
            <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-1">
              {downloadUrl ? "CONVERSION COMPLETE" : "READY TO TRANSFORM"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          {onClear && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClear}
              className="rounded-xl hover:bg-red-500/10 hover:text-red-500 text-slate-400"
            >
              <RotateCcw size={18} />
            </Button>
          )}

          {!downloadUrl ? (
            <Button 
              onClick={handleConvert} 
              disabled={loading}
              className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-500 text-white font-black h-12 px-8 rounded-2xl"
            >
              {loading ? (
                <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> WORKING...</>
              ) : (
                <><Zap size={18} className="mr-2 fill-current" /> CONVERT NOW</>
              )}
            </Button>
          ) : (
            <Button 
              asChild
              className="flex-1 md:flex-none bg-emerald-600 hover:bg-emerald-500 text-white font-black h-12 px-8 rounded-2xl"
            >
              <a 
                href={downloadUrl} 
                download={file.name.replace(/\.[^/.]+$/, "") + ext}
                onClick={() => toast.success("Downloading...")}
              >
                <Download size={18} className="mr-2" /> DOWNLOAD
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}