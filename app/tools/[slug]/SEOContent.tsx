"use client";

import Link from "next/link";

interface SEOContentProps {
  toolName: string; // e.g. "Pdf To Word"
  slug: string;     // e.g. "pdf-to-word"
}

export default function SEOContent({ toolName, slug }: SEOContentProps) {
  // Logic for dynamic formatting
  const lowerTool = toolName.toLowerCase();
  const fromFormat = lowerTool.includes("to")
    ? lowerTool.split(" to ")[0].trim()
    : "file";
  const toFormat = lowerTool.includes("to")
    ? lowerTool.split(" to ")[1].trim()
    : "another format";

  const fromExt = fromFormat === "pdf" ? "PDF"
    : fromFormat === "word" ? "Word (.docx)"
    : fromFormat.toUpperCase();

  const toExt = toFormat === "pdf" ? "PDF"
    : toFormat === "word" ? "Word (.docx)"
    : toFormat.toUpperCase();

  return (
    /* FIXED: text-white -> text-foreground | max-w-4xl for better readability */
    <section className="mt-16 max-w-4xl mx-auto leading-relaxed text-foreground transition-colors px-2">
      
      {/* 1. MAIN H1/H2 Title */}
      <h2 className="text-3xl md:text-4xl font-black mb-8 text-foreground tracking-tight">
        {toolName} Converter – Free Online File Conversion Tool
      </h2>

      {/* 2. Intro Paragraph */}
      <p className="text-lg mb-8 text-muted-foreground">
        Welcome to DevStack Pro&apos;s powerful <strong className="text-foreground">{toolName}</strong> converter. 
        This free online tool lets you convert {fromExt} files to {toExt} in just seconds — 
        no software installation, no registration, no watermarks. Whether you&apos;re a student, 
        professional, or business user, our AI-enhanced platform delivers accurate, 
        high-quality conversions every time.
      </p>

      {/* 3. Features Section */}
      <div className="bg-card border border-border rounded-3xl p-8 mb-12 shadow-sm">
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          Why Choose DevStack Pro {toolName} Converter?
        </h3>
        <p className="text-muted-foreground mb-6">
          Unlike generic online converters that compromise on quality or security, 
          DevStack Pro stands out with:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary font-bold">✓</span> 
            <span><strong className="text-foreground">Lightning-fast processing</strong> — conversions finish in under 10s</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">✓</span> 
            <span><strong className="text-foreground">End-to-end encryption</strong> — files deleted after processing</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">✓</span> 
            <span><strong className="text-foreground">Format Preservation</strong> — layout and fonts stay intact</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">✓</span> 
            <span><strong className="text-foreground">Mobile Friendly</strong> — works on any device</span>
          </li>
        </ul>
      </div>

      {/* 4. Steps Section */}
      <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">
        How to Convert {fromExt} to {toExt} in 4 Easy Steps
      </h3>
      <div className="space-y-6 mb-12">
        {[
          { step: "1", title: "Upload your file", desc: `Drag & drop your ${fromExt} document into the box above.` },
          { step: "2", title: "Start conversion", desc: `Click the big "${toolName}" button to begin.` },
          { step: "3", title: "Wait a moment", desc: "Our AI-driven engine handles the processing instantly." },
          { step: "4", title: "Download", desc: `Click download to save your new ${toExt} file.` },
        ].map((item) => (
          <div key={item.step} className="flex gap-4 items-start">
            <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">
              {item.step}
            </div>
            <div>
              <p className="font-bold text-foreground">{item.title}</p>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Utility Links */}
      <div className="border-t border-border pt-10">
        <h3 className="text-xl font-bold mb-4 text-foreground">Need More Tools?</h3>
        <div className="flex flex-wrap gap-3">
          {["pdf-to-word", "word-to-pdf", "pdf-compressor", "merge-pdf"].map((linkSlug) => (
            <Link 
              key={linkSlug}
              href={`/tools/${linkSlug}`} 
              className="px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full text-sm transition-all border border-border"
            >
              {linkSlug.replace(/-/g, ' ').toUpperCase()}
            </Link>
          ))}
        </div>
      </div>

      <p className="text-muted-foreground/50 italic mt-16 text-xs text-center">
        Last updated: 2026 • DevStack Pro – Your All-in-One AI Tools Solution
      </p>
    </section>
  );
}