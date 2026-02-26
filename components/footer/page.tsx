"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050a15] border-t border-slate-800/60 py-10 mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* 1. LEFT SIDE: Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-xl font-bold text-white tracking-tight">
              DevStack<span className="text-blue-500">Pro</span>
            </span>
            <p className="text-slate-500 text-[11px] font-medium tracking-wide">
              PREMIUM DEV TOOLS
            </p>
          </div>

          {/* 2. CENTER: Credits & Heart (Stacked) */}
          <div className="flex flex-col items-center gap-2">
             <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
                <Link href="/terms" className="hover:text-blue-500 transition-colors">Terms</Link>
                <Link href="/privacy" className="hover:text-blue-500 transition-colors">Privacy</Link>
                <Link href="/contact" className="hover:text-blue-500 transition-colors">Support</Link>
             </div>
             
             <div className="text-slate-500 text-[13px] flex flex-col items-center">
                <span>© {currentYear} DevStack Pro</span>
                <span className="text-[11px] mt-1 text-slate-600">
                  Made with <Heart size={10} className="inline text-red-500 fill-red-500 mx-0.5" /> for the Developer Community.
                </span>
             </div>
          </div>

          {/* 3. RIGHT SIDE: Social Icons */}
          <div className="flex items-center gap-6">
            <Link href="#" className="text-slate-500 hover:text-blue-400 transition-all hover:scale-110">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-all hover:scale-110">
              <Github size={20} />
            </Link>
            <Link href="#" className="text-slate-500 hover:text-blue-600 transition-all hover:scale-110">
              <Linkedin size={20} />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}