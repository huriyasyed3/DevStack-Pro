// "use client";

// import {
//   useState,
//   useRef,
//   DragEvent,
//   ChangeEvent,
//   KeyboardEvent,
// } from "react";
// import toast from "react-hot-toast";

// /**
//  * UploadBox Component
//  * -------------------
//  * Handles:
//  * - Drag & drop
//  * - File selection
//  * - Accessibility (keyboard support)
//  * - Displays selected file name
//  * - Optional disabled state (during processing)
//  */

// interface UploadBoxProps {
//   onFileSelect: (file: File) => void;
//   disabled?: boolean;
//   file?: File | null;
// }

// export default function UploadBox({ onFileSelect, disabled = false, file }: UploadBoxProps) {
//   const [isDragging, setIsDragging] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   /* Handle File Selection */
//   const handleFile = (selectedFile: File) => {
//     if (disabled) return;
//     onFileSelect(selectedFile);
//     toast.success(`${selectedFile.name} selected successfully`);
//   };

//   /* Handle Drag & Drop */
//   const handleDrop = (e: DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     if (disabled) return;
//     setIsDragging(false);
//     const droppedFile = e.dataTransfer.files[0];
//     if (droppedFile) handleFile(droppedFile);
//   };

//   /* Handle Input Change */
//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile) handleFile(selectedFile);
//   };

//   /* Keyboard Accessibility (Enter / Space) */
//   const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
//     if ((e.key === "Enter" || e.key === " ") && !disabled) {
//       fileInputRef.current?.click();
//     }
//   };

//   return (
//     <div
//       role="button"
//       tabIndex={0}
//       aria-label="File Upload Area"
//       onClick={() => !disabled && fileInputRef.current?.click()}
//       onKeyDown={handleKeyDown}
//       onDragOver={(e) => e.preventDefault()}
//       onDragEnter={() => !disabled && setIsDragging(true)}
//       onDragLeave={() => setIsDragging(false)}
//       onDrop={handleDrop}
//       className={`cursor-pointer border-2 border-dashed rounded-2xl p-10 text-center transition-all duration-300
//         ${isDragging ? "border-blue-500 bg-blue-50 scale-105" : "border-gray-300"}
//         ${disabled ? "opacity-50 pointer-events-none" : ""}`}
//     >
//       <p className="text-lg font-medium">
//         {file ? `Uploaded: ${file.name}` : "Drag & Drop your file here"}
//       </p>
//       <p className="text-sm text-gray-500 mt-2">
//         or click to browse from your device
//       </p>

//       {/* Hidden Input */}
//       <input
//         ref={fileInputRef}
//         type="file"
//         className="hidden"
//         onChange={handleInputChange}
//         disabled={disabled}
//       />
//     </div>
//   );
// }

"use client";

import {
  useState,
  useRef,
  DragEvent,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import toast from "react-hot-toast";
import { Upload, FileText, RefreshCcw } from "lucide-react"; // Icons for the UI

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
    toast.success(`${selectedFile.name} selected successfully`);
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
      // UI matches the dark dashboard theme
      className={`relative group flex flex-col items-center justify-center border-2 border-dashed rounded-[2.5rem] p-12 text-center transition-all duration-300
        ${isDragging ? "border-blue-500 bg-blue-500/10 scale-[1.02]" : "border-blue-500/20 bg-blue-500/[0.02]"}
        ${disabled ? "opacity-50 pointer-events-none" : "hover:border-blue-500/40 hover:bg-blue-500/[0.04]"}`}
      onClick={() => !disabled && fileInputRef.current?.click()}
    >
      
      {/* 1. Icon Stack: Blue file icon with refresh badge */}
      <div className="relative mb-6">
        <div className="h-20 w-16 bg-blue-600/20 rounded-2xl flex items-center justify-center shadow-inner">
          <FileText className="h-10 w-10 text-blue-500" />
        </div>
        <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-[#0b1224] border-2 border-[#050a15] rounded-full flex items-center justify-center shadow-lg">
          <RefreshCcw className="h-4 w-4 text-blue-400" />
        </div>
      </div>

      {/* 2. Text Content */}
      <div className="space-y-1 mb-8">
        <h3 className="text-xl font-bold text-white tracking-tight">
          {file ? "File ready to convert" : "Drop your PDF here"}
        </h3>
        <p className="text-slate-500 text-xs font-medium">
          {file ? file.name : "Maximum file size: 50MB"}
        </p>
      </div>

      {/* 3. SELECT FILES BUTTON: The actual button from the template */}
      <div 
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold shadow-[0_0_25px_rgba(37,99,235,0.25)] transition-all active:scale-95 group-hover:shadow-[0_0_35px_rgba(37,99,235,0.4)]"
      >
        <div className="bg-white/20 rounded-full p-1">
          <Upload className="h-4 w-4" />
        </div>
        <span>Select Files</span>
      </div>

      {/* Hidden Input */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleInputChange}
        disabled={disabled}
        accept=".pdf" // Optional: restrict to PDF only
      />
    </div>
  );
}