import Link from "next/link";
import { 
  FileText, 
  Image as ImageIcon, 
  FileCode, 
  Layers, 
  Scissors, 
  Lock, 
  Zap,
  FileSearch
} from "lucide-react";

const tools = [
  {
    title: "PDF to Word",
    desc: "Convert PDF documents to editable Word files instantly.",
    slug: "pdf-to-word",
    icon: <FileText className="text-blue-500" size={32} />,
    badge: "Popular"
  },
  {
    title: "Image to PDF",
    desc: "Merge multiple images into a single professional PDF.",
    slug: "image-to-pdf",
    icon: <ImageIcon className="text-emerald-500" size={32} />,
  },
  {
    title: "Word to PDF",
    desc: "Transform your DOCX files into high-quality PDFs.",
    slug: "word-to-pdf",
    icon: <FileCode className="text-orange-500" size={32} />,
  },
  {
    title: "Merge PDF",
    desc: "Combine multiple PDF files into one organized document.",
    slug: "merge-pdf",
    icon: <Layers className="text-purple-500" size={32} />,
    badge: "Pro"
  },
  {
    title: "Split PDF",
    desc: "Extract specific pages or split a PDF into multiple files.",
    slug: "split-pdf",
    icon: <Scissors className="text-pink-500" size={32} />,
  },
  {
    title: "PDF to Image",
    desc: "Convert your PDF pages into high-resolution JPG/PNG.",
    slug: "pdf-to-image",
    icon: <FileSearch className="text-cyan-500" size={32} />,
  },
  {
    title: "Unlock PDF",
    desc: "Remove passwords and restrictions from your PDF files.",
    slug: "unlock-pdf",
    icon: <Lock className="text-red-500" size={32} />,
    badge: "Security"
  },
];
export default function HomePage() {
  return (
    /* FIXED: bg-background aur text-foreground use for black text in light mode */
    <main className="min-h-screen bg-background text-foreground py-20 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
          {/* FIXED: text-foreground use  */}
          <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
            Streamline Your Workflow with <span className="text-blue-500">Pro-Grade Tools</span>
          </h1>
          {/* FIXED: text-muted-foreground for secondary text */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            Professional grade tools to convert, compress and manage your files. 
            No installation required, 100% secure.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link 
              key={tool.slug} 
              href={`/tools/${tool.slug}`}
             
              className="group relative p-8 bg-card border border-border rounded-3xl hover:border-blue-500/50 hover:bg-blue-600/5 transition-all duration-300 shadow-sm"
            >
              {/* Badge for Pro/Popular items */}
              {tool.badge && (
                <span className="absolute top-6 right-8 bg-blue-500/10 text-blue-500 text-[9px] font-black px-2 py-0.5 rounded-full border border-blue-500/20 uppercase tracking-tighter">
                  {tool.badge}
                </span>
              )}
              {/* FIXED: bg-muted for icon container  */}
              <div className="mb-6 bg-muted w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{tool.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {tool.desc}
              </p>
              <span className="text-blue-500 text-sm font-bold group-hover:underline">
                Open Tool →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}