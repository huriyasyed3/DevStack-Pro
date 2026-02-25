"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Twitter, Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const currentYear = new Date().getFullYear();

  // 1. DASHBOARD FOOTER (Minimal)
  if (isDashboard) {
    return (
      <footer className="w-full py-6 px-8 border-t border-slate-800/50 bg-[#020817]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-slate-500 text-sm font-medium">
            <span>© {currentYear} DevStack Pro</span>
            <span className="hidden md:block text-slate-800">|</span>
            <Link href="/terms" className="hover:text-blue-500">Terms</Link>
            <Link href="/privacy" className="hover:text-blue-500">Privacy</Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">All Systems Operational</span>
          </div>
        </div>
      </footer>
    );
  }

  // 2. HOME PAGE FOOTER (Detailed)
  return (
    <footer className="bg-[#050a15] border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Image src="/logo.png" alt="DevStack Pro" width={150} height={40} className="object-contain" />
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional-grade tools for developers. Fast, secure, and AI-powered.
            </p>
            <div className="flex gap-4">
              <Twitter size={18} className="text-slate-500 hover:text-blue-400 cursor-pointer" />
              <Github size={18} className="text-slate-500 hover:text-white cursor-pointer" />
              <Linkedin size={18} className="text-slate-500 hover:text-blue-600 cursor-pointer" />
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-white font-bold mb-6">Tools</h4>
            <ul className="text-slate-400 text-sm space-y-4">
              <li className="hover:text-white cursor-pointer">PDF Tools</li>
              <li className="hover:text-white cursor-pointer">Dev Tools</li>
              <li className="hover:text-white cursor-pointer">SEO Tools</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="text-slate-400 text-sm space-y-4">
              <li className="hover:text-white cursor-pointer text-sm">About Us</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <div className="space-y-4">
              <input type="email" placeholder="Email address" className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-sm text-white" />
              <button className="w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-lg text-sm font-bold">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-slate-500 text-xs">
          © {currentYear} DevStack Pro. Made with <Heart size={12} className="inline text-red-500 fill-red-500" /> for the Community.
        </div>
      </div>
    </footer>
  );
}