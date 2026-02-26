import Link from "next/link";
import { FileText, Image as ImageIcon, FileCode, Zap } from "lucide-react";

const tools = [
  {
    title: "PDF to Word",
    desc: "Convert PDF documents to editable Word files instantly.",
    slug: "pdf-to-word",
    icon: <FileText className="text-blue-500" size={32} />,
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
  // Aap yahan mazeed tools add kar sakte hain
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020817] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
         
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Streamline Your Workflow with <span className="text-blue-500">Pro-Grade Tools</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
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
              className="group p-8 bg-[#0b1224]/50 border border-slate-800 rounded-3xl hover:border-blue-500/50 hover:bg-blue-600/5 transition-all duration-300"
            >
              <div className="mb-6 bg-slate-900 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
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