"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQSectionProps {
  slug: string;
}

export default function FAQSection({ slug }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Helper to make slug look nice (e.g., pdf-to-word -> PDF to Word)
  const formattedTool = slug
    .split("-")
    .map((word) => (word.length <= 3 ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(" ");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: `How secure is the ${formattedTool} conversion?`,
      answer: "Your privacy is our priority. All files are processed securely and deleted from our servers immediately after conversion. We use end-to-end SSL encryption to ensure your data stays private.",
    },
    {
      question: "Is there a limit on file size?",
      answer: "Free users can process files up to 10MB. For larger files and batch processing, check out our Pro plan which supports up to 500MB per file.",
    },
    {
      question: "Will the formatting be preserved after conversion?",
      answer: "Absolutely! Our AI-driven engine is specifically tuned to maintain complex layouts, tables, and font styles during the conversion process.",
    },
    {
      question: "Do I need to install any software?",
      answer: "No installation required. DevStack Pro is a 100% cloud-based tool that works in any modern web browser like Chrome, Safari, or Edge.",
    },
    {
      question: "Can I use this tool on my mobile phone?",
      answer: "Yes! Our platform is fully responsive. You can upload, convert, and download documents directly from your smartphone or tablet.",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="bg-primary/10 text-primary p-3 rounded-2xl mb-4">
          <HelpCircle size={28} />
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground font-medium">
          Everything you need to know about our {formattedTool} tool.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-2xl transition-all duration-300 ${
              openIndex === index 
                ? "border-primary/50 bg-card shadow-lg shadow-primary/5" 
                : "border-border bg-card/50 hover:border-border/80"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left transition-colors"
            >
              <span className={`font-bold text-sm md:text-base transition-colors ${
                openIndex === index ? "text-primary" : "text-foreground"
              }`}>
                {faq.question}
              </span>
              <ChevronDown 
                size={20} 
                className={`text-primary transition-transform duration-500 ${
                  openIndex === index ? "rotate-180" : ""
                }`} 
              />
            </button>
            
            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-border/30 mt-2">
                <div className="pt-4">
                   {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}