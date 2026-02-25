"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQSectionProps {
  slug: string;
}

export default function FAQSection({ slug }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: `How secure is the ${slug.replace("-", " ")} conversion?`,
      answer: "Your privacy is our priority. All files are processed locally in your browser or deleted from our secure servers immediately after conversion. We use SSL encryption to ensure your data stays private.",
    },
    {
      question: "Is there a limit on file size?",
      answer: "Free users can process files up to 10MB. For larger files, we recommend our Pro plan which supports up to 500MB per file.",
    },
    {
      question: "Will the formatting be preserved after conversion?",
      answer: "Yes! Our advanced AI engine is designed to maintain layouts, fonts, and images as close to the original as possible during the conversion process.",
    },
    {
      question: "Do I need to install any software?",
      answer: "No installation is required. DevStack Pro is a 100% cloud-based tool that works directly in any modern web browser like Chrome, Firefox, or Safari.",
    },
    {
      question: "Can I use this tool on my mobile phone?",
      answer: "Absolutely! Our platform is fully responsive and works perfectly on smartphones and tablets, allowing you to convert documents on the go.",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-white mb-2">Frequently Asked Questions</h2>
        <p className="text-slate-400">Everything you need to know about the {slug.replace("-", " ")} tool.</p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-slate-800 rounded-xl overflow-hidden bg-[#0b1224]/50 backdrop-blur-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-left text-white hover:bg-slate-800/50 transition-colors"
            >
              <span className="font-semibold text-sm md:text-base">{faq.question}</span>
              <ChevronDown 
                size={20} 
                className={`text-blue-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
              />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}