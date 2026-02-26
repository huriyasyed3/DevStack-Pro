"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    /* FIXED: bg-[#050a15] -> bg-card | border-slate-800 -> border-border */
    <footer className="w-full bg-card border-t border-border py-10 mt-auto transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* 1. LEFT SIDE: Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start gap-1">
            {/* FIXED: text-white -> text-foreground */}
            <span className="text-xl font-bold text-foreground tracking-tight">
              DevStack<span className="text-primary">Pro</span>
            </span>
            <p className="text-muted-foreground text-[11px] font-medium tracking-wide">
              PREMIUM DEV TOOLS
            </p>
          </div>

          {/* 2. CENTER: Credits & Links */}
          <div className="flex flex-col items-center gap-2">
             <div className="flex items-center gap-4 text-muted-foreground text-sm font-medium">
                <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                <Link href="/contact" className="hover:text-primary transition-colors">Support</Link>
             </div>
             
             <div className="text-muted-foreground/80 text-[13px] flex flex-col items-center">
                <span>© {currentYear} DevStack Pro</span>
                <span className="text-[11px] mt-1 text-muted-foreground/60">
                  Made with <Heart size={10} className="inline text-red-500 fill-red-500 mx-0.5" /> for the Developer Community.
                </span>
             </div>
          </div>

          {/* 3. RIGHT SIDE: Social Icons */}
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-blue-400 transition-all hover:scale-110">
              <Twitter size={20} />
            </Link>
            {/* FIXED: hover:text-white -> hover:text-foreground */}
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110">
              <Github size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-blue-600 transition-all hover:scale-110">
              <Linkedin size={20} />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}