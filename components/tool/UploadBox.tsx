"use client";

import {
  useState,
  useRef,
  DragEvent,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import toast from "react-hot-toast";
import { Upload, FileText, RefreshCcw, CheckCircle2 } from "lucide-react"; 

interface UploadBoxProps {
  onFileSelect: (file: File) => void;
  disabled?: boolean;
  file?: File | null;
}

export default function UploadBox({ onFileSelect, disabled = false, file }: UploadBoxProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (selectedFile: File) => {
    if (disabled) return;
    onFileSelect(selectedFile);
    toast.success(`${selectedFile.name} selected successfully`, {
      style: { borderRadius: '10px', background: '#333', color: '#fff' }
    });
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (disabled) return;
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFile(droppedFile);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) handleFile(selectedFile);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if ((e.key === "Enter" || e.key === " ") && !disabled) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="File Upload Area"
      onKeyDown={handleKeyDown}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={() => !disabled && setIsDragging(true)}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => !disabled && fileInputRef.current?.click()}
      /* FIXED: bg-muted/20 and border-border for light/dark sync */
      className={`relative group flex flex-col items-center justify-center border-2 border-dashed rounded-[2.5rem] p-10 md:p-16 text-center transition-all duration-500
        ${isDragging 
          ? "border-primary bg-primary/10 scale-[1.03] shadow-2xl shadow-primary/20" 
          : "border-border bg-muted/20 hover:border-primary/40 hover:bg-muted/40"}
        ${disabled ? "opacity-50 pointer-events-none" : "cursor-pointer"}`}
    >
      
      {/* 1. Icon Stack: Animated bounce on drag */}
      <div className={`relative mb-8 transition-transform duration-300 ${isDragging ? "scale-110" : ""}`}>
        <div className={`h-24 w-20 rounded-2xl flex items-center justify-center shadow-inner transition-colors
          ${file ? "bg-emerald-500/20" : "bg-primary/20"}`}>
          {file ? (
             <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-in zoom-in" />
          ) : (
             <FileText className="h-12 w-12 text-primary" />
          )}
        </div>
        
        {/* Secondary Badge Icon */}
        <div className="absolute -bottom-2 -right-2 h-10 w-10 bg-background border-2 border-border rounded-full flex items-center justify-center shadow-xl">
          <RefreshCcw className={`h-5 w-5 text-primary ${isDragging ? "animate-spin" : ""}`} />
        </div>
      </div>

      {/* 2. Text Content */}
      <div className="space-y-2 mb-10">
        <h3 className="text-2xl font-black text-foreground tracking-tight">
          {file ? "File Ready for Action!" : "Drop your PDF here"}
        </h3>
        <p className="text-muted-foreground text-sm font-medium max-w-[250px] mx-auto truncate">
          {file ? file.name : "Supports PDF, DOCX up to 50MB"}
        </p>
      </div>

      {/* 3. CTA BUTTON */}
      <div 
        className={`inline-flex items-center gap-3 px-10 py-4 rounded-full font-black transition-all active:scale-95 shadow-lg
          ${file 
            ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/20" 
            : "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/20"}`}
      >
        <div className="bg-white/20 rounded-full p-1.5">
          <Upload className="h-4 w-4" />
        </div>
        <span>{file ? "Change File" : "Select Files"}</span>
      </div>

      {/* Hidden Input */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleInputChange}
        disabled={disabled}
        accept=".pdf,.docx,.doc" 
      />
    </div>
  );
}