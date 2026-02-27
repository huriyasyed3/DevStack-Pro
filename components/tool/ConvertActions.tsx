"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; 
import { useFilesStore } from "@/store/useFilesStore";
import { FileText, Zap, Loader2, Download, CheckCircle2, RotateCcw } from "lucide-react";

// Professional Libraries
import { Document, Packer, Paragraph, TextRun } from "docx";
import mammoth from "mammoth";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

// Local Processors
import { extractTextFromPDF } from "@/lib/pdf-processor";
import { convertImageToPDF, generateImageFromPDF } from "@/lib/image-processor";

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
    if (!file) {
      toast.error("No file selected!");
      return;
    }

    const toastId = toast.loading(`Processing ${file.name}...`);
    setLoading(true);

    try {
      let finalBlob: Blob;
      let newExt = "";
      const slug = toolName.toLowerCase();

      /**
       * CASE 1: PDF TO WORD (DOCX)
       * Uses 'docx' library to build a real XML-based Word structure.
       */
     if (slug.includes("pdf-to-word")) {
  const resultText = await extractTextFromPDF(file);
  const lines = resultText.split('\n');

  const doc = new Document({
    sections: [{
      children: lines.map(line => {
        // Empty lines handle karein
        if (!line.trim()) return new Paragraph({ children: [] });

        // Check if line starts with tab (Indentation detect karna)
        const tabCount = (line.match(/\t/g) || []).length;

        return new Paragraph({
          children: [
            new TextRun({ 
              text: line.replace(/\t/g, ""), // Tab remove karke asli text
              size: 24,
              font: "Calibri" // Standard font taake layout stable rahe
            })
          ],
          indent: {
            left: tabCount * 720, // Har tab ko 0.5 inch space dena
          },
          spacing: {
            before: 100, // Question ke beech gap
          }
        });
      })
    }]
  });

  finalBlob = await Packer.toBlob(doc);
  newExt = ".docx";
}
      /**
       * CASE 2: WORD TO PDF
       * Uses 'mammoth' to extract clean text and 'pdf-lib' to draw a real PDF.
       */
      else if (slug.includes("word-to-pdf")) {
        const arrayBuffer = await file.arrayBuffer();
        const { value: extractedText } = await mammoth.extractRawText({ arrayBuffer });
        
        const pdfDoc = await PDFDocument.create();
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const page = pdfDoc.addPage([600, 800]);
        
        page.drawText(extractedText.slice(0, 2000), {
          x: 50,
          y: 750,
          size: 11,
          font: font,
          color: rgb(0, 0, 0),
          maxWidth: 500,
        });

        const pdfBytes = await pdfDoc.save();
       finalBlob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });
        newExt = ".pdf";
      }

      /**
       * CASE 3: IMAGE TO PDF
       */
      else if (slug.includes("image-to-pdf") || (slug.includes("to-pdf") && file.type.startsWith('image/'))) {
        finalBlob = await convertImageToPDF(file);
        newExt = ".pdf";
      }

      /**
       * CASE 4: PDF TO IMAGE
       */
      else if (slug.includes("pdf-to-image")) {
        finalBlob = await generateImageFromPDF(file);
        newExt = ".jpg";  
      }

      /**
       * DEFAULT FALLBACK
       */
      else {
        await new Promise((res) => setTimeout(res, 1000));
        finalBlob = new Blob(["Generic Processed Content"], { type: "text/plain" });
        newExt = ".txt";
      }

      const url = URL.createObjectURL(finalBlob);
      setDownloadUrl(url);
      setExt(newExt);

      // Save to Zustand History Store
      addFile({
        id: crypto.randomUUID(),
        name: file.name.replace(/\.[^/.]+$/, "") + newExt,
        tool: toolName.toUpperCase().replace(/-/g, ' '),
        date: new Date().toLocaleString([], { day:'2-digit', month:'short', hour: '2-digit', minute: '2-digit' }),
        size: (finalBlob.size / 1024 / 1024).toFixed(2) + " MB",
        status: "SUCCESS"
      });

      toast.success("Conversion Successful!", { id: toastId });

    } catch (error) {
      console.error("Conversion Error:", error);
      toast.error("Process failed. Check file format.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  if (!file) return null;

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row items-center gap-4 bg-card border border-border p-4 rounded-3xl shadow-2xl text-foreground">
        
        {/* File Info Display */}
        <div className="flex-1 flex items-center gap-4 w-full px-2">
          <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-500 
            ${downloadUrl ? "bg-emerald-500/20 text-emerald-500 scale-110" : "bg-primary/10 text-primary"}`}>
            {downloadUrl ? <CheckCircle2 size={24} /> : <FileText size={24} />}
          </div>
          <div className="truncate text-left">
            <p className="text-sm font-black truncate max-w-[200px] md:max-w-[300px]">
              {file.name}
            </p>
            <p className={`text-[10px] font-bold tracking-widest uppercase mt-1 ${downloadUrl ? "text-emerald-500" : "text-muted-foreground"}`}>
              {downloadUrl ? "CONVERSION COMPLETE" : "READY TO TRANSFORM"}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          {onClear && (
            <Button variant="ghost" size="icon" onClick={onClear} disabled={loading} className="rounded-xl text-muted-foreground">
              <RotateCcw size={18} />
            </Button>
          )}

          {!downloadUrl ? (
            <Button onClick={handleConvert} disabled={loading} className="flex-1 md:flex-none font-black h-12 px-8 rounded-2xl">
              {loading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> WORKING...</> : <><Zap size={18} className="mr-2 fill-current" /> CONVERT NOW</>}
            </Button>
          ) : (
            <Button asChild className="flex-1 md:flex-none bg-emerald-600 hover:bg-emerald-500 text-white font-black h-12 px-8 rounded-2xl">
              <a href={downloadUrl} download={file.name.replace(/\.[^/.]+$/, "") + ext}>
                <Download size={18} className="mr-2" /> DOWNLOAD
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}