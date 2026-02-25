"use client";

import Link from "next/link";

/**
 * SEOContent Component (Dynamic & Scalable + White Text Fix)
 */
interface SEOContentProps {
  toolName: string; // e.g. "Pdf To Word"
  slug: string;     // e.g. "pdf-to-word"
}

export default function SEOContent({ toolName, slug }: SEOContentProps) {
  // Derived values for natural language
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
    <section className="mt-16 max-w-4xl mx-auto leading-relaxed text-white">
      {/* Remove prose completely aur manual styling karte hain taake full control rahe */}
      
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
        {toolName} Converter – Free Online File Conversion Tool
      </h2>

      <p className="text-lg mb-8 text-gray-200">
        Welcome to DevStack Pro's powerful <strong className="text-white">{toolName}</strong> converter. 
        This free online tool lets you convert {fromExt} files to {toExt} in just seconds — 
        no software installation, no registration, no watermarks. Whether you're a student, 
        professional, or business user, our AI-enhanced platform delivers accurate, 
        high-quality conversions every time.
      </p>

      <h3 className="text-2xl font-semibold mt-12 mb-6 text-white">
        Why Choose DevStack Pro {toolName} Converter?
      </h3>
      <p className="text-gray-200 mb-6">
        Unlike generic online converters that compromise on quality or security, 
        DevStack Pro stands out with:
      </p>
      <ul className="list-disc pl-6 space-y-4 mb-10 text-gray-200">
        <li><strong className="text-white">Lightning-fast processing</strong> — most conversions finish in under 10 seconds</li>
        <li><strong className="text-white">End-to-end encryption</strong> — your files are processed securely and deleted immediately after download</li>
        <li><strong className="text-white">Preserves formatting & layout</strong> — tables, images, fonts, and headings stay intact</li>
        <li><strong className="text-white">Mobile-friendly drag & drop</strong> — works perfectly on phone, tablet, or desktop</li>
        <li><strong className="text-white">No file size limits on free plan</strong> (upgrade for even larger files & batch processing)</li>
        <li><strong className="text-white">Part of a complete AI Tools & PDF Suite</strong> — combine with compression, merging, editing & more</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-12 mb-6 text-white">
        How to Convert {fromExt} to {toExt} in 4 Easy Steps
      </h3>
      <ol className="list-decimal pl-6 space-y-4 mb-10 text-gray-200">
        <li><strong className="text-white">Upload your file</strong> — drag & drop your {fromExt} document into the box above or click to browse.</li>
        <li><strong className="text-white">Start conversion</strong> — click the big "{toolName}" button. Our system will instantly begin processing.</li>
        <li><strong className="text-white">Wait a moment</strong> — you'll see a progress indicator while we handle the conversion.</li>
        <li><strong className="text-white">Download your file</strong> — once done, click the download button to save your new {toExt} file.</li>
      </ol>

      <h3 className="text-2xl font-semibold mt-12 mb-6 text-white">
        Common Use Cases for {toolName}
      </h3>
      <p className="text-gray-200 mb-6">
        People use our {lowerTool} tool every day for:
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-10 text-gray-200">
        <li>Turning scanned PDFs into editable Word documents</li>
        <li>Preparing reports and resumes for professional sharing</li>
        <li>Converting invoices, contracts, and forms for editing</li>
        <li>Making documents compatible across different software</li>
        <li>Reducing file size while keeping quality (with our integrated compressor)</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-12 mb-6 text-white">
        Is {toolName} Really Free & Secure?
      </h3>
      <p className="text-gray-200 mb-6">
        Yes — 100% free for basic use. We never store your files longer than necessary, and all transfers use HTTPS + encryption.
        For extra peace of mind, read our{" "}
        <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
          Privacy Policy
        </Link>.
      </p>

      <h3 className="text-2xl font-semibold mt-12 mb-6 text-white">
        Need More Tools? Explore the Suite
      </h3>
      <p className="text-gray-200 mb-6">
        DevStack Pro offers a full collection of file utilities:
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-200">
        <li><Link href="/tools/pdf-to-word" className="text-blue-400 hover:text-blue-300 underline">PDF to Word</Link></li>
        <li><Link href="/tools/word-to-pdf" className="text-blue-400 hover:text-blue-300 underline">Word to PDF</Link></li>
        <li><Link href="/tools/pdf-compressor" className="text-blue-400 hover:text-blue-300 underline">PDF Compressor</Link></li>
        <li><Link href="/tools/merge-pdf" className="text-blue-400 hover:text-blue-300 underline">Merge PDF</Link></li>
        <li><Link href="/tools/pdf-to-jpg" className="text-blue-400 hover:text-blue-300 underline">PDF to JPG</Link></li>
      </ul>

      <p className="text-gray-200 mb-6">
        For advanced features like batch conversion, OCR support, password protection, and unlimited usage, check out our{" "}
        <Link href="/pricing" className="text-blue-400 hover:text-blue-300 font-medium underline">
          Pro plans
        </Link>.
      </p>

      <p className="text-gray-500 italic mt-16 text-sm">
        Last updated: February 2026 • DevStack Pro – Your All-in-One AI Tools & PDF Solution
      </p>
    </section>
  );
}