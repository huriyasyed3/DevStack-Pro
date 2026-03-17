"use client";

import { FC } from "react";
import { 
  FileText, 
  MoreVertical, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Download,
  Trash2,
  ExternalLink
} from "lucide-react";
import { Button } from "../ui/button";
import { useFilesStore } from "@/store/useFilesStore"; // Zustand store connect kiya
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"; // Shadcn dropdown for "Action" button

/**
 * Status Badge with subtle Glow effect for dark mode
 */
const StatusBadge = ({ status }: { status: any }) => {
  const styles = {
    SUCCESS: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 shadow-[0_0_12px_-3px_rgba(16,185,129,0.2)]",
    PROCESSING: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    FAILED: "bg-destructive/10 text-destructive border-destructive/20",
  };

  const icons = {
    SUCCESS: <CheckCircle2 size={12} />,
    PROCESSING: <Clock size={12} className="animate-spin" />,
    FAILED: <AlertCircle size={12} />,
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold border ${styles[status as keyof typeof styles]}`}>
      {icons[status as keyof typeof icons]}
      {status}
    </span>
  );
};

const FileHistoryTable: FC = () => {
  const { files, removeFile } = useFilesStore(); // Real data from store

  // Empty state logic: If no files converted yet
  if (files.length === 0) {
    return (
      <div className="bg-card border-2 border-dashed border-border rounded-[2rem] p-12 text-center">
        <div className="h-16 w-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
          <FileText className="text-muted-foreground opacity-50" size={32} />
        </div>
        <h3 className="text-lg font-bold text-foreground">No conversions yet</h3>
        <p className="text-sm text-muted-foreground mt-1">Start by uploading a PDF in the tools section.</p>
      </div>
    );
  }

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-[2rem] overflow-hidden shadow-sm transition-all">
      
      {/* Table Header Section */}
      <div className="p-6 flex justify-between items-center border-b border-border/50 bg-muted/20">
        <div>
          <h2 className="text-lg font-bold text-foreground tracking-tight flex items-center gap-2">
            Recent Activity <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full">{files.length}</span>
          </h2>
          <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-widest mt-0.5">Track your document history</p>
        </div>
        <Button variant="outline" size="sm" className="rounded-xl font-bold text-xs border-primary/20 hover:bg-primary/5 text-primary">
          Export CSV
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-border/50 text-muted-foreground">
              <th className="px-6 py-4 text-[10px] font-black tracking-[0.2em] uppercase">Document Name</th>
              <th className="px-6 py-4 text-[10px] font-black tracking-[0.2em] uppercase">Service Type</th>
              <th className="px-6 py-4 text-[10px] font-black tracking-[0.2em] uppercase">Status</th>
              <th className="px-6 py-4 text-[10px] font-black tracking-[0.2em] uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {files.slice(0, 5).map((file) => ( // Top 5 recent files
              <tr key={file.id} className="hover:bg-primary/[0.02] transition-all group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center text-primary border border-primary/10 group-hover:scale-110 transition-transform">
                      <FileText size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-foreground truncate max-w-[200px]">{file.name}</p>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight italic">
                        {file.size} • {file.date}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-xs text-muted-foreground">
                  <span className="bg-muted px-2 py-1 rounded-md border border-border/50">{file.tool}</span>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={file.status} />
                </td>
                <td className="px-6 py-4 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-muted">
                        <MoreVertical size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-2xl border-border shadow-2xl">
                      <DropdownMenuItem className="text-xs font-bold gap-2 cursor-pointer">
                        <Download size={14} /> Download File
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-xs font-bold gap-2 cursor-pointer">
                        <ExternalLink size={14} /> View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => removeFile(file.id)}
                        className="text-xs font-bold gap-2 cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/5"
                      >
                        <Trash2 size={14} /> Delete Record
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileHistoryTable;